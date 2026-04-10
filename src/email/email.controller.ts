import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {

    constructor(private readonly emailService: EmailService) {}

    @Get("teste")
    async sendTestEmail() {
        await this.emailService.sendEmail(
            "paulo.cardoso2408@gmail.com",
            "teste",
            {
                codigo: 123,
                nome: "Paulo Cardoso",
                consultor: "João Silva",
                placa: "ABC-1234",
                descricao: "Teste de envio de email"
            }
        );
    }

}
