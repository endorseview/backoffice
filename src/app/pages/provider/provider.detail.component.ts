import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { dataStatusList } from 'app/model/types.model';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { fuseAnimations } from '../../../@fuse/animations';
import { Provider } from '../../model/admin/provider.model';
import { ApiService } from '../../_services/api.service';


@Component({
  selector: 'provider-detail',
  templateUrl: './provider.detail.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    MessageService,
    {
      provide: 'ProviderService',
      useFactory: (restangular: Restangular) => new ApiService<Provider>(restangular, new Provider()),
      deps: [Restangular]
    }
  ]
})

export class ProviderDetailComponent implements OnInit {
  spinnerConfig = environment.spinner;
  item: any = new Provider();
  title: string;
  message: string;
  isNew = false;
  statusList = dataStatusList.filter(x => x.value);

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    @Inject('ProviderService') private providerService: ApiService<Provider>,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.getProvider(parseInt(params['id']));
      }
      if (params['id'] === 'add') {
          this.isNew = true;
      }
    });
  }
  getProvider(id): void {
    
    if ( id > 0) {
      this.spinner.show();
      this.providerService.findById(id).subscribe((data) => {
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
  saveOrCreate(valid): void {
    if (valid) {
      const update = this.item.id > 0 ? true : false;
      const endpoint = update ? this.providerService.update(this.item) : this.providerService.saveOrUpdate(this.item);
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
        this.router.navigate(['provider', data.id]);
        
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
    this.router.navigate(['provider']);
  }
}
