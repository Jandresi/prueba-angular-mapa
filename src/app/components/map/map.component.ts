import { Component, OnInit } from '@angular/core';
import { latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public opened=true;

 options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ],
    zoom: 11,
    center: latLng([ 3.4058575, -76.504381 ])
  };

  constructor() { }

  ngOnInit(): void {

  }

}
