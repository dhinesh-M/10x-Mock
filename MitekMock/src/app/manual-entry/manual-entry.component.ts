import { Component, OnInit } from '@angular/core';
import {Request} from './request'
@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {
  request = new Request();
  req_method:any=["POST","GET","PUT","DELETE","PATCH"];

  constructor() { }

  ngOnInit() {
  }

  changeReqMethod(value:string){
    this.request.requestMethod=value;
  }

}
