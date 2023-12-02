import { Routes } from '@angular/router';
import { CourseFormComponent } from './courses/course-form/course-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'new', component: CourseFormComponent },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];
