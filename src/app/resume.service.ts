import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkHistory } from './work-history';
import { Education } from './education';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ResumeService {

  constructor(private http: HttpClient) { }

  getWorkHistory(): Observable<WorkHistory[]> {
    return this.http.get<WorkHistory[]>('/assets/JSONFiles/workhistory.json');
  }

  getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>('/assets/JSONFiles/education.json');
  }
}
