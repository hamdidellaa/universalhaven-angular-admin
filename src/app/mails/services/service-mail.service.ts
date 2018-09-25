import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Endpoints } from './../../shared/endpoints';
import { Mail } from './../../models/mail';

@Injectable()
export class ServiceMailService {
  URL = Endpoints.JAVA_EE+"camp/findallrefugees"

  
  constructor(private http:Http) { }
  createAuthorizationHeader(headers: Headers) {
    
    headers.append("AUTHORIZATION", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJibGFja3NvdWwyLUlDUkNfTUFOQUdFUiIsImlzcyI6InVuaXZlcnNhbC1oYXZlbi5jb20iLCJpYXQiOjE1MTI1MjYwODgsImV4cCI6MTUxMjUyNjk4OH0.DHZfc72OAvd_2aCV9Ni-u_epJMaEL1ynfHceAaK8YEaw4gj29eWw3JkKDKQ4EgvWk20Hoq2OI1dks52yeorz3Q");
  }
  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }
  getMail(){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.URL,{
      headers: headers
    }).map(resp=>resp.json());
  }
  createMail(mail){
    return this.http.post(this.URL,/*JSON.stringify(*/mail).map(resp=>resp.json());
  }

  deleteMail(mail)
  {
    return this.http.delete(this.URL+'/'+mail.id).map(resp=>resp.json())
  }
  modifyMail(mail)
  {
        return this.http.patch(this.URL+'/'+mail.id,({title:"Changed"})).map(resp=>resp.json());

  }
  

  

}
