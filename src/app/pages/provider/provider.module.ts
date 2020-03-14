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
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
// import components
import { ProviderComponent } from './provider.component';
import { ProviderDetailComponent } from './provider.detail.component';




// define crud component routes 
const routes = [
  {
    path: '',
    component: ProviderComponent
  },
  {
    path: ':id',
    component: ProviderDetailComponent
  }
];

@NgModule({
  declarations: [
    ProviderComponent,
    ProviderDetailComponent
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
    DropdownModule,
    // material modules
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    // Ngx-Spinner
    NgxSpinnerModule
  ],
  entryComponents: [ProviderComponent],
  providers: [
    
  ],

})
export class ProviderModule { }
