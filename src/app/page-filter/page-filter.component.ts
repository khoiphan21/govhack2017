import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-page-filter',
  templateUrl: './page-filter.component.html',
  styleUrls: ['./page-filter.component.scss'],
  animations: [fadeAnimation]
})
export class PageFilterComponent implements OnInit {
  @HostBinding('@fadeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
