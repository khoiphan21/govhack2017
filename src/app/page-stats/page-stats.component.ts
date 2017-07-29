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
    let demographicdata = [45, 55];
    let height = 400,
      width = 600,
      barWidth = 50,
      barOffset = 5;


    let pieGenerator = d3.pie()
      .startAngle(-0.5 * Math.PI)
      .endAngle(0.5 * Math.PI);

    let data = [10, 40, 30, 20, 60, 80];

    // Create an arc generator with configuration
    let arcGenerator = d3.arc()
      .innerRadius(20)
      .outerRadius(100);

    let arcData = pieGenerator(data);

    // Create a path element and set its d attribute
    d3.select('#arc').append('svg')
      .selectAll('path')
      .data(arcData)
      .enter()
      .append('path')
      .attr('d', <any>arcGenerator);
  }

}
