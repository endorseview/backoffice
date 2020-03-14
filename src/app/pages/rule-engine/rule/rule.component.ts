import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { RuleParam } from 'app/model/admin/rule-param.model';
import { Pageable } from 'app/model/pageable';
import { DataStatus } from 'app/model/types.model';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Rule } from '../../../model/admin/rule.model';
import { ApiService } from '../../../_services/api.service';

@Component({
  selector: 'rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    {
      provide: 'RuleService',
      useFactory: restangular => new ApiService(restangular, new Rule()),
      deps: [Restangular]
    },
    {
      provide: 'RuleParamService',
      useFactory: restangular => new ApiService(restangular, new RuleParam()),
      deps: [Restangular]
    }
  ]
})
export class RuleComponent implements OnInit {

  spinnerConfig: any = environment.spinner;
  totalRecords: any;
  list: any[];
  pageable: Pageable = new Pageable();
  title: string;
  message: string;
  selectedItems: any[] = [];
  dataStatus =  DataStatus;
  statuses = [
    ...Object.values(this.dataStatus).map(x => ({label: x, value: this.dataStatus[x]})),
    {label: 'ALL', value: ''}
  ];

  public search: Rule = new Rule();

  public cols = [
    { field: 'id', header: 'table.columns-title.id', width: '50px' },
    { field: 'name', header: 'table.columns-title.name', width: '100px' },
    { field: 'definition', header: 'table.columns-title.definition' },
    { field: 'function', header: 'table.columns-title.function' },
    { field: 'message', header: 'table.columns-title.message' },
    { field: 'rawFunction', header: 'table.columns-title.rawFunction' },
    { field: 'status', header: 'table.columns-title.dataStatus', width: '160px'}
  ];
  constructor(
    @Inject('RuleService') private ruleService: ApiService<Rule>,
    @Inject('RuleParamService') private ruleParamService: ApiService<Rule>,
    private router: Router,
    private messageService: MessageService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    delete this.search.status;
  }

  findAll(event: LazyLoadEvent): void {
    this.spinner.show();
    this.ruleService.findAll(event, this.pageable, this.search).subscribe(data => {
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
        detail: response.data.error_description || response.data.error
      });
    });
  }
  edit(item: any): void {
    this.router.navigate(['rule-engine/rule', item.id]);
  }
  add(): void {
    this.router.navigate(['rule-engine/rule', 'add']);
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
    this.ruleService.delete(item.id)
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
    this.search = new Rule();
    this.findAll(null);
  }

}
