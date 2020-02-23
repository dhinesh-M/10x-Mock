import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HomeAddAppService } from './home-add-app.service';
import { ResponseMsg } from './response-msg';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-home-add-app',
  templateUrl: './home-add-app.component.html',
  styleUrls: ['./home-add-app.component.css']
})
export class HomeAddAppComponent implements OnInit {
  appName: any;
  mocMethod: String;
  responseMsg = new ResponseMsg();
  showMyMessage = false;
  msg: String;
  mockMethod:any=["Mock by file","Manual Entry"];

  constructor(private router: Router, private homeAddAppService: HomeAddAppService,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  createApp() {
    this.showMyMessage = true;
    this.homeAddAppService.saveCreatedApp(this.appName)
      .subscribe(
        (responseMsg) =>{
          this.responseMsg = responseMsg;
          if (this.responseMsg.key == "success"){
            this.msg = "Success! Apllication successfully created";
            if(confirm(this.msg.valueOf())){
              if(this.mocMethod==this.mockMethod[0])
               this.router.navigate(['chooseFile'], {queryParams:{data: JSON.stringify(this.appName)}}); 
              else
              this.router.navigate(['manualEntry'], {queryParams:{data: JSON.stringify(this.appName)}}); 
              }
  
          }
          else if (this.responseMsg.key == "error")
            this.msg = "Error! Apllication already exist in the given name";

        }
           
        
        );
           
   
      
  }

}
