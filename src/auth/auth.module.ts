import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'minha_chave_super_secreta',
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}