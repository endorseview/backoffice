import { Restangular } from 'ngx-restangular';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiModel } from '../model/api.model';
import { Pageable } from '../model/pageable';

export class ApiGradedService<T extends ApiModel, K extends ApiModel> {
    public apiUrl: string = 'api/v1/';

    constructor(public service: Restangular, public parentModel: K, public childModel: T) {
        this.apiUrl = this.apiUrl + parentModel.url + '/' + parentModel.id + '/' + childModel.url;
    }

    findAll(event: LazyLoadEvent, pageable: Pageable, search: any): Observable<K> {
        pageable.page = Math.floor(event == null ? 0 : event.first / event.rows);
        pageable.page = pageable.page > -1 ? pageable.page : 0;

        pageable.size = event == null ? (pageable == null ? 50 : pageable.size) : event.rows;

        var key = null != event ? null == event.sortField ? "id" : event.sortField : "id";
        var value = null == event ? "asc" : 1 == event.sortOrder ? "asc" : "desc";
        var sort = key + ',' + value;

        return this.service.one(this.apiUrl).get(Object.assign({ page: pageable.page, size: pageable.size, sort: sort }, search))
    }

    insert(rec: K): Observable<K> {
        return this.service.all(this.apiUrl).post(JSON.stringify(rec));
    }

    delete(id: number): Observable<K> {
        return this.service.one(this.apiUrl, id).remove();
    }

    deleteUrl(id: number, url: string): Observable<K> {
        return this.service.one(url, id).remove();
    }
    findById(id: number): Observable<K> {
        return this.service.one(this.apiUrl, id).get({ single: true });
    }

}

