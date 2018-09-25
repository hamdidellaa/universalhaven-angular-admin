import { Endpoints } from './../endpoints';
import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  static resourceEndpoint: string = Endpoints.JAVA_EE+"user";
  
  constructor(private http: Http) {
    
  }

  postLogin(user,token){
    console.log(user);
    localStorage.setItem("user",user);
    localStorage.setItem("token",token);
    
  }
  getUser(){
    return localStorage.getItem("user");
  }

  getToken(){
    return localStorage.getItem("token");
  }
  logout(){
    localStorage.clear();
  }

  getCampStaff(){
    return this.http.get(Endpoints.JAVA_EE+"camp/campstaff?campid=1").map(resp=>resp.json());
  }



login(login:string,password:string){
   
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' , 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let data= "login="+login+"&password="+password;
    
    return this.http.post(UserService.resourceEndpoint+"/login",data,options);
    
}

}
