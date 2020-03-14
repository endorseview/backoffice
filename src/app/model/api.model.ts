
import { DataStatus } from './types.model';
export class ApiModel {
    public id: number;
    public version: number;
    public name: string;
    public description: string;
    public url: string;
    public createdDate: any;
    public status: DataStatus = DataStatus.ACTIVE;

}
