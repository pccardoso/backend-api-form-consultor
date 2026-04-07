import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { SatisfactionModule } from './satisfaction/satisfaction.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FormModule,
    AuthModule,
    UsersModule,
    SatisfactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}