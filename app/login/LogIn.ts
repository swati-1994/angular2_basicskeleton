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
    constructor(private router:Router, private CredentialService:credentialService) {
    }
    user_list:credential[];
    user = {};

    ngOnInit():void {
        this.CredentialService
            .getcredential()
            .then(credentials => this.user_list = credentials);
    }

    login() {
        console.log(JSON.stringify(_.findWhere(this.user_list, this.user)));
        if (_.findWhere(this.user_list, this.user)) {
            this.router.navigate(['agreement']);
            console.log("logged in");
        }
        else {
            console.log("could not log in");
        }
    }
}
