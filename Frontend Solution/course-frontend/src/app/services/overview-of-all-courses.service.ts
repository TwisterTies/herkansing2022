import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CourseOverviewModel } from '../models/course-overview.model';

@Injectable({
  providedIn: 'root',
})
export class CourseOverviewService {
  constructor(private http: HttpClient) {}
  readonly connectionUrl = environment.baseUrl + '/api/CourseOverview';
  formData: CourseOverviewModel = new CourseOverviewModel();
  list?: CourseOverviewModel[];

  refreshCursusLijst() {
    this.http
      .get(this.connectionUrl)
      .subscribe((res) => (this.list = res as CourseOverviewModel[]));
  }
}
