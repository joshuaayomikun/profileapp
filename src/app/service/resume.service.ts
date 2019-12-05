import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkHistory } from '../model/work-history';
import { Education } from '../model/education';
import { Certification } from '../model/certification';
import { Training } from '../model/training';
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

  getCertification(): Observable<Certification[]> {
    return this.http.get<Certification[]>('/assets/JSONFiles/certification.json');
  }

  getTraining(): Observable<Training[]> {
    return this.http.get<Training[]>('/assets/JSONFiles/training.json');
  }
}
