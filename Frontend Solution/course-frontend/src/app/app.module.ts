import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/course-upload/course-file-upload.component';
import { OverviewOfAllCoursesComponent } from './components/overview-of-all-courses/overview-of-all-courses.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoursesPerWeekComponent } from './components/courses-per-week/courses-per-week.component';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    OverviewOfAllCoursesComponent,
    CoursesPerWeekComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
