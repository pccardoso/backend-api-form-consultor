import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FormModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}