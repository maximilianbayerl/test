import { Component, OnInit } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})


export class MapComponent implements OnInit {

  constructor(private haversineService: HaversineService) { }

  ngOnInit() {
    this.tryHaversine();
  }

  createGeoJSONCircle (center, radiusInKm, points){
  if(!points) points = 64;

  let coords = {
    latitude: center[1],
    longitude: center[0]
  };

  let km = radiusInKm;

  let ret = [];
  let ret2=[];
  let ret3 =[];
  let distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180));
  let distanceY = km/110.574;

  let theta, x, y;
  for(let i=0; i<points; i++) {
    theta = (i/points)*(2*Math.PI);
    x = distanceX*Math.cos(theta);
    y = distanceY*Math.sin(theta);

    ret.push([coords.longitude+x, coords.latitude+y]);
    ret2.push([coords.longitude+x+3, coords.latitude+y+3]);
    ret3.push([coords.longitude+x+2, coords.latitude+y+2]);

  }
  ret.push(ret[0]);
  ret2.push(ret2[0]);
  ret3.push(ret3[0]);


  return {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [ret,ret2,ret3]
        }
      }]
    }
  };
};


  tryHaversine(): void {

    let madrid: GeoCoord = {
        latitude: 51.58527859,
        longitude: 10
    };

    let bilbao: GeoCoord = {
        latitude: 53.58527859,
        longitude: 12
    };

    let meters = this.haversineService.getDistanceInMeters(madrid, bilbao);
    let kilometers = this.haversineService.getDistanceInKilometers(madrid, bilbao);
    let miles = this.haversineService.getDistanceInMiles(madrid, bilbao);

    console.log(`
        The distance between ${madrid.latitude} ${madrid.longitude} and ${bilbao.latitude}  ${bilbao.longitude} is:
            - ${kilometers} kilometers
            - ${miles} miles
    `);
}
}
