import { ISendEmail } from '../interfaces/ISendEmail';
import { ISendEmailResponse } from '../interfaces/ISendEmailResponse';
import { Api } from '../providers/Api';

const sendEmail = (data: ISendEmail) =>
  Api.post<ISendEmailResponse>('/api/v1/mails', data);

export const MailServices = {
  sendEmail,
};
