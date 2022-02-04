import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CourseOverviewModel } from '../../models/course-overview.model';
import { MockProvider, ngMocks } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CoursesPerWeekService } from 'src/app/services/courses-per-week.service';

describe('CoursesPerWeekService', () => {
  let httpMock: jasmine.SpyObj<HttpClient>;
  let service: CoursesPerWeekService;
  let cursus: CourseOverviewModel;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          MockProvider(HttpClient),
          CoursesPerWeekService,
          CourseOverviewModel,
        ],
      });
      service = TestBed.inject(CoursesPerWeekService);
      cursus = TestBed.inject(CourseOverviewModel);
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get the current week number', () => {
    const spy = service.getWeekNumber();
    expect(spy).toBe(5);
  });
});
