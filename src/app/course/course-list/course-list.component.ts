import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses;
  error: string;
  showImage: boolean = true;
  message: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    // this.getCourses();
    this.getCourseFromFirebase();
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  starClick(event) {
    this.message = event;
  }

  getCourseFromFirebase() {
    this.courseService.getCoursesFromFirebase()
        .subscribe(
          response => {
            this.courses = [];
            response.forEach(item => {
              let course;
              course = item.payload.val();
              course.courseId = item.payload.key;
              this.courses.push(course);
            });
            console.log(this.courses);
          }
        )
  }
}
