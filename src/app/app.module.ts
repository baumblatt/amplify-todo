import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {API} from 'aws-amplify';
import {AmplifyAngularModule, AmplifyModules, AmplifyService} from 'aws-amplify-angular';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {metaReducers, reducers} from './store/reducers/global-reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AmplifyAngularModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [
        {
            provide: AmplifyService,
            useFactory:  () => {
                return AmplifyModules({API});
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
