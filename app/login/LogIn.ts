import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {credentialService} from '../services/eChangeSevice';
import {credential} from '../services/data_type'
@Component({
    selector: 'my-login',
    templateUrl: './app/login/LogIn.html',
    providers: []
})
export class loginComponent {
    swati:credential[] = [];

    getRoot():Promise<credential[]> {
        return Promise.resolve(this.swati);
    }

    constructor(private router:Router, private credential_service:credentialService) {
    }
    this.
    login() {

        this.router.navigate(['agreement']);
    }
}
