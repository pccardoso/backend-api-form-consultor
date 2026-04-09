import { Module } from '@nestjs/common';
import { CauseCategoryService } from './cause_category.service';
import { CauseCategoryController } from './cause_category.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [CauseCategoryController],
  providers: [CauseCategoryService],
}) 
export class CauseCategoryModule {}
