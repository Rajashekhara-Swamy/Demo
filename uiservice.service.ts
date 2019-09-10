import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { Button } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class UiserviceService {
  baseAPI = 'https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  constructor(private http: HttpClient) { }
  registerUser(values) {
    let body = {
      name: values.username,
      password: values.password,
      confirmpassword: values.confirmpswd
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users',

      body, this.httpOptions).pipe(map(data => { console.log(data) })).subscribe(result => {
        console.log("1", result)
      })
  }
  loginuser(values) {
    let body1 = {
      name: values.username,
      pass: values.password
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate',
      body1, this.httpOptions).pipe(map(data => { console.log("1", data) })).subscribe(result => {
        console.log(result)
      })
  }
  loginuser2(values) {
    let moviesdata = {
      // id:JSON.parse(localStorage.getItem("logindata")).success._id,
      id: '5d7738330d107d000767f2ef',
      MovieName: values.MovieName,
      Language: values.Language,
      Genre: values.Genre
    }
    return this.http.post('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies',
      moviesdata, this.httpOptions)
      .pipe(map(data => {
        console.log("1", data)
      })).subscribe(result => {
        // console.log(result)
      })
  }
  // regi(values){
  //   let body4={
  //     name:values.email,
  //     pass:values.password,
  //   }
  //   return this.http.post(this.baseAPI,body4).pipe(map(logdata=>{
  //     console.log("1",body4,logdata)
  //   }))

  //  }

}
