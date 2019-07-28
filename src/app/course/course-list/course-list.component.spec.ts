import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { StarComponent } from 'src/app/shared/star/star.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CourseService } from '../course.service';
import { of, throwError } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CourseListComponent, StarComponent ],
      providers: [CourseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    courseService = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get courses on calling of getCourses method', () => {
    let course = { courseName: 'Angular'};
    spyOn(courseService, 'getCourses').and.returnValue(of(course));
    component.getCourses();
    expect(component.courses).toBe(course);
  });

  it('should return an error on calling of getCourses method', () => {
    spyOn(courseService, 'getCourses').and.returnValue(throwError('Error occured'));
    component.getCourses();
    expect(component.message).toContain('Error');
  });

  it('it should show image on click of show image button', () => {
    let button = element.querySelector('table th button');
    button.click();
    expect(component.showImage).toBeTruthy();
  });

  it('should return message on click of star', () => {
    component.starClick('5');
    expect(component.message).toBe('5');
  });

});
