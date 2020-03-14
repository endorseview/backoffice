import { ApiModel } from '../api.model';
import { DataStatus } from '../types.model';
import { Provider } from './provider.model';

export class SearchDataMapValue extends ApiModel {
  public key: string;
  public value: string;
  public provider: Provider;
  public hash_code: number;
  public channel_id: number;
  public provider_id: number;
  public type_id: number;
  status = DataStatus.ACTIVE;
  url = 'admin/search_data_map_value';
}
