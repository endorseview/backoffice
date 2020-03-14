import { Component, ViewEncapsulation, AfterViewInit, OnInit } from '@angular/core';
import { merge, of as observableOf, Observable } from 'rxjs';
import { startWith, switchMap, map, catchError, debounceTime, tap, finalize } from 'rxjs/operators';
// import { TenantListModel, TenantsService, TenantListItemModel } from '@alba/opis-tenants-client';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
    selector: 'tenants-panel',
    templateUrl: './tenants-panel.component.html',
    styleUrls: ['./tenants-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TenantsPanelComponent implements OnInit {
    // filteredUsers: TenantListItemModel[] = [];
    usersForm: FormGroup;
    isLoading = false;

    constructor(
        private snack: MatSnackBar,
        // private apiService: TenantsService,
        private fb: FormBuilder,
        private _fuseSidebarService: FuseSidebarService,
    ) {

    }

    ngOnInit(): void {
        this.usersForm = this.fb.group({
            userInput: null
        });


    }


    toggleSidebarOpen(key: string): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }
}
