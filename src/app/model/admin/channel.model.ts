import { ApiModel } from '../api.model';

export class Channel extends ApiModel {
  public is_default: boolean = null;
  url = 'admin/channel'
  constructor(isDefault?: boolean) {
    super();
    if (isDefault !== undefined) {
      this.is_default = isDefault;
    }
  }
  
}
