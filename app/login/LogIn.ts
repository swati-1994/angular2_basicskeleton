import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {credentialService} from '../services/eChangeSevice';
import{credential} from '../services/data_type'
import * as _ from 'underscore';
@Component({
    selector: 'my-login',
    templateUrl: './app/login/LogIn.html',
    providers: []
})
export class loginComponent implements OnInit {

    // private CredentialService: credentialService,
    constructor(private router: Router, private CredentialService: credentialService) {
    }

    user_list: credential[];
    user = {};

    ngOnInit(): void {
        this.CredentialService
            .getcredential()
            .then(credentials => this.user_list = credentials);
    }

    login() {
        console.log("User : ", JSON.stringify(this.user));
        // console.log("hiiii" + JSON.stringify(_.findWhere(this.user_list, {email: "swati@headerlabs.com"})));
        // if (JSON.stringify(_.findWhere(this.user_list, {email: "swati@headerlab"}))) {
        //     this.router.navigate(['agreement']);
        //
        //     console.log("logged in");
        // }
        // else {
        //
        //     console.log("could not log in");
        // }

//        _.findWhere(this.user_list, {email: "swati@headerlabs.com"});
        // this.router.navigate(['agreement']);
    }
}
