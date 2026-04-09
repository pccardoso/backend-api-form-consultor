import { Module } from '@nestjs/common';
import { CauseService } from './cause.service';
import { CauseController } from './cause.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  controllers: [CauseController],
  providers: [CauseService],
  imports: [SupabaseModule],
})
export class CauseModule {}
