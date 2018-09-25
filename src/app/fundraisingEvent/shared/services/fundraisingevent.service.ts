import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FundraisingeventService {

  constructor(private http: Http) { }
  getAvgCompletionEvent(){
      return this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent/avgCompletionEvent")
      ;
  }
   getAll(){
      return this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent")
      .map(resp=>resp.json());
  }
  getMyEvents(idUser){
      return this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent/event?idUser="+idUser)
      .map(resp=>resp.json());
  }
  getById(id:number)
   {
   return  this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent/event?idEvent="+id)
     .map(resp=>resp.json());
   }
   getSumAmountDonationByEvent(id:number)
   {
   return  this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent/event?idFundraisingEvent="+id)
     .map(resp=>resp.json());
   }

  addEvent(event){
      return this.http.post("http://localhost:18080/universalhaven-web/rest/fundraisingEvent",event);
  }
  UpdateEvent(event){
      return this.http.put("http://localhost:18080/universalhaven-web/rest/fundraisingEvent",event);
  }
  getCamps(){
      return this.http.get("http://localhost:18080/universalhaven-web/rest/camp/findallcamps")
      .map(resp=>resp.json());
  }
    getStats(){
      return this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent/eventByCountry")
      .map(resp=>resp.json());
  }
    getEventByMonthThisYear(){
      return this.http.get("http://localhost:18080/universalhaven-web/rest/fundraisingEvent/event?year=2017")
      .map(resp=>resp.json());
  }

}
