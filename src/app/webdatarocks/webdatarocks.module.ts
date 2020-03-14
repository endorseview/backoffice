import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WebDataRocksPivot } from './webdatarocks.angular4';


@NgModule({
    declarations: [WebDataRocksPivot],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,


    ],
    exports: [
        WebDataRocksPivot


    ],
    entryComponents: [WebDataRocksPivot],

})
export class WebDataRocksModule {
}
