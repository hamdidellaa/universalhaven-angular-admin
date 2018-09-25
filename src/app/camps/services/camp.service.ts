import { Http,Headers,RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Endpoints } from './../../shared/endpoints';
import { Camp } from './../../models/camp';

@Injectable()
export class CampService {

  URL = Endpoints.JAVA_EE+"camp"
  URLnet = Endpoints.donetest+"camp"
  
    
    constructor(private http:Http) { }
    countAllCampsPerCountry(){
      return this.http.get(this.URL+"/countcamps").map(resp=>resp.json());
    }
    getallcampspercountry(){
      return this.http.get(this.URL+"/findbycountry").map(resp=>resp.json());
    }
    GetRefugeePergender(gender){
      return this.http.get(this.URLnet+"/"+gender).map(resp=>resp.json());
    }
    GetRoomperType(gender){
      return this.http.get(Endpoints.donetest+"room/"+gender).map(resp=>resp.json());
    }
    GetAllRoom(){
      return this.http.get(Endpoints.donetest+"room").map(resp=>resp.json());
    }
    getCamp(){
      return this.http.get(this.URL).map(resp=>resp.json());
    }
    createCamp(camp){
      return this.http.post(this.URL,camp);
    }
    modifyCamp(camp)
    {
          return this.http.put(this.URL,camp);
    }
   FindCampMan(){
    return this.http.get(this.URL+"/findmanager").map(resp=>resp.json());
   }
   getAllCamps(){
    return this.http.get(this.URL+"/findallcamps").map(resp=>resp.json());
   }
   getCampsById(campid){
    return this.http.get(this.URL+"/findCampById?id="+campid).map(resp=>resp.json());
   }
   createRoom(room){
    return this.http.post(this.URL+"/createroom",/*JSON.stringify(*/room);
  }
  
}
