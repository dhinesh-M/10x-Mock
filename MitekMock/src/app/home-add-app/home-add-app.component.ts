import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeAddAppService } from './home-add-app.service';
import { ResponseMsg } from './response-msg';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-add-app',
  templateUrl: './home-add-app.component.html',
  styleUrls: ['./home-add-app.component.css']
})
export class HomeAddAppComponent implements OnInit {
  appName: String;
  responseMsg = new ResponseMsg();
  showMyMessage = false;
  msg: String;

  constructor(private router: Router, private homeAddAppService: HomeAddAppService) { }

  ngOnInit() {
  }

  createApp() {
    this.showMyMessage = true;
    this.homeAddAppService.saveCreatedApp(this.appName)
      .subscribe(responseMsg => this.responseMsg = responseMsg),

    console.log(this.responseMsg.key);
    if (this.responseMsg.key == "success"){
      this.msg = "Success! Apllication successfully created";
      if(confirm(this.msg.valueOf()))
        window.location.href = "/manualEntry"
    }
     
    else if (this.responseMsg.key == "error")
      this.msg = "Error! Apllication already exist in the given name";
      
  }

}
