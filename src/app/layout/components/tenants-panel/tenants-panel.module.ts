import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { FuseSharedModule } from '@fuse/shared.module';
import { TenantsPanelComponent } from './tenants-panel.component';
import { MatAutocompleteModule, MatOptionModule, MatSnackBarModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatIconModule } from '@angular/material';
// import { TenantsService } from '@alba/opis-tenants-client';


@NgModule({
    declarations: [
        TenantsPanelComponent
    ],
    imports: [
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatIconModule,

        FuseSharedModule,
    ],
    exports: [
        TenantsPanelComponent
    ],
    providers: [
        // TenantsService
    ]

})
export class TenantsPanelModule {
}
