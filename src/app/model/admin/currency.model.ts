import { ApiModel } from '../api.model';

export class Currency extends ApiModel {
  public symbol: string;
  public iso: string;
  url = 'admin/currency';  
}
