import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { fbind } from 'q';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  course;
  courseId;
  courseForm;
  isNewCourse;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      response => {
        let id = response.get('id');
        if(id === 'new') {
          this.isNewCourse = true;
        } else {
          this.isNewCourse = false;
          this.getCourse(id);
        }
      }
    );

    this.createForm();
  }

  getCourse(id) {
    this.courseService.getCourse(id)
        .subscribe(
          response => {
              this.course = response.payload.val();
              this.courseId = response.payload.key;
              this.setFormFields();
              console.log('response', this.course);
          },
          error => {
            console.log(error);
          }
        )
  }


  createForm() {
    this.courseForm = this.fb.group({
      courseCode: '',
      courseId: '',
      courseName: '',
      description: '',
      imageUrl: '',
      nextBatchDate: '',
      price: '',
      starRating: '',
      trainer: ''
    })
  }

  setFormFields() {
      this.courseForm.patchValue({
         courseName: this.course.courseName,
         courseCode: this.course.courseCode,
         description: this.course.description,
         imageUrl: this.course.imageUrl,
         nextBatchDate: this.course.nextBatchDate,
         price: this.course.price,
         starRating: this.course.starRating,
         trainer: this.course.trainer,
      })
  }

  addCourse() {
      this.courseService.addCourse(this.courseForm.value)
          .then(
            response => {
              this.router.navigate(['/courses']);
            },
            error => {
              console.log('error in updation', error);
            }
          )
  }

  updateCourse() {
    this.courseService.updateCourse(this.courseId, this.courseForm.value)
        .then(
          response => {
            this.router.navigate(['/courses/details', this.courseId]);
          },
          error => {
            console.log('error in updation', error);
          }
        )
  }

  submitForm() {
    this.isNewCourse ? this.addCourse() : this.updateCourse();
  }
}
