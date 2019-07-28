import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseService', () => {
  let service: CourseService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(CourseService);
  });

  it('should be created', () => {
    // const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });

  it('it should return courses on call of getCourses', () => {
      let courses;
      service.getCourses()
             .subscribe(
               response => {
                 courses = response;
                 debugger;
                 expect(courses).toBe('');
               }
             )
      expect(courses).toBeUndefined();
  });
});
