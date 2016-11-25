/**
 * Created by swati on 25/11/16.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'my-agreement',
    templateUrl: './app/agreement/agreement.html'
})
export class agreementComponent {

    constructor(private router: Router) {
    }

    agree() {
        this.router.navigate(['listing']);
    }
    
}
