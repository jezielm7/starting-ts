import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [{
  name: 'Jeziel',
  office: 'Mobile Developer',
}];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    
    emailService.sendMail({
      to: { 
        name: 'Jeziel', 
        office: 'Mobile Developer' 
      },
      message: { 
        subject: 'Welcome to my page!', 
        content: `I'm mobile developer` 
      },
    });

    return res.json(users);
  }
};