import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }
  // public sendEmail(data) {
  //   return this.httpClient.post('/backend/mail.php', data);
  // }
  public sendEmail(data) {
    return this.httpClient.post('/backend/mail.php', data, { responseType: 'text' });
    // {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // });
  }
}
