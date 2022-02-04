import { Component, OnInit } from '@angular/core';
import { CourseOverviewService } from 'src/app/services/overview-of-all-courses.service';

@Component({
  selector: 'course-overview',
  templateUrl: './overview-of-all-courses.component.html',
})
export class OverviewOfAllCoursesComponent implements OnInit {
  constructor(public service: CourseOverviewService) {}

  ngOnInit(): void {
    this.service.refreshCursusLijst();
  }
}
