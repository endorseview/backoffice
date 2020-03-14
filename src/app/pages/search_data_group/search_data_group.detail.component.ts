import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Provider } from 'app/model/admin/provider.model';
import { Pageable } from 'app/model/pageable';
import { dataStatusList } from 'app/model/types.model';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { fuseAnimations } from '../../../@fuse/animations';
import { SearchDataGroup } from '../../model/admin/search_data_group.model';
import { SearchDataMapValue } from '../../model/admin/search_data_map_value.model';
import { ApiService } from '../../_services/api.service';


@Component({
  selector: 'search_data_group-detail',
  templateUrl: './search_data_group.detail.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    MessageService,
    {
      provide: 'SearchDataGroupService',
      useFactory: (restangular: Restangular) => new ApiService<SearchDataGroup>(restangular, new SearchDataGroup()),
      deps: [Restangular]
    },
    {
      provide: 'SearchDataMapValueService',
      useFactory: (restangular: Restangular) => new ApiService<SearchDataMapValue>(restangular, new SearchDataMapValue()),
      deps: [Restangular]
    },
    {
      provide: 'ProviderService',
      useFactory: (restangular: Restangular) => new ApiService<Provider>(restangular, new Provider()),
      deps: [Restangular]
    }
  ]
})

export class SearchDataGroupDetailComponent implements OnInit {
  spinnerConfig = environment.spinner;
  item: any = new SearchDataGroup();
  title: string;
  message: string;
  isNew = false;
  statusList = dataStatusList.filter(x => x.value);
  search: SearchDataMapValue = new SearchDataMapValue();
  pageable: Pageable = new Pageable();
  keys: string[] = [];
  selectedKeys: string[];
  totalRecords: number;

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    @Inject('SearchDataGroupService') private searchDataGroupService: ApiService<SearchDataGroup>,
    @Inject('SearchDataMapValueService') private searchDataMapValueService: ApiService<SearchDataMapValue>,
    @Inject('ProviderService') private providerService: ApiService<Provider>,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.getSearchDataGroup(parseInt(params['id']));
      }
      if (params['id'] === 'add') {
          this.isNew = true;
      }
    });
  }
  getSearchDataGroup(id): void {
    
    if ( id > 0) {
      this.spinner.show();
      this.searchDataGroupService.findById(id).subscribe((data) => {
          this.spinner.hide();

          this.item = data;
      }, (response) => {
          this.spinner.hide();
          this.translateService.get('message.error.title').subscribe(msg => {
              this.title = msg;
          });

          this.messageService.add({severity: 'error', summary: this.title, detail: response.data.error_description});
      });
    }
  }

  findKeyMaps(event?: any): void {
    this.spinner.show();
    this.searchDataMapValueService.findAll(null, this.pageable, this.search).subscribe(data => {
      this.spinner.hide();
      this.keys = data.content.map(x => x.key);
      this.totalRecords = data.totalElements;
      this.pageable.page = data.number;
    },
    response => {
      this.spinner.hide();
      this.translateService.get('message.error.title').subscribe(msg => {
        this.title = msg;
      });
      this.message = response.data ? response.data.error_description : 'NA';
      this.messageService.add({
        severity: 'error',
        summary: this.title,
        detail: this.message
      });
    });
  }

  saveOrCreate(valid): void {
    if (valid) {
      const update = this.item.id > 0 ? true : false;
      const endpoint = update ? this.searchDataGroupService.update(this.item) : this.searchDataGroupService.saveOrUpdate(this.item);
      this.spinner.show();
      endpoint.subscribe((data) => {
        this.spinner.hide();
        if (this.item.id > 0) {
          this.translateService.get('message.update.title').subscribe(msg => {
            this.title = msg;
          });

          this.translateService.get('message.update.message').subscribe(msg => {
            this.message = msg;
          });
          this.messageService.add({ severity: 'success', summary: this.title, detail: this.message });
        } else {
          this.translateService.get('message.save.title').subscribe(msg => {
            this.title = msg;
          });

          this.translateService.get('message.save.message').subscribe(msg => {
            this.message = msg;
          });

          this.messageService.add({ severity: 'success', summary: this.title, detail: this.message });

        }
        // this.router.navigate(['search_data_group', data.id]);
        
      }, (response) => {
        this.spinner.hide();
        this.translateService.get('message.error.title').subscribe(msg => {
          this.title = msg;
        });

        this.messageService.add({ severity: 'error', summary: this.title, detail: response.data.error_description });
      });
    }
  }
  homePage(): void {
    this.router.navigate(['search_data_group']);
  }
}
