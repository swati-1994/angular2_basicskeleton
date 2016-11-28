/**
 * Created by swati on 28/11/16.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {credential} from '../services/data_type';
export class InMemoryDataService implements InMemoryDbService {
    
    createDb() {
        let credential =[
            {'e-mail': 'swati@headerlabs.com', 'password': 'swati'},
            {'e-mail': 'shivam@headerlabs.com', 'password': 'shivam'}
        ]
        return {credential};
    }
}
