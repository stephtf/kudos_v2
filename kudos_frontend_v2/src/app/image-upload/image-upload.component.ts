import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
newImageFile: any;
imageName: any; 
awsData: any; 
imageUrl: any;
progress: any;
barWidth: string='0%';
public completed = false; 

@Output() imageEvent = new EventEmitter<string>();

// get imageUrl & uploadProgress from server 
private getUrl = 'http://localhost:3001/s3Url'

  constructor(private httpClient: HttpClient) { }

handleImageInput = (event: Event) => {
    this.newImageFile = (<HTMLInputElement>event.target).files; 
    this.imageName = this.newImageFile[0].name; 
}  

sendImage() {
  // grab the AWS secure link
  this.httpClient.get(this.getUrl).subscribe(response => {
  this.awsData = response;

  // send image to AWS bucket
 this.httpClient.put(this.awsData.url, this.newImageFile[0], {
  reportProgress: true,
  observe: "events"
 })
 .pipe(map(e => {
    if(e.type == HttpEventType.UploadProgress) {
      this.barWidth=Math.round((e.loaded/(e.total || 0))*100) + "%";
    } else if (e.type==HttpEventType.Response) {
      this.completed = true; 
    }
 }))
 .subscribe(data => data)

  // update db with imageUrl
  this.imageUrl = this.awsData.url.slice(0,65);
  this.imageEvent.emit(this.imageUrl);
  });

  
}

}





// const upload$: Observable<HttpEvent> = this.http.post('/api/upload', data, {
//   reportProgress: true,
//   observe: 'events',
// })