import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],

})


export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createGeoJSONCircle (center, radiusInKm, points){
  if(!points) points = 64;

  let coords = {
    latitude: center[1],
    longitude: center[0]
  };

  let km = radiusInKm;

  let ret = [];
  let distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180));
  let distanceY = km/110.574;

  let theta, x, y;
  for(let i=0; i<points; i++) {
    theta = (i/points)*(2*Math.PI);
    x = distanceX*Math.cos(theta);
    y = distanceY*Math.sin(theta);

    ret.push([coords.longitude+x, coords.latitude+y]);
  }
  ret.push(ret[0]);


  return {
    "type": "geojson",
    "data": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [ret]
        }
      }]
    }
  };
};
}
