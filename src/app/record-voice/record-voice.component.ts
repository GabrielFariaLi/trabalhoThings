import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import WaveSurfer from 'wavesurfer.js';

import * as RecordRTC from 'recordrtc';

@Component({
  selector: 'app-record-voice',
  templateUrl: './record-voice.component.html',
  styleUrls: ['./record-voice.component.scss'],
})
export class RecordVoiceComponent implements OnInit {
  wavesurfer: any;
  mediaRecorder: any;
  title = 'micRecorder';
  //Lets declare Record OBJ
  record: any;
  //Will use this flag for toggeling recording
  recording = false;
  //URL of Blob
  url;
  error;
  constructor(private domSanitizer: DomSanitizer) {}
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Start recording.
   */
  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  intervalId: any;
  seconds: any = 0;
  formattedTime: any = 0;
  successCallback(stream) {
    const currentDate = new Date();
    console.log(currentDate);
    var options = {
      mimeType: 'audio/wav',

      sampleRate: 44100,
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    console.log(
      '🚀 ~ file: record-voice.component.ts:52 ~ RecordVoiceComponent ~ successCallback ~  this.record:',
      this.record
    );
    this.record.record();

    this.intervalId = setInterval(() => {
      this.seconds++;
      this.formattedTime = this.formatTime(this.seconds);
      console.log(this.formattedTime);
    }, 1000);
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));

    clearInterval(this.intervalId);
    this.seconds = 0;
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
    console.log('blob', blob);
    console.log('url', this.url);
    this.wavesurfer.load(this.url);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  ngOnInit() {
    console.log('toma no cu');
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#08C6E0',
      mediaControls: true,
      progressColor: '#999999',
    });
  }
  comecarGravar() {
    this.wavesurfer.play();
  }
  pararGravar() {
    this.wavesurfer.stop();
  }

  formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    console.log(
      '🚀 ~ file: record-voice.component.ts:113 ~ RecordVoiceComponent ~ formatTime ~ minutes:',
      minutes
    );
    const seconds = totalSeconds % 60;
    console.log(
      '🚀 ~ file: record-voice.component.ts:115 ~ RecordVoiceComponent ~ formatTime ~ seconds:',
      seconds
    );
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
