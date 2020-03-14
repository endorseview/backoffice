// import angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
// import material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
// import fuse theme modules
import { FuseConfirmDialogModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
// import translation module 
import { TranslateModule } from '@ngx-translate/core';
import { NgxSpinnerModule } from 'ngx-spinner';
// import primeng modules
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
// import components
import { CurrencyComponent } from './currency.component';
import { CurrencyDetailComponent } from './currency.detail.component';




// define crud component routes 
const routes = [
  {
    path: '',
    component: CurrencyComponent
  },
  {
    path: ':id',
    component: CurrencyDetailComponent
  }
];

@NgModule({
  declarations: [
    CurrencyComponent,
    CurrencyDetailComponent
  ],
  imports: [
    // angular modules
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    // fuse theme modules
    FuseSharedModule,
    FuseConfirmDialogModule,
    TranslateModule,
    TableModule,
    ToastModule,
    // material modules
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    // primeNG
    DropdownModule,
    // Ngx-Spinner
    NgxSpinnerModule
  ],
  entryComponents: [CurrencyComponent],
  providers: [
    
  ],

})
export class CurrencyModule { }
