import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get("https://raw.githubusercontent.com/Swadreams/July-2019/courses-data/courses.json");
  }
}
