import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInRightAnimation } from '../animations';
declare var google: any;

@Component({
  selector: 'app-page-map-p2',
  templateUrl: './page-map-p2.component.html',
  styleUrls: ['./page-map-p2.component.scss'],
  animations: [slideInRightAnimation]
})
export class PageMapP2Component implements OnInit {
  @HostBinding('@slideInRightAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() {
    var nundah = { lat: -27.4020, lng: 153.0660 };
    var kedron = { lat: -27.4070, lng: 153.0340 };
    var hendra = { lat: -27.4180, lng: 153.0710 };
    var wooloowin = { lat: -27.4151, lng: 153.0457 };
    var clayfield = { lat: -27.4180, lng: 153.0570 };
    var wavellHeights = { lat: -27.3930, lng: 153.0480 };
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

    var map = new google.maps.Map(document.getElementById('left-container'), {
      zoom: 14,
      center: nundah
    });

    var markerMain = new google.maps.Marker({
      position: nundah,
      map: map,
      title: 'Nundah',
      icon: image
    });

    var marker = new google.maps.Marker({
      position: kedron,
      map: map,
      label: '1',
      title: 'Kedron',
    });

    var marker2 = new google.maps.Marker({
      position: hendra,
      map: map,
      label: '2',
      title: 'Hendra'
    });

    var marker3 = new google.maps.Marker({
      position: wooloowin,
      map: map,
      label: '3',
      title: 'wooloowin'
    });

    var marker4 = new google.maps.Marker({
      position: clayfield,
      map: map,
      label: '4',
      title: 'Clayfield'
    });

    var marker5 = new google.maps.Marker({
      position: wavellHeights,
      map: map,
      label: '5',
      title: 'Wavell Heights'
    });
  }



}
