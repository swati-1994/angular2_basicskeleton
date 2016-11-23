import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from '../appComponent/app.component';
import {loginComponent} from '../LogIn'
import {headerComponent} from "../header";
import {footerComponent} from "../footer";
import { RouterModule }   from '@angular/router';
import {appSignupComponent} from "../appComponent/app.signup.component";

@NgModule({
    imports: [BrowserModule,

        RouterModule.forRoot([
            {
                path: 'signup',
                component: appSignupComponent
            }
        ])

    ],
    declarations: [AppComponent, loginComponent, headerComponent, footerComponent,appSignupComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
