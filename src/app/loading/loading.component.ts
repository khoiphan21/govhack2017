import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  locations: string[] = [];
  backgroundLocations: string[] = [];
  currentIndex = 0;

  constructor() {
    let indexString: string;
    for (let i = 1; i <= 45; i++) {
      if (i < 10) {
        indexString = `000${i}`;
      } else if (i < 100 && i > 9) {
        indexString = `00${i}`;
      } else if (i < 1000 && i > 99) {
        indexString = `0${i}`;
      }
      this.locations.push(`assets/loading/nextbiz-loading${indexString}.png`);
      this.backgroundLocations.push(`url('assets/loading/nextbiz-loading${indexString}.png') left center`)
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.startAnimation();
    }, 500);
  }

  startAnimation() {
    // let next: boolean = true;
    // while(true) {
    //   if (next) {
    //     this.currentIndex += 1;
    //     next = false;
    //     setTimeout(() => {
    //       next = true;
    //     }, 10);
    //   }
      
    // }
  }

}
