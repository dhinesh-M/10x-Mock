import { Component, OnInit } from '@angular/core';
import { files } from './files';

import { HomeserviceService } from './homeservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeserviceService]
})
export class HomeComponent implements OnInit {
  files = new files();
  file: any[];
  public selectedFile: string;
  msg:any;

  constructor(private router: Router, private homeService: HomeserviceService) {
    this.homeService.getFiles()
      .subscribe(file => this.file = file);
  }



  ngOnInit() {
  }

  selectfile(value: string) {
    this.selectedFile = value;
  }

  onSubmit()
 {
   this.homeService.selectFile(this.selectedFile)
   .subscribe(data => {
    console.log(data)
    this.msg = data;
  }
  );
   
 }

}
