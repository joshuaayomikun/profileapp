import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from '../model/contact.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  configUrl = 'sendMail.php';
  constructor(private http: HttpClient) { }

  getConfigResponse(): Observable<ContactModel> {
    return this.http.post<ContactModel>(
      this.configUrl, { observe: 'response' });
  }
}
