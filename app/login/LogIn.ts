import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {credentialService} from '../services/eChangeSevice';

import{credential} from '../services/data_type'
@Component({
    selector: 'my-login',
    templateUrl: './app/login/LogIn.html',
    providers: []
})
export class loginComponent {

    // private CredentialService: credentialService,
    constructor(private router: Router,private CredentialService: credentialService



    ) {}

blank:credential[];

    getcredential(): void {
        this.CredentialService
            .getcredential()
            .then(credentials => this.blank= credentials);
    }
    
    

    // login() {
    //    
    //     this.router.navigate(['agreement']);
    // }
}
