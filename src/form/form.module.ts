import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { SupabaseService } from 'src/supabase/supabase.service';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [FormController],
  providers: [FormService, SupabaseService]
})
export class FormModule {}
