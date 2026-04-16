import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { CreateFormDto } from './form.dto';
import { EmailService } from 'src/email/email.service';
import { PipefyService } from 'src/pipefy/pipefy.service';

@Injectable()
export class FormService {

  constructor(
    private supabaseService: SupabaseService,
    private emailService: EmailService,
    private pipefyService: PipefyService

  ) { }

  async getAll(
    department?: string,
    startDate?: string,
    endDate?: string
  ): Promise<any[]> {

    const supabase = this.supabaseService.getSupabaseService();

    let query = supabase
      .from('tickets')
      .select(`
      *,
      avaliacoes(*),
      analises(
        *,
        analise_causas(
          causa_id,
          causas(*)
        )
      )
    `)
      .eq('status', true);

    // filtro por departamento
    if (department) {
      query = query.eq('department', department);
    }

    // filtro por data inicial
    if (startDate) {
      query = query.gte('created_at', `${startDate}T00:00:00.000`);
    }

    // filtro por data final
    if (endDate) {
      query = query.lte('created_at', `${endDate}T23:59:59.999`);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching forms:', error);
      throw new Error('Failed to fetch forms');
    }

    return data;
  }

  async createForm(formData: CreateFormDto) {

    const instancSupabase = this.supabaseService.getSupabaseService();

    const { data, error } = await instancSupabase.from('tickets').insert([formData]).select();

    if (error) {
      console.error('Error creating form:', error);
      throw new Error('Failed to create form');
    }

    await Promise.all([
      this.pipefyService.createCard(formData),
      this.emailService.sendEmail(
        formData.email_voluntario_sga,
        'Formulário Recebido',
        {
          codigo: data[0].id,
          nome: formData.nome_associado_sga,
          consultor: formData.consultor_associado_sga,
          placa: formData.plate_associate,
          descricao: formData.description_associate,
          modelo: formData.modelo_associado_sga
        }
      )
    ]);

    return data;

  }

  async getFormById(id: number) {

    const instancSupabase = this.supabaseService.getSupabaseService();

    const { data, error } = await instancSupabase
      .from('tickets')
      .select(`
    *,
    avaliacoes(*),
    analises(
      *,
      analise_causas(
        causa_id,
        causas(
          *,
          causa_categorias(*)
        )
      )
    )
  `)
      .eq('id', id)
      .eq('status', true)
      .single();

    if (error) {
      console.error('Error fetching form by id:', error);
      throw new Error('Failed to fetch form by id');
    }

    return data;

  }

  async deleteForm(id: number) {

    const instancSupabase = this.supabaseService.getSupabaseService();

    const { data, error } = await instancSupabase
      .from('tickets')
      .update({ status: false })
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error deleting form:', error);
      throw new Error('Failed to delete form');
    }

    return data;
  }

  async updateForm(id: number, formData: CreateFormDto) {

    const instancSupabase = this.supabaseService.getSupabaseService();

    const { data, error } = await instancSupabase.from('tickets').update(formData).eq('id', id).select();

    if (error) {
      console.error('Error updating form:', error);
      throw new Error('Failed to update form');
    }

    return data;

  }

}
