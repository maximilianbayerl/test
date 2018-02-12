import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from "./home/home.component";
import { RouterModule, Routes} from "@angular/router";
import { MapComponent} from "./map/map.component";
import { PicComponent} from "./pic/pic.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pic', component: PicComponent },
  { path: 'map', component: MapComponent },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]


})
export class AppRoutingModule { }
