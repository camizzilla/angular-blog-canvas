import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  public sendEmail(data) {
    return this.httpClient.post('http://localhost:3000/sendFormData', data);
    //    {
    //   headers: new HttpHeaders({
    //        'Content-Type':  'application/json',
    //      })
    // }).map( data=>
    //  data);
  }
}
