import { Observable } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../models/course';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, CommonModule } from '@angular/common';



@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
  }

}
