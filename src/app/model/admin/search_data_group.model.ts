import { ApiModel } from '../api.model';
import { DataStatus } from '../types.model';

export class SearchDataGroup extends ApiModel {
  public keys: string[] = [];
  status = DataStatus.ACTIVE;
  url = 'admin/search_data_group';
}
