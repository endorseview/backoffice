import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FuseConfirmDialogModule } from '@fuse/components/confirm-dialog/confirm-dialog.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { RuleComponent } from './rule.component';
import { RuleDetailComponent } from './rule.detail.component';

// define crud component routes 
const routes = [
  {
    path: '',
    component: RuleComponent
  },
  {
    path: ':id',
    component: RuleDetailComponent
  }
];

@NgModule({
  declarations: [
    RuleComponent,
    RuleDetailComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    // fuse theme modules
    FuseSharedModule,
    FuseConfirmDialogModule,
    TranslateModule,
    TableModule,
    ToastModule,
    DropdownModule,
    // material modules
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    // Ngx-Spinner
    NgxSpinnerModule,
    // Ngx-monaco-editor
    MonacoEditorModule
  ],
  entryComponents: [ RuleComponent ],
  providers: [
    MessageService
  ]
})
export class RuleModule { }
