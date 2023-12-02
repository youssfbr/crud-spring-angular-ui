import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, take, tap } from 'rxjs';

import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:8083/api/courses';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //take(1),
      tap(courses => console.log(courses))
    );
  }

}

