import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from '../appComponent/app.component';
import {loginComponent} from '../LogIn'
import {headerComponent} from "../header";
import {footerComponent} from "../footer";
import {RouterModule}   from '@angular/router';
import {appSignupComponent} from "../appComponent/app.signup.component";
import {signupComponent} from "../signup";
// import {AppLoginComponent} from "../appComponent/app.login.component";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            {
                path: 'signup',
                component: appSignupComponent
            },
            // {
            //     path: 'login',
            //     component: AppLoginComponent
            // },

            {

                path:'login',
                component:AppComponent

            },
            {
                path: 'app',
                component: AppComponent
            },
            {
                path: '',
                redirectTo: '/app',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [AppComponent, loginComponent, headerComponent, footerComponent, appSignupComponent, signupComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
