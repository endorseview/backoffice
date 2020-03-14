// import angular modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// import material design modules
import { MatPaginatorModule, MatTableModule, MatFormFieldModule, MatIconModule, MatSnackBar, MatInputModule, MatDividerModule, MatSnackBarModule, MatProgressSpinnerModule, MatButtonModule, MatDialogModule, MatMenuModule, MatSortModule } from '@angular/material';

// import fuse theme modules
import { FuseConfirmDialogModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

// import translation module 
import { TranslateModule } from '@ngx-translate/core';

// import tabak ui module
// import { TabakNgUIModule } from '@tabak/ng-ui';

// import api service module
// import { ConfigurationsService } from '@alba/opis-configurations-client';


// import dynamic froms
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
// import { TabakFormsMaterialUIModule } from '@tabak/ng-forms';


//import components
import { ListComponent } from './list.component';

// define crud component routes 
const routes = [
  {
    path: '',
    component: ListComponent,
  }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    // angular modules
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),

    // material design modules
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

    ReactiveFormsModule,
    DynamicFormsCoreModule,
    // TabakFormsMaterialUIModule,


    // fuse theme modules
    FuseSharedModule,
    FuseConfirmDialogModule,

    // translate module 
    TranslateModule,

    // tabak ui module
    // TabakNgUIModule
  ],
  entryComponents: [ListComponent],
  providers: [
    // ConfigurationsService,
    MatSnackBar,
  ],

})
export class ListModule { }
