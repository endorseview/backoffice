export enum DataStatus {
    ACTIVE = 'ACTIVE', PASSIVE = 'PASSIVE', DELETED = 'DELETED'
}

export const dataStatusList = [...Object.keys(DataStatus).map(
    x => ({label: x, value: DataStatus[x]})
), { label: 'ALL', value: '' }];

export enum PropertyType {

    NUMERIC = 'NUMERIC', TEXT = 'TEXT', BOOLEAN = 'BOOLEAN'

}
