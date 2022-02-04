import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';
import { CourseOverviewService } from 'src/app/services/overview-of-all-courses.service';
import { OverviewOfAllCoursesComponent } from '../../components/overview-of-all-courses/overview-of-all-courses.component';
import { CourseOverviewModel } from 'src/app/models/course-overview.model';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('Component: CourseOverview', () => {
  let httpMock: jasmine.SpyObj<HttpClient>;
  let courseOverviewService: jasmine.SpyObj<CourseOverviewService>;
  let sut: OverviewOfAllCoursesComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [OverviewOfAllCoursesComponent],
      providers: [
        MockProvider(HttpClient),
        MockProvider(CourseOverviewService),
        CourseOverviewModel,
      ],
      imports: [RouterTestingModule],
    });
    sut = TestBed.createComponent(
      OverviewOfAllCoursesComponent
    ).componentInstance;
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });
});
