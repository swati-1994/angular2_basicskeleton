import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'my-signup',
    templateUrl: './app/signup/signup.html',
    providers: []
})
export class signupComponent {

    constructor(private router: Router) {
    }

    login() {
        this.router.navigate(['agreement']);
    }
}
