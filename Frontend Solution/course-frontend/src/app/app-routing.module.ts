import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewOfAllCoursesComponent } from './components/overview-of-all-courses/overview-of-all-courses.component';
import {FileUploadComponent} from './components/course-upload/course-file-upload.component';
import { CoursesPerWeekComponent } from './components/courses-per-week/courses-per-week.component';

const routes: Routes = [
  { path: '', redirectTo: '/courseoverview', pathMatch: 'full' },
  { path: 'courseoverview', component: OverviewOfAllCoursesComponent },
  { path: 'uploadfile', component: FileUploadComponent},
  { path: 'weekview', component: CoursesPerWeekComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}