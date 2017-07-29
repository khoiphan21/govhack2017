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

    // let pieGenerator = d3.pie()
    //   .startAngle(-0.5 * Math.PI)
    //   .endAngle(0.5 * Math.PI);


    // let arcData = pieGenerator(data);

    // // Create a path element and set its d attribute
    // d3.select('#demographic-chart').append('svg')
    //   .selectAll('path')
    //   .data(arcData)
    //   .enter()
    //   .append('path')
    //   .attr('d', <any>arcGenerator);

    // Draw the pie
    let height,
      width,
      barWidth = 50,
      barOffset = 5,
      radius;
    
    let parentElement = document.getElementById('chart-wrapper');
    height = parentElement.getBoundingClientRect().height;
    width = parentElement.getBoundingClientRect().width;
    radius = Math.min(height, width) / 2;

    let pie = d3.pie()
      .value((d: number) => {return d;})
      .sort(null);

    let color = ["red", "blue"]
    let demographicdata = [45, 55];

    // Create an arc generator with configuration
    let arc = d3.arc()
      .innerRadius(radius * 0.95)
      .outerRadius(radius);

    let svg = d3.select("#demographic-chart div").append('svg')
      .attr("width", width)
      .attr("height", height)
    .append('g')
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    let path = svg.selectAll('path')
      .data(pie(demographicdata))
      .enter().append('path')
      .attr('d', <any> arc)
      .attr('fill', (d, i) => {
        return color[i];
      })


  }

}
