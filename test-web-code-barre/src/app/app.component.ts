import { Component, OnInit } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'code-barre';
  @ViewChild('videoElement') videoElement: any;
  video: any;

  /*
  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    
    const codeReader = new BrowserMultiFormatReader();

    codeReader.listVideoInputDevices()
    .then(videoInputDevices => {
      videoInputDevices.forEach(device =>
        console.log(`${device.label}, ${device.deviceId}`)
        );
    })
    .catch(err => console.log(err));

    codeReader.decodeOnceFromVideoDevice(undefined, 'video')
    .then(result => console.log(result.getText()))
    .catch(err => console.error(err));
    
  }
  */
 isPlaying = false;

 displayControls = true;

  ngOnInit() {
   
 }
 ngAfterViewInit(){
   this.video = this.videoElement.nativeElement;

 }

 start() {
   this.initCamera({ video: true, audio: false });
 }

 pause() {
   this.video.pause();
 }

 toggleControls() {
   this.video.controls = this.displayControls;
   this.displayControls = !this.displayControls;
 }

 resume() {
   this.video.play();
 }

 sound() {
   this.initCamera({ video: true, audio: true });
 }

 initCamera(config:any) {
   var browser = <any>navigator;

   browser.getUserMedia = (browser.getUserMedia ||
     browser.webkitGetUserMedia ||
     browser.mozGetUserMedia ||
     browser.msGetUserMedia);

   browser.mediaDevices.getUserMedia(config).then(stream => {
     this.video.srcObject = stream;
     this.video.play();
   });
 }

}
