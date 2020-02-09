import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAppService } from './get-app.service';

@Component({
  selector: 'app-get-app-list',
  templateUrl: './get-app-list.component.html',
  styleUrls: ['./get-app-list.component.css']
})
export class GetAppListComponent implements OnInit {
  appList:any[];

  constructor(private router: Router,private getAppService:GetAppService) {
   }

  ngOnInit() {
  }

  getAppList(){
    this.getAppService.getListOfApps()
    .subscribe(appList=>this.appList=appList);
    console.log(this.appList);
  }
 

}
