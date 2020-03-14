import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { fuseAnimations } from '../../../@fuse/animations';
import { Currency } from '../../model/admin/currency.model';
import { dataStatusList } from '../../model/types.model';
import { ApiService } from '../../_services/api.service';


@Component({
  selector: 'currency-detail',
  templateUrl: './currency.detail.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    MessageService,
    {
      provide: 'CurrencyService',
      useFactory: (restangular: Restangular) => new ApiService<Currency>(restangular, new Currency()),
      deps: [Restangular]
    }
  ]
})

export class CurrencyDetailComponent implements OnInit {
  spinnerConfig = environment.spinner;
  item: any = new Currency();
  title: string;
  message: string;
  isNew = false;
  statusList = dataStatusList.filter(x => x.value);

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    @Inject('CurrencyService') private currencyService: ApiService<Currency>,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.getCurrency(parseInt(params['id']));
      }
      if (params['id'] === 'add') {
          this.isNew = true;
      }
    });
  }
  getCurrency(id): void {
    
    if ( id > 0) {
      this.spinner.show();
      this.currencyService.findById(id).subscribe((data) => {
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
      const endpoint = update ? this.currencyService.update(this.item) : this.currencyService.saveOrUpdate(this.item);
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
        this.router.navigate(['currency', data.id]);
        
      }, (response) => {
        this.spinner.hide();
        response = response.data;
        this.translateService.get('message.error.title').subscribe(msg => {
          this.title = response.error || msg;
        });
        this.message = Array.isArray(response.messages) ? response.messages.join('; ') : 'NA';
        this.messageService.add({ severity: 'error', summary: this.title, detail: this.message });
      });
    }
  }
  homePage(): void {
    this.router.navigate(['currency']);
  }
}
