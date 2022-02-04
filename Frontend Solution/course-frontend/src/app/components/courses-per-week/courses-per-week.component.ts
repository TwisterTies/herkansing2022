import { Component, OnInit } from '@angular/core';
import { CoursesPerWeekService } from 'src/app/services/courses-per-week.service';

@Component({
  selector: 'course-overview',
  templateUrl: './courses-per-week.component.html',
})
export class CoursesPerWeekComponent implements OnInit {
  constructor(public service: CoursesPerWeekService) {}

  ngOnInit(): void {
    this.service.getCoursesPerWeek(this.service.getWeekNumber());
    console.log(this.service.getWeekNumber());
  }
}
