interface IMailTo {
  name: string;
  office: string;
}

interface IMailMessage {
  subject: string;
  content: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailService {
  sendMail(req: IMessageDTO): void;
}

class EmailService implements IMailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Sent Mail to ${to.name}: ${message.subject}!`);
  }
}

export default EmailService;