import { UserService } from './../../shared/service/user.service';
import { Endpoints } from './../../shared/endpoints';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";

@Injectable()
export class DonationService {

  

  private resourceEndpoint =Endpoints.JAVA_EE+"donation";
  constructor(private http : Http,private serviceUser: UserService) { 

  }


  overallStatsByDate(){
      let token = this.serviceUser.getToken();
      let headers = new Headers();
      headers.set("authorization","Bearer " +token);
      let options = new RequestOptions();
      options.headers= headers;

      return this.http.get(this.resourceEndpoint+"/bydate/overall",options).map(resp=>resp.json());


  }

  averageDonatedAmount(){
    let token = this.serviceUser.getToken();
    let headers = new Headers();
    headers.set("authorization","Bearer " +token);
    let options = new RequestOptions();
    options.headers= headers;

    return this.http.get(this.resourceEndpoint+"/average",options);
  }


  totalDonationsPerCountry(){
    let token = this.serviceUser.getToken();
    let headers = new Headers();
    headers.set("authorization","Bearer " +token);
    let options = new RequestOptions();
    options.headers= headers;

    return this.http.get(this.resourceEndpoint+"/bycountry",options).map(resp=>resp.json());
  }

  averageDonationsPerCountry(){
    let token = this.serviceUser.getToken();
    let headers = new Headers();
    headers.set("authorization","Bearer " +token);
    let options = new RequestOptions();
    options.headers= headers;

    return this.http.get(this.resourceEndpoint+"/bycountry/average",options).map(resp=>resp.json());
  }
  donationsForEachDay(){
    let token = this.serviceUser.getToken();
    let headers = new Headers();
    headers.set("authorization","Bearer " +token);
    let options = new RequestOptions();
    options.headers= headers;

    return this.http.get(this.resourceEndpoint+"/bydate",options).map(resp=>resp.json());
  }
}
