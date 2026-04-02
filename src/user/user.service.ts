import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class UsersService {

  constructor(private supabaseService: SupabaseService) {}

  async getAll() {

    const supabase = this.supabaseService.getSupabaseService();

    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    return data;
  }

  async findByEmail(email: string) {

    const supabase = this.supabaseService.getSupabaseService();

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      return null;
    }

    return data;
  }

  async createUser(userData: { name: string; email: string; password: string; department: string }) {

    const supabase = this.supabaseService.getSupabaseService();

    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
      .single();

    if (error) {
        throw new Error(`Supabase error: ${error.message}`);
    }

    return data;
  }

  async getAllUsers() {

    const supabase = this.supabaseService.getSupabaseService();

    const { data, error } = await supabase
      .from('users')
      .select('*');

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    return data;
  }

  async deleteUser(id: number) {

    const supabase = this.supabaseService.getSupabaseService();

    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Supabase error: ${error.message}`);
    }

    return { message: 'User deleted successfully' };
  }

}