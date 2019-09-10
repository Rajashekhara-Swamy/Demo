import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UiserviceService } from '../uiservice.service';

@Component({
  selector: 'app-uilogin',
  templateUrl: './uilogin.component.html',
  styleUrls: ['./uilogin.component.css']
})
export class UiloginComponent implements OnInit {
sign1:FormGroup;
  constructor(private httpService:UiserviceService,private fb:FormBuilder) { 
  this.sign1=this.fb.group({
    username:new FormControl(''),
    password:new FormControl('')

 })
}

  ngOnInit() {
  }
  loginuser(a){
    console.log(a);
    this.httpService.loginuser(a).add(data =>{
      console.log("2",data);
  })

  }
}
