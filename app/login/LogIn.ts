import {Component} from '@angular/core';
import { Router, } from '@angular/router';

@Component({
    selector: 'my-login',
    templateUrl: './app/login/LogIn.html',
    providers: [ROUTER_PROVIDERS]
})
export class loginComponent {
    constructor(private router: Router) { }
    login() {
        this.router.navigate(['agreement']);
    }
}
