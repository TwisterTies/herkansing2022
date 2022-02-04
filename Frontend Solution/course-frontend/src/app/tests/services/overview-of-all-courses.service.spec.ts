import { TestBed, waitForAsync, inject } from '@angular/core/testing';
import { CourseOverviewService } from '../../services/overview-of-all-courses.service';
import { CourseOverviewModel } from '../../models/course-overview.model';
import { MockProvider, ngMocks } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('CursusService', () => {
  let httpMock: jasmine.SpyObj<HttpClient>;
  let service: CourseOverviewService;
  let cursus: CourseOverviewModel;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        providers: [
          MockProvider(HttpClient),
          CourseOverviewService,
          CourseOverviewModel,
        ],
      });
      service = TestBed.inject(CourseOverviewService);
      cursus = TestBed.inject(CourseOverviewModel);
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
