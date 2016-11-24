import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {AppComponent}   from '../appComponent/app.component';
import {loginComponent} from '../login/LogIn'
import {headerComponent} from "../appComponents/appHeader/header";
import {footerComponent} from "../appComponents/footer";
import {RouterModule}   from '@angular/router';
import {appSignupComponent} from "../signup/app.signup.component";
import {signupComponent} from "../signup/signup";

import {AppLoginComponent} from "../login/app.login.component";

@NgModule({
    imports: [BrowserModule,
        RouterModule.forRoot([
            // {
            //     path: '/app/signup',
            //     component: appSignupComponent
            // },
            // {
            //     path: 'login',
            //     component: AppLoginComponent
            // },

            // {
            //
            //     path:'/app/login',
            //     component:AppLoginComponent
            //
            // },
            {
                path: 'login',
                component: AppLoginComponent,
                children: [
                    { path: '/login', component:AppLoginComponent },
                    { path: '/signup', component: appSignupComponent }
                ]
            },
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            }


        ])
    ],
    declarations: [ loginComponent, headerComponent, footerComponent, appSignupComponent, signupComponent,AppLoginComponent],
    bootstrap: [AppLoginComponent]
})
export class AppModule {
}
