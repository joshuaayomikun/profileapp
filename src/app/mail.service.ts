import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  configUrl: string = "sendMail.php";
  constructor(private http: HttpClient) { }

  getConfigResponse(): Observable<ContactModel> {
    return this.http.post<ContactModel>(
      this.configUrl, { observe: 'response' });
  }
}
