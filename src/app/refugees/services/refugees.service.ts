import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Endpoints } from './../../shared/endpoints';
import { Camp } from './../../models/camp';
@Injectable()
export class RefugeesService {
  URL = Endpoints.JAVA_EE+"camp"
    constructor(private http:Http) { }
    getAllrefugees(){
      return this.http.get(this.URL+"/findallrefugees").map(resp=>resp.json());
    }
    findrefugeebyid(idref){
      return this.http.get(this.URL+"/findRefugeeById?id="+idref).map(resp=>resp.json());
    }
    checkoutrefugee(idref){
      return this.http.delete(this.URL+"/deleteRefugeeById?idref="+idref);
    }
}