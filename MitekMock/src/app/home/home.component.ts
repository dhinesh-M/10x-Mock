import { Component, OnInit } from '@angular/core';
import { files } from './files';

import { HomeserviceService } from './homeservice.service';
import { Router } from '@angular/router';
import { mockedResponse } from './mockedResponse';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeserviceService]
})
export class HomeComponent implements OnInit {
  files = new files();
  file: any[];
  mockedResonse = new mockedResponse();
  mockResponse: any[];
  public selectedFile: string;
  msg:any;
  flag=0;

  constructor(private router: Router, private homeService: HomeserviceService) {
    this.homeService.getFiles()
      .subscribe(file => this.file = file);
  }



  ngOnInit() {
  }

  selectfile(value: string) {
    this.selectedFile = value;
    this.flag=1;
  }

  onSubmit()
 {
   this.homeService.selectFile(this.selectedFile)
   .subscribe(data => {
    console.log(data)
    this.msg = data;
  }
  );
  this.mockedResponseonse();
 }

 mockedResponseonse()
 {
   this.homeService.getMockedResponse()
   .subscribe(mockResponse => this.mockResponse = mockResponse);
 }

}
