import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { fadeOutAnimation } from '../animations';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrls: ['./page-loading.component.scss'],
  animations: [fadeOutAnimation]
})
export class PageLoadingComponent implements OnInit {
  @HostBinding('@fadeOutAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.router.navigate(['welcome']);
    // }, 3000)
  }

}
