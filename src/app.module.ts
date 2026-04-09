import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { SatisfactionModule } from './satisfaction/satisfaction.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { CauseCategoryModule } from './cause_category/cause_category.module';
import { CauseModule } from './cause/cause.module';
import { CauseAnalysisModule } from './cause_analysis/cause_analysis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASS_EMAIL,
        },
      },
      defaults: {
        from: '"Sistema de Solicitações" <no-reply@sistema.com>',
      },
    }),
    FormModule,
    AuthModule,
    UsersModule,
    SatisfactionModule,
    EmailModule,
    CauseCategoryModule,
    CauseModule,
    CauseAnalysisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}