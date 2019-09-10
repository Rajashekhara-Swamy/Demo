import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

import { Router} from '@angular/router';
import { UiserviceService } from '../uiservice.service';

@Component({
  selector: 'app-uiregister',
  templateUrl: './uiregister.component.html',
  styleUrls: ['./uiregister.component.css']
})
export class UiregisterComponent implements OnInit {
formdata:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,public http:UiserviceService) {
    this.formdata=this.fb.group({
      username:new FormControl(''),
      password:new FormControl(''),
      confirmpswd:new FormControl('')
    })
  }
    ngOnInit() {
    }
    submit(a)
    {
      console.log(a);
    }
    register(values) {
      console.log(values)
      this.http.registerUser(values).add(data => {
        console.log("2", data)
      })
    }
   
  
}
