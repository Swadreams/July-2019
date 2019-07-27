import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = "https://raw.githubusercontent.com/Swadreams/July-2019/courses-data/courses.json";

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  // getCourse() {
  //   return this.http.get(this.url);
  // }

  getCoursesFromFirebase() {
   return this.db.list('/courses').snapshotChanges()
        // .subscribe(
        //   response => console.log('resposne', response),
        //   error => console.log('error', error)
        // )
  }

  getCourse(id) {
    return this.db.object(`/courses/${id}`).snapshotChanges();
  }

  updateCourse(id, course) {
    return this.db.object(`/courses/${id}`).update(course);
  }

  addCourse(course) {
    return this.db.list('/courses').push(course);
  }

  deleteCourse(key) {
    return this.db.object(`/courses/${key}`).remove();
  }
}
