import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule],
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
