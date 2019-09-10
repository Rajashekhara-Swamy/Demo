import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BulbComponent } from './bulb/bulb.component';
import { HomeComponent } from './bulb/home/home.component';
import { TreeComponent } from './tree/tree.component';
import { RajaComponent } from './raja/raja.component';
import { FormComponent } from './form/form.component';
import { Pipe4Component } from './pipe4/pipe4.component';
import { UiregisterComponent } from './uiregister/uiregister.component';
import { UiloginComponent } from './uilogin/uilogin.component';
// import { BankComponent } from './bank/bank.component';
import { Login9Component } from './login9/login9.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieslistComponent } from './movieslist/movieslist.component';


const routes: Routes = [
  // {path:'',component:TreeComponent},

//  {path:"tree",component:TreeComponent},
  // {path:'bulb',component:BulbComponent},
  // {path:'home',component:HomeComponent},
  // {path:'raja',component:RajaComponent},
  // {path:'home',component:HomeComponent},
  // {path:'form',component:FormComponent},
  // {path:'',component:Pipe4Component},
   {path:'',component:UiregisterComponent},
  {path:'uiregister',component:UiregisterComponent},
  {path:'uilogin',component:UiloginComponent},
  // {path:'',component:BankComponent},
  // {path:'',component:Login9Component},
  {path:'movies',component:MoviesComponent},
  {path:'movieslist',component:MovieslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
