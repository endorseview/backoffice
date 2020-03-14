import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslateService } from '@ngx-translate/core';
import { Channel } from 'app/model/admin/channel.model';
import { Pageable } from 'app/model/pageable';
import { ApiService } from 'app/_services/api.service';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { FuseConfirmDialogComponent } from '../../../@fuse/components/confirm-dialog/confirm-dialog.component';
import { dataStatusList } from '../../model/types.model';


@Component({
  selector: 'channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
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
export class ChannelComponent implements OnInit {
  spinnerConfig: any = environment.spinner;
  totalRecords: any;
  public list: Channel[];
  public search: Channel = new Channel();
  public pageable: Pageable = new Pageable();
  public title: string;
  public message: string;
  public cols = [
    { field: 'id', header: 'table.columns-title.id', width: '50px' },
    { field: 'name', header: 'table.columns-title.name', width: '200px'},
    { field: 'description', header: 'table.columns-title.description', width: '300px'},
    { field: 'status', header: 'table.columns-title.dataStatus', width: '160px'}
  ];
  selectedItems: any[] = [];
  statusList = dataStatusList;

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService,
    @Inject('ChannelService') private channelService: ApiService<Channel>,
    private router: Router,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    delete this.search.status;
  }

  findAll(event: LazyLoadEvent): void {
    this.spinner.show();
    this.channelService.findAll(event, this.pageable, this.search).subscribe(data => {
      this.spinner.hide();
      this.list = data.content;
      this.totalRecords = data.totalElements;
      this.pageable.page = data.number;
    },
    response => {
      this.spinner.hide();
      this.translateService.get('message.error.title').subscribe(msg => {
        this.title = msg;
      });
      this.messageService.add({ 
        severity: 'error', 
        summary: this.title, 
        detail: response.data.error_description
      });
    });
  }
  edit(item: any): void {
    this.router.navigate(['channel', item.id]);
  }
  add(): void {
    this.router.navigate(['channel', 'add']);
  }
  remove(item): void {
    this.selectedItems = [];
    this.selectedItems.push(item);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FuseConfirmDialogComponent, {
      width: '400px',
    });
    
    this.translateService.get('question.delete').subscribe(msg => {
      dialogRef.componentInstance.confirmMessage = msg;
    });
    dialogRef.componentInstance.list = this.selectedItems;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.removes();
      }
    });
  }

  removes(): void {

    if (this.selectedItems.length === 0) {
        return;
    }

    this.selectedItems.forEach(item => {
        this.delete(item);
    });
  }
  delete(item): void {
    this.spinner.show();
    this.channelService.delete(item.id)
      .subscribe(() => {
        this.spinner.hide();
        this.translateService.get('message.delete.title').subscribe(msg => {
          this.title = msg;
        });

        this.translateService.get('message.delete.message').subscribe(msg => {
          this.message = msg;
        });

        this.list = this.list.filter((val, i) => i !== this.list.indexOf(item));
        this.totalRecords--;
        this.selectedItems = this.selectedItems.filter((val, i) => i !== this.selectedItems.indexOf(item));
        this.messageService.add({ severity: 'success', summary: this.title, detail: this.message });

      }, (response) => {
        this.translateService.get('message.error.title').subscribe(msg => {
          this.title = msg;
        });

        this.messageService.add({ severity: 'error', summary: this.title, detail: response.data.error_description });
      });

  }
  clearSearch(): void {
    this.search = new Channel();
    this.findAll(null);
  }
}

