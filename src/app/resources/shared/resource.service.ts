//import { Resource } from './../../models/resource';
/*import { Endpoints } from './../../shared/endpoints';
import { UserService } from './../../shared/service/user.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ResourceService {
  resourceEndpoint = Endpoints.JAVA_EE + "resource";
  constructor(private http: Http, private serviceUser: UserService) { }
  getResources()
  {
    /*let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' , 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    */
    //let options = this.serviceUser.getUser();
    //let data = this.serviceUser.getToken("");
   // console.log(data+"here");
   // return this.http.get(this.resourceEndpoint).map(resp=>resp.json());
    /*toPromise()
    .then(res => res.json().data)
    .then(data => { return data; });*/
    /*
        return this.http.get(this.resourceEndpoint).map(resp=>
      {
        resp.json();
        console.log("here the resp" + resp);
      });
    *//*
  }





}
*/
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';
import { Resource } from './../../models/resource';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceService extends DataService<Resource> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:18080/universalhaven-web/rest/resource');
  }
}