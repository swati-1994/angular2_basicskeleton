import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from '../appComponents/app.component';
import {loginComponent} from '../login/LogIn'
import {headerComponent} from "../appComponents/appHeader/header";
import {footerComponent} from "../appComponents/appFooter/footer";
import {RouterModule}   from '@angular/router';
import {signupComponent} from "../signup/signup";
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
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [AppComponent, loginComponent, headerComponent, footerComponent, signupComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
