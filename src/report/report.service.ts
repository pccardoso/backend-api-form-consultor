import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class ReportService {

  constructor(
    private supabaseService: SupabaseService
  ) { }

  async getCountCausas(
    dataInicio?: string,
    dataFim?: string
  ): Promise<any[]> {

    const supabase = this.supabaseService.getSupabaseService();

    let params: any = {};

    if (dataInicio && dataFim) {
      params.data_inicio = dataInicio;
      params.data_fim = dataFim;
    }

    else if (dataInicio && !dataFim) {
      params.data_inicio = dataInicio;
      params.data_fim = new Date().toISOString(); // até agora
    }

    else if (!dataInicio && dataFim) {
      params.data_inicio = '1970-01-01'; // ou outra data mínima do sistema
      params.data_fim = dataFim;
    }

    else {
      // nenhum filtro → pode mandar null ou um range aberto
      params.data_inicio = '1970-01-01';
      params.data_fim = new Date().toISOString();
    }

    const { data, error } = await supabase.rpc(
      'get_categorias_causas_totais_por_periodo',
      params
    );

    if (error) {
      console.error('Error fetching causas report:', error);
      throw new Error('Failed to fetch causas report');
    }

    return data;
  }

}
