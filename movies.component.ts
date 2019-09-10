import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { HttpClient } from '@angular/common/http';

import { UiserviceService } from '../uiservice.service';
import { MovieslistComponent } from '../movieslist/movieslist.component';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
mov:FormGroup
  
  
  constructor(private fb:FormBuilder, private http:UiserviceService, public router: Router) {
    this.mov=this.fb.group({
      MovieName:new FormControl(''),
      Language:new FormControl(''),
      Genre:new FormControl('') 
     })
   }

  ngOnInit() {
  }
  save(value) {
    console.log(value.values)
    this.http.loginuser2(value).add(data => {
      console.log("2", data)
    
    })
    this.router.navigate(["/movieslist"]);
}
}