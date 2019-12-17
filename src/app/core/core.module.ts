import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

import {CoreRoutingModule} from './core-routing.module';
import {SharedModule} from '../shared/shared.module';
import { LayoutComponent } from './containers/layout/layout.component';
import {coreReducers} from './store/reducers/feature.reducers';


@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CoreRoutingModule,
        SharedModule,
        StoreModule.forFeature('core', coreReducers)
    ], exports: [
        CommonModule,
    ]
})
export class CoreModule {
}
