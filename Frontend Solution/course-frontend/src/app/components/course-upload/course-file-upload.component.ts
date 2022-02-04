import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploadMessage } from '../../models/file-upload.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'file-upload',
  templateUrl: './course-file-upload.component.html',
})
export class FileUploadComponent {
  constructor(private http: HttpClient) {}
  fileUploadMessage: FileUploadMessage = new FileUploadMessage();
  showMessage = false;
  showErrorMessage = false;
  connectionUrl = environment.baseUrl + '/api/CourseImport';

  uploadFile(file: any) {
    let filetoUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', filetoUpload, filetoUpload.name);
    if (filetoUpload != null) {
      this.http
        .post<FileUploadMessage>(this.connectionUrl, formData)
        .subscribe((response) => {
          this.fileUploadMessage = response;
          this.showMessage = true;

          if (this.fileUploadMessage.errorMessage != null) {
            this.showMessage = false;
            this.showErrorMessage = true;
          }
        });
    }
  }

  hideMessages() {
    this.showMessage = false;
    this.showErrorMessage = false;
  }
}
