import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from '../appComponent/app.component';
import {loginComponent} from '../LogIn'
import {headerComponent} from "../header";
import {footerComponent} from "../footer";
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, loginComponent, headerComponent, footerComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
