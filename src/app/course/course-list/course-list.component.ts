import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses;
  showImage: boolean = false;
  message: string;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
        .subscribe(
          response => {
            this.courses = response;
          },
          error => {
            this.message = error;
            console.log('error', error);
          }
        )
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  starClick(event) {
    this.message = event;
  }

}
