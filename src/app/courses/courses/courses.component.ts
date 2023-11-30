import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';



@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: "1", name: "Angular", category: "front-end"}
  ];

  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {

  }

}
