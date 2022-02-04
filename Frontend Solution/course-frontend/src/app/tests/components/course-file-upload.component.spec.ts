import { TestBed } from '@angular/core/testing';
import { FileUploadMessage } from '../../models/file-upload.model';
import { FileUploadComponent } from '../../components/course-upload/course-file-upload.component';
import { MockProvider, ngMocks } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let httpMock: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadComponent],
      providers: [MockProvider(HttpClient), FileUploadMessage],
    });
    component = TestBed.createComponent(FileUploadComponent).componentInstance;
    httpMock = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
