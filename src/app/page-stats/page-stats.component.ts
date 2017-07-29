import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../animations';
// import the D3 service, the type alias for the d3 varialbe and selection interface
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.scss'],
  animations: [slideInDownAnimation]
})
export class PageStatsComponent implements OnInit {
  @HostBinding('@slideInAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  private d3: D3;

  constructor(d3Service: D3Service) { // passing d3 service into the consturctor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 service
   }

  ngOnInit() {
    let d3 = this.d3; // for convenience use a block scope variable
    
    
    d3.select('#arc')
      .append('svg')
        .attr('width', 600)
        .attr('height', 400)
        .style('background', '#ffffff')
      .append('rect')
        .attr('x', 200)
        .attr('y', 200)
        .attr('width', 200)
        .attr('height', 200)
        .style('fill', '#cb4b19')

    d3.select('#arc svg')
      .append('circle')
      .attr('cx', 300)
      .attr('cy', 200)
      .attr('r', 50)
      .style('fill', '#840043')

  }

}
