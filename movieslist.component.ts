import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
list;
id='5d7738330d107d000767f2ef'
  constructor(private route:Router,private http:HttpClient) {this. rr()
  }
  ngOnInit() {
    //let headers = {'id':JSON.parse(localStorage.getItem('logindata')).sucess._id}
    
    
  }
  add()
  {
    this.route.navigateByUrl("movies");
  }
rr(){
  this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/'+this.id)
  .subscribe(data=>{
    console.log("vyvg",data)
  this.list=data['success'].movies
  console.log(this.list)
})
}
}



