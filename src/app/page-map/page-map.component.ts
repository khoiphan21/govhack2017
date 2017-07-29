import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInRightAnimation } from '../animations';
// import the D3 service, the type alias for the d3 varialbe and selection interface
declare var google: any;

@Component({
  selector: 'app-page-map',
  templateUrl: './page-map.component.html',
  styleUrls: ['./page-map.component.scss'],
  animations: [slideInRightAnimation]
})
export class PageMapComponent implements OnInit {
  @HostBinding('@slideInRightAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() {
   var myLatLng = { lat: -25.363, lng: 131.044 };

   var map = new google.maps.Map(document.getElementById('left-container'), {
     zoom: 15,
     center: myLatLng
   });

   var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     title: 'Hello World!'
   });

 }



}
