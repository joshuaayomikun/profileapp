import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechSkill } from '../model/tech-skill';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AboutMeService {

  constructor(private http: HttpClient) { }

  getTechSkill(): Observable<TechSkill[]> {
    return this.http.get<TechSkill[]>('/assets/JSONFiles/techskill.json');
  }
}
