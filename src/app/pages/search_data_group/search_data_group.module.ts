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
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
// import components
import { SearchDataGroupComponent } from './search_data_group.component';
import { SearchDataGroupDetailComponent } from './search_data_group.detail.component';



// define crud component routes 
const routes = [
  {
    path: '',
    component: SearchDataGroupComponent
  },
  {
    path: ':id',
    component: SearchDataGroupDetailComponent
  }
];

@NgModule({
  declarations: [
    SearchDataGroupComponent,
    SearchDataGroupDetailComponent
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
    // primeng modules
    TableModule,
    ToastModule,
    DropdownModule,
    PickListModule,
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
  entryComponents: [SearchDataGroupComponent],
  providers: [
    
  ],

})
export class SearchDataGroupModule { }
