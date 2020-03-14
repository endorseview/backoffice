import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { fuseAnimations } from '../../../@fuse/animations';
import { Channel } from '../../model/admin/channel.model';
import { dataStatusList } from '../../model/types.model';
import { ApiService } from '../../_services/api.service';


@Component({
  selector: 'channel-detail',
  templateUrl: './channel.detail.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    MessageService,
    {
      provide: 'ChannelService',
      useFactory: (restangular: Restangular) => new ApiService<Channel>(restangular, new Channel()),
      deps: [Restangular]
    }
  ]
})

export class ChannelDetailComponent implements OnInit {
  spinnerConfig = environment.spinner;
  item: any = new Channel();
  title: string;
  message: string;
  isNew = false;
  statusList = dataStatusList.filter(x => x.value);

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    @Inject('ChannelService') private channelService: ApiService<Channel>,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.getChannel(parseInt(params['id']));
      }
      if (params['id'] === 'add') {
          this.isNew = true;
      }
    });
  }
  getChannel(id): void {
    
    if ( id > 0) {
      this.spinner.show();
      this.channelService.findById(id).subscribe((data) => {
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
      const endpoint = update ? this.channelService.update(this.item) : this.channelService.saveOrUpdate(this.item);
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
        this.router.navigate(['channel', data.id]);
        
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
    this.router.navigate(['channel']);
  }
}
