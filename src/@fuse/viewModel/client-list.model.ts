export class ClientListItemModel {
    clientId: string;
    clientName: string;
    enabled: boolean;
    logoUri: string;
}

export class ClientList {
    data: ClientListItemModel[];
    errors: any;
    success: boolean;
}
