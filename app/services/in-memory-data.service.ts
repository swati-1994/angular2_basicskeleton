/**
 * Created by swati on 28/11/16.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {credential} from '../services/data_type';
export class InMemoryDataService implements InMemoryDbService {
    
    createDb() {
        let credentials =[
            {'email': 'swati@headerlabs.com', 'password': 'swati'},
            {'email': 'shivam@headerlabs.com', 'password': 'shivam'},
            {'email':'gultu@headerlabs.com', 'password':'gultu'  },
            {'email':'gurinder@headerlabs.com', 'password':'gurdinder'},
        ]
        return {credentials};
    }
}
