import { Injectable } from '@angular/core';
import { ClientsData } from '../data/clients';

@Injectable()
export class ClientsService extends ClientsData {
  
  data = [{
    id: 1,
    name: 'IS4-Admin',
    logo: 'https://jpproject.azurewebsites.net/sso/images/brand/logo.png',
    description: 'desc...',
    clienturl: 'https://identity.opis.cloud',
  }, {
    id: 2,
    name: 'IS4-Admin',
    logo: 'https://jpproject.azurewebsites.net/sso/images/brand/logo.png',
    description: 'desc...',
    clienturl: 'https://identity.opis.cloud',
  }];

  getData() {
    return this.data;
  }
}
