import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }
  course;
  courseId;
  ngOnInit() {
    this.route.paramMap.subscribe(
      response => {
        let id = response.get('id');
        this.getCourse(id);
      }
    )
  }

  getCourse(id) {
    this.courseService.getCourse(id)
        .subscribe(
          response => {
              this.course = response.payload.val();
              this.courseId = response.payload.key;
              console.log('response', this.course);
          },
          error => {
            console.log(error);
          }
        )
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.courseId)
        .then(
          response => {
            alert('Course Deleted Successfully..!');
            this.router.navigate(['/courses']);
          },
          error => {
            console.log(error);
          }
        )
  }


}
