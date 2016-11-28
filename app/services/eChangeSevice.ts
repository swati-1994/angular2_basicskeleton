/**
 * Created by swati on 28/11/16.
 */

import 'rxjs/add/operator/toPromise';
import {ActivatedRoute, Params}   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';
import {credential} from '../services/data_type'
import {InMemoryDataService} from '../services/in-memory-data.service'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class credentialService {


    private credentialsUrl = 'app/credentials';  // URL to web api


    constructor(private http:Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    getcredential():Promise<credential[]> {
        return this.http.get(this.credentialsUrl)
            .toPromise()
            .then(response => response.json().data as credential[])
            .catch(this.handleError);
    }
}