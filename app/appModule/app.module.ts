import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from '../appComponents/app.component';
import {loginComponent} from '../login/LogIn'
import {headerComponent} from "../appComponents/appHeader/header";
import {footerComponent} from "../appComponents/appFooter/footer";
import {RouterModule}   from '@angular/router';
import {signupComponent} from "../signup/signup";
import {agreementComponent} from "../agreement/agreement";
import {listingComponent} from "../listing/listing";
import {qr_codeComponent} from "../qr_code/qr_code";
import { settingsComponent} from "../settings/settings";
import { detailsComponent} from "../details/details";
@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {
                path: 'signup',
                component: signupComponent
            },
            {
                path: 'login',
                component: loginComponent
            },


            {
                path: 'agreement',
                component: agreementComponent
            },

            {
                path: 'listing',
                component: listingComponent
            },

            {
                path: 'qr_code',
                component: qr_codeComponent
            },

            {
                path: 'settings',
                component: settingsComponent
            },

            {
                path: 'details',
                component: detailsComponent
            },
            
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [AppComponent, loginComponent, headerComponent, footerComponent, signupComponent,agreementComponent,listingComponent,qr_codeComponent,settingsComponent,detailsComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
