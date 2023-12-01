import { Observable, catchError, of } from 'rxjs';
import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { Course } from '../models/course';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';



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

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
    ) {
    this.courses$ = this.coursesService
      .list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of ([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }

}
