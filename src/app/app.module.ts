import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PicComponent } from './pic/pic.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { HaversineService } from "ng2-haversine";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    PicComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    NgxMapboxGLModule.forRoot({
      accessToken: 'pk.eyJ1IjoibWF4aW1pbGlhbmJheWVybCIsImEiOiJjajk1bXh1bWwwMGhwMnFwYXFsMzUxNGJuIn0.vGPBZA8AcBsE9aaWrKZ_Yg' // accessToken can also be set per map (accessToken input of mgl-map)
    }),


  ],
  providers: [HaversineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
