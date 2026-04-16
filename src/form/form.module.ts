import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { SupabaseService } from 'src/supabase/supabase.service';
import { EmailModule } from 'src/email/email.module';
import { PipefyModule } from 'src/pipefy/pipefy.module';

@Module({
  imports: [EmailModule, PipefyModule],
  controllers: [FormController],
  providers: [FormService, SupabaseService],
  exports: [FormService]
})
export class FormModule {}
