import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulbComponent } from './bulb/bulb.component';
import { HomeComponent } from './bulb/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { RajaComponent } from './raja/raja.component';
import { FormComponent } from './form/form.component';
import { Pipe4Component } from './pipe4/pipe4.component';
import { UiregisterComponent } from './uiregister/uiregister.component';
import { UiloginComponent } from './uilogin/uilogin.component';
import { ServiceService } from './myservice.service';
// import { BankComponent } from './bank/bank.component';
import { Login9Component } from './login9/login9.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieslistComponent } from './movieslist/movieslist.component';


//import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    BulbComponent,
    HomeComponent,
    
    TreeComponent,
    
    RajaComponent,
    
    FormComponent,
    
    Pipe4Component,
    
    UiregisterComponent,
    
    UiloginComponent,
    
    // BankComponent,
    
    Login9Component,
    
    MoviesComponent,
    
    MovieslistComponent,
    
    
    
    
   // UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ReactiveFormsModule

  ],
  providers:[ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
