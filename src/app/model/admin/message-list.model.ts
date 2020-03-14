import { ApiModel } from '../api.model';

export class MessageList extends ApiModel {
  public title: string;
  public message: string;
  public code: number;
  url = 'admin/message_list';
}
