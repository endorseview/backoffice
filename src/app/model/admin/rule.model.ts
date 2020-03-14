import { ApiModel } from '../api.model';

export class Rule extends ApiModel {
  definition: string;
  function: string;
  message: string;
  rawFunction: string;
  url = 'admin/rule';
}