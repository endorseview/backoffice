import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { dataStatusList } from 'app/model/types.model';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { fuseAnimations } from '../../../@fuse/animations';
import { MessageList } from '../../model/admin/message-list.model';
import { ApiService } from '../../_services/api.service';


@Component({
  selector: 'message-list-detail',
  templateUrl: './message-list.detail.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    MessageService,
    {
      provide: 'MessageListService',
      useFactory: (restangular: Restangular) => new ApiService<MessageList>(restangular, new MessageList()),
      deps: [Restangular]
    }
  ]
})

export class MessageListDetailComponent implements OnInit {
  spinnerConfig = environment.spinner;
  item: any = new MessageList();
  title: string;
  message: string;
  isNew = false;
  statusList = dataStatusList.filter(x => x.value);

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    @Inject('MessageListService') private messageListService: ApiService<MessageList>,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.getMessageList(parseInt(params['id']));
      }
      if (params['id'] === 'add') {
          this.isNew = true;
      }
    });
  }
  getMessageList(id): void {
    
    if ( id > 0) {
      this.spinner.show();
      this.messageListService.findById(id).subscribe((data) => {
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
      const endpoint = update ? this.messageListService.update(this.item) : this.messageListService.saveOrUpdate(this.item);
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
        // this.router.navigate(['message-list', data.id]);
        
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
    this.router.navigate(['message-list']);
  }
}
