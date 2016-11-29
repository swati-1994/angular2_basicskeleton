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
import {settingsComponent} from "../settings/settings";
import {detailsComponent} from "../details/details";
import {HttpModule}    from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from '../services/in-memory-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdDatepickerPopup} from "../listing/date_picker/date_picker";
import {FormsModule}   from '@angular/forms';
import {my_accountComponent} from "../drop_downs/my_account/my_account";
import {credentialService} from "../services/eChangeSevice";
@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, InMemoryWebApiModule.forRoot(InMemoryDataService), NgbModule.forRoot(),
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
                path: 'date_picker',
                component: NgbdDatepickerPopup
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
                path: 'my_account',
                component: my_accountComponent
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
    declarations: [AppComponent, loginComponent, headerComponent, footerComponent, signupComponent, agreementComponent, listingComponent, qr_codeComponent, settingsComponent, detailsComponent, NgbdDatepickerPopup, my_accountComponent],
    providers: [credentialService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
