import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e88fd15fa34ea0",
      pass: "8c0ac294ab4133"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "João Pedro Morbeck <jpmorbeck45@gmail.com>",
            subject,
            html: body,
        })
    }
}