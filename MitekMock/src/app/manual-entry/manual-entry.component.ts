import { Component, OnInit } from '@angular/core';
import {Request} from './request'
import { ManualEntryService } from './manual-entry.service';
 import {HomeAddAppComponent} from '../home-add-app/home-add-app.component';
 import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 import { switchMap } from 'rxjs/operators';
import { parse } from 'querystring';
@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.css']
})
export class ManualEntryComponent implements OnInit {
  request = new Request();
  arrayLengthFlag=false;
  req_method:any=["POST","GET","PUT","DELETE","PATCH"];
  appName:String;
  constructor(private router: Router,private route:ActivatedRoute,private manualEntryService:ManualEntryService) { }
  mockResponse:Request[]=[];
  selectedRow:number;
  ngOnInit() {
       this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.appName=JSON.parse(params.data);
    })
    this.getApiTable();
    
  }

  changeReqMethod(value:string){
    this.request.requestMethod=value;
  }

  addApi(){
      this.manualEntryService.addApi(this.appName,this.request).subscribe(()=>{
        this.getApiTable();
    }
    );
  }
  setClickedRow(index:number){
    this.selectedRow=index;
    console.log("hhh"+this.selectedRow);
  }

  editRow(){
    this.deleteRow();
    this.request.api=this.mockResponse[this.selectedRow].api;
    this.request.statusCode=this.mockResponse[this.selectedRow].statusCode;
    this.request.response=this.mockResponse[this.selectedRow].response;
    this.request.requestMethod=this.mockResponse[this.selectedRow].requestMethod;

  }

  deleteRow(){
    this.manualEntryService.deleteEditApi(this.appName,this.mockResponse[this.selectedRow])
    .subscribe(()=>{
      this.mockResponse.splice(this.selectedRow,1);  
      if(this.mockResponse.length==0){
        this.arrayLengthFlag=false;
      }
      else{
        this.arrayLengthFlag=true;
      }
    });
  }

  getApiTable(){
    this.manualEntryService.getListOfApi(this.appName).subscribe(
      (mockResponse) => {this.mockResponse = mockResponse;
        if(this.mockResponse.length==0){
          this.arrayLengthFlag=false;
        }
        else{
          this.arrayLengthFlag=true;
        }}
    );
    
 
  }
  
}
