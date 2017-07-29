import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInRightAnimation } from '../animations';

@Component({
  selector: 'app-page-stats-p2',
  templateUrl: './page-stats-p2.component.html',
  styleUrls: ['./page-stats-p2.component.scss'],
  animations: [slideInRightAnimation]
})
export class PageStatsP2Component implements OnInit {
  @HostBinding('@slideInRightAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor() { }

  ngOnInit() {
  }

}
