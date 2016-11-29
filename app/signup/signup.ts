import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {credentialService} from '../services/eChangeSevice';
import{credential} from '../services/data_type'
import * as _ from 'underscore';
@Component({
    selector: 'my-signup',
    templateUrl: './app/signup/signup.html',
    providers: []
})
export class signupComponent {

    credentials: credential[];

    user_list:credential[];
    signup_user = {
        'email':'',
        'password':'',
        'first_name':'',
        'last_name':''

    };
    constructor(private router: Router,private CredentialService:credentialService) {
    }

    signUp() {
        console.log("user details:"+JSON.stringify(this.signup_user));
        var email = this.signup_user.email;
        var password= this.signup_user.password;
        var first_name= this.signup_user.first_name;
        var last_name= this.signup_user.last_name;
        if (!this.signup_user) { return; }
        this.CredentialService.create(this.signup_user)
            .then(()=>{});
        this.router.navigate(['agreement']);
    }
}
