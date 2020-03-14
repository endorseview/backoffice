import { Restangular } from 'ngx-restangular';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiModel } from '../model/api.model';
import { Pageable } from '../model/pageable';

export class ApiService<T extends ApiModel> {
    public apiUrl = 'api/v1/';
    constructor(public service: Restangular, public model: T) {
        this.apiUrl = this.apiUrl + this.model.url;
    }

    findAll(event: LazyLoadEvent, pageable: Pageable, search: any, url?: string): Observable<any> {
        const sort = this.setPagingParameters(pageable, event);
        const query = { page: pageable.page, size: pageable.size, sort: sort };
        this.setSearchCache(search);
        return this.service.one(url || (this.apiUrl + '/list')).get(Object.assign(query, search));
    }

    findAllPageless(event: LazyLoadEvent, search: any, url?: string): Observable<any> {
        const key = null != event ? null == event.sortField ? '' : event.sortField : '';
        const value = null == event ? 'desc' : 1 === event.sortOrder ? 'asc' : 'desc';
        const sort = key + ',' + value;
        const query = { sort: sort };
        this.setSearchCache(search);
        return this.service.one(url || (this.apiUrl + '/list')).get(Object.assign(query, search));
    }

    private setPagingParameters(pageable: Pageable, event: LazyLoadEvent): string {
        pageable.page = Math.floor(event == null ? 0 : event.first / event.rows);
        pageable.page = pageable.page > -1 ? pageable.page : 0;

        pageable.size = event == null ? (pageable == null ? 50 : pageable.size) : event.rows;

        const key = null != event ? null == event.sortField ? '' : event.sortField : '';
        const value = null == event ? 'desc' : 1 === event.sortOrder ? 'asc' : 'desc';
        const sort = key + ',' + value;
        return sort;
    }

    autocomplete(q: any): Observable<T> {
        return this.service.one(this.apiUrl, 'autoComplete').get(q);
    }
    findById(id: number): Observable<ApiModel> {
        return this.service.one(this.apiUrl, id).get({ single: true });
    }
    findByName(name: string): Observable<ApiModel> {
        return this.service.one(this.apiUrl, name).get({ single: true });
    }

    getXML(id: number, version: number): Observable<T> {
        return this.service.one(this.apiUrl + '/xml/' + id + '/' + version).get({ single: true });
    }

    getMax(): Observable<T> {
        return this.service.one(this.apiUrl, 'max').get({single: true});
    }

    maxVersion(id): Observable<T> {
        return this.service.one(this.apiUrl + '/maxversion', id).get();
    }

    saveOrUpdate(rec: T): Observable<T> {
        return this.service.all(this.apiUrl).post(JSON.stringify(rec), { single: true });
    }

    update(rec: T): Observable<T> {
        return this.service.all(this.apiUrl).customPUT(JSON.stringify(rec));
    }

    patch(rec: T): Observable<T> {
        return this.service.all(this.apiUrl).patch(JSON.stringify(rec));
    }

    patchUrl(url: string, rec: T): Observable<T> {
        return this.service.all(url).patch(JSON.stringify(rec));
    }

    savesOrUpdates(recs: T[]): Observable<T[]> {
        return this.service.all(this.apiUrl + '/list').post(JSON.stringify(recs));
    }

    delete(id: number): Observable<T> {
        return this.service.one(this.apiUrl, id).remove();
    }

    getService(): Restangular {
        return this.service;
    }

    getApiUrl(): string {
        return this.apiUrl;
    }

    getSearchCache(): any {
        const data = JSON.parse(localStorage.getItem(this.apiUrl));
        return data != null ? data : this.model;
    }

    setSearchCache(search: any): void {
        localStorage.setItem(this.apiUrl, JSON.stringify(search));
    }
}
