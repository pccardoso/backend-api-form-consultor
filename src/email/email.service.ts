import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {

  constructor(private readonly mailerService: MailerService) { }

  async sendEmail(send: any, subject: string, dataInfor: any) {
    
    const codigo = dataInfor.codigo;
    const nome = dataInfor.nome;
    const consultor = dataInfor.consultor;
    const placa = dataInfor.placa;
    const linkAvaliacao = `https://autoanalytics.mundoevogard.com/satisfaction/${codigo}`;
    const descricao = dataInfor.descricao || "Sem descrição";
    const modelo = dataInfor.modelo || "Modelo não informado";

    await this.mailerService.sendMail({
      to: send,
      subject: subject,
      html: `
  <div style="background:#f2f4f7;padding:40px 0;font-family:Arial,Helvetica,sans-serif">

    <table width="600" align="center" cellpadding="0" cellspacing="0"
      style="background:white;border-radius:10px;overflow:hidden">

      <!-- HEADER -->
      <tr>
        <td style="background:#0c2d48;padding:20px;color:white">

          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>

              <td align="left">
                <img 
                  src="https://s3-database.mundoevogard.com/logos/evogard.png"
                  alt="Evogard"
                  style="height:40px"
                >
              </td>

              <td align="right" style="font-size:12px;opacity:0.8">
                SOLICITAÇÃO #${codigo}
              </td>

            </tr>
          </table>

          <div style="margin-top:15px;font-size:20px;font-weight:bold">
            ${nome} (${placa})
          </div>

          <div style="font-size:14px;margin-top:5px">
            Consultor: ${consultor}
          </div>

          <div style="font-size:14px;margin-top:5px">
            Modelo Veículo: ${modelo}
          </div>

        </td>
      </tr>

      <!-- CONTEÚDO -->
      <tr>
        <td style="padding:30px;text-align:center">

          <h2 style="color:#0c2d48;margin-top:0">
            Pesquisa de Satisfação
          </h2>

          <!-- DESCRIÇÃO -->
            <div style="
              margin:25px 0;
              text-align:left;
              background:#f9fafb;
              border:1px solid #e5e7eb;
              border-radius:8px;
              padding:15px 20px;
            ">
              <div style="
                font-size:13px;
                color:#888;
                margin-bottom:5px;
                font-weight:bold;
                text-transform:uppercase;
              ">
                Descrição da Solicitação
              </div>

              <div style="
                font-size:14px;
                color:#333;
                line-height:1.6;
                word-break:break-word;
              ">
                ${descricao}
              </div>
            </div>

          <p style="color:#555;font-size:15px;line-height:1.5">
            Sua opinião é muito importante para nós.
            Clique no botão abaixo para avaliar o atendimento
            referente à sua solicitação.
          </p>

          <div style="margin:35px 0">
            <a href="${linkAvaliacao}"
              style="
              background:#22c55e;
              color:white;
              padding:15px 30px;
              text-decoration:none;
              border-radius:6px;
              font-weight:bold;
              font-size:16px;
              display:inline-block;
              ">
              Avaliar Atendimento
            </a>
          </div>

          <p style="font-size:13px;color:#888">
            Leva menos de 10 segundos 🙂
          </p>

        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:#f5f5f5;padding:15px;text-align:center;font-size:12px;color:#888">
          © Evogard • Sistema de Atendimento
        </td>
      </tr>

    </table>

  </div>
  `,
    });
  }

}
