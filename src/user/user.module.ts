import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { UserController } from './user.controller';

@Module({
  imports: [SupabaseModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController] // 👈 MUITO IMPORTANTE
})
export class UsersModule {}