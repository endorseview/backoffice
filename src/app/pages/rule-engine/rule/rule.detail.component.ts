import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'environments/environment';
import { Restangular } from 'ngx-restangular';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { fuseAnimations } from '../../../../@fuse/animations';
import { Rule } from '../../../model/admin/rule.model';
import { dataStatusList } from '../../../model/types.model';
import { ApiService } from '../../../_services/api.service';


@Component({
  selector: 'rule-detail',
  templateUrl: './rule.detail.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [
    MessageService,
    {
      provide: 'RuleService',
      useFactory: (restangular: Restangular) => new ApiService<Rule>(restangular, new Rule()),
      deps: [Restangular]
    }
  ]
})

export class RuleDetailComponent implements OnInit {
  spinnerConfig = environment.spinner;
  item: any = new Rule();
  title: string;
  message: string;
  isNew = false;
  statusList = dataStatusList.filter(x => x.value);
  editorOptions = {theme: 'vs-light', language: 'javascript'};

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    @Inject('RuleService') private ruleService: ApiService<Rule>,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.getRule(parseInt(params['id']));
      }
      if (params['id'] === 'add') {
          this.isNew = true;
      }
    });
  }
  getRule(id): void {
    
    if ( id > 0) {
      this.spinner.show();
      this.ruleService.findById(id).subscribe((data) => {
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
      const endpoint = update ? this.ruleService.update(this.item) : this.ruleService.saveOrUpdate(this.item);
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
        this.router.navigate(['rule-engine/rule', data.id]);
        
      }, (response) => {
        this.spinner.hide();
        this.translateService.get('message.error.title').subscribe(msg => {
          this.title = msg;
        });

        this.messageService.add({ severity: 'error', summary: this.title, detail: response.data.error_description });
      });
    } else {
      ['function', 'rawFunction', 'message']
      .filter(s => !this.item[s])
      .forEach(s => {
        this.translateService.get([
          'message.error.title',
          'form.messages.validation.required'], {value: s})
        .subscribe(msg => {
          this.title = msg['message.error.title'];
          this.message = msg['form.messages.validation.required'];
          this.messageService.add({
            severity: 'error',
            summary: this.title,
            detail: this.message
          });
        });
        
      });
    }
  }
  homePage(): void {
    this.router.navigate(['rule-engine/rule']);
  }
}
