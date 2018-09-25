import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class DataService<T> {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(protected http: HttpClient, protected endpointUrl: string) { }

  getAll(): Observable<T[]> {
    console.log(this.endpointUrl);

    return this.http.get<T[]>(this.endpointUrl);
  }
  getOne(id: number): Observable<T> {
    return this.http.get<T>(this.endpointUrl + "/" + id);
  }

  add(T): Observable<any> {
    return this.http.post(this.endpointUrl, T);
  }
  update(T, id: number): Observable<any> {
    return this.http.put(this.endpointUrl + "/" + id, JSON.stringify(T), {
      headers: this.headers
    });
  }

  delete(id: number): Observable<any> {
    /*let body = JSON.stringify(
      {
        "id": id
      });
    let options = new RequestOptions({
      headers: this.headers,
      body: body
    });
    this.http.request('delete', this.endpointUrl, {
      body: JSON.stringify(
        {
          "id": id
        })
    })
    */
    return this.http.delete(this.endpointUrl + "/" + id);
  }
}
