import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

import { Course } from '../models/course';
import { CoursesService } from './../services/courses.service';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { CategoryPipe } from "../../shared/pipes/category.pipe";
import {ActivatedRoute, Router, RouterModule} from '@angular/router';



@Component({
    selector: 'app-courses',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        AsyncPipe,
        CommonModule,
        CategoryPipe,
        RouterModule
    ]
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  displayedColumns = ['_id','name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

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

  onAdd(): void {
    this.router.navigate([ 'new', { relativeTo: this.route }]);
  }

}
