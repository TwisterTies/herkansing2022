import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseOverviewModel } from '../models/course-overview.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesPerWeekService {
  constructor(private http: HttpClient) {}
  readonly connectionUrl = environment.baseUrl + '/api/CourseOverview/';
  formData: CourseOverviewModel = new CourseOverviewModel();
  list?: CourseOverviewModel[];

  getWeekNumber(): number {
    const currentdate = new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor(
      (currentdate.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
    );
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    return result - 1;
  }

  getCoursesPerWeek(coursesPerWeek: number) {
    this.http
      .get<CourseOverviewModel[]>(this.connectionUrl + coursesPerWeek)
      .subscribe((res) => (this.list = res as CourseOverviewModel[]));
  }
}
