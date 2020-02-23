import { Component, OnInit } from '@angular/core';
import { files } from './files';
// import {ManualEntryComponent} from '../manual-entry/manual-entry.component'
import { HomeserviceService } from './homeservice.service';
import { Router,ActivatedRoute } from '@angular/router';
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
  appName:String;
  mockedResonse = new mockedResponse();
  mockResponse: any[];
  public selectedFile: string;
  msg:any;
  flag=0;

  constructor(private router: Router,private route:ActivatedRoute, private homeService: HomeserviceService) {
    this.homeService.getFiles()
      .subscribe(file => this.file = file);
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.appName=JSON.parse(params.data);
      })
    }

  selectfile(value: string) {
    this.selectedFile = value;
    this.flag=1;
  }

  onSubmit()
 {
  this.homeService.selectFile(this.selectedFile,this.appName)
   .subscribe(data => {
    console.log(data)
    this.msg = data;
    this.mockedResponseonse();
  }
  );
 
 }

 mockedResponseonse()
 {
  
   this.homeService.getMockedResponse()
   .subscribe(mockResponse => this.mockResponse = mockResponse);
 }

}
