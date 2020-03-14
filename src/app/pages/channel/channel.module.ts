// import angular modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
// import material modules
import { MatButtonModule } from '@angular/material/button';
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
import { CheckboxModule } from 'primeng/checkbox';
// import primeng modules
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
// import components
import { ChannelComponent } from './channel.component';
import { ChannelDetailComponent } from './channel.detail.component';





// define crud component routes 
const routes = [
  {
    path: '',
    component: ChannelComponent
  },
  {
    path: ':id',
    component: ChannelDetailComponent
  }
];

@NgModule({
  declarations: [
    ChannelComponent,
    ChannelDetailComponent
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
    // primeng modules
    DropdownModule,
    CheckboxModule,
    // Ngx-Spinner
    NgxSpinnerModule
  ],
  entryComponents: [ChannelComponent],
  providers: [
    
  ],

})
export class ChannelModule { }
