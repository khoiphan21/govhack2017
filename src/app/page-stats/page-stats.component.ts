import { Component, OnInit, HostBinding } from '@angular/core';
import { pageStatsAnimation } from '../animations';
import { Router, NavigationEnd } from '@angular/router';

declare var google: any;

import * as _ from 'underscore';

// import the D3 service, the type alias for the d3 varialbe and selection interface
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { Demographic } from '../classes/demographic';
import { DataService } from '../data.service';
import { CountryOfBirth } from '../classes/countryOfBirth';
import { PointOfInterest } from '../classes/pointOfInterest';
import { PublicFacilities } from '../classes/publicFacilities';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.scss'],
  animations: [pageStatsAnimation]
})
export class PageStatsComponent implements OnInit {
  @HostBinding('@pageStatsAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  private d3: D3;

  // Storing previous URL for animation
  previousURL: string;

  // Variables for the points of interests
  pointOfInterest: PointOfInterest;

  // Variables for public facilities
  publicFacilities: PublicFacilities;
  
  // Variables for the demographic data
  demographicData: Demographic;
  genZ: string;
  millenials: string;
  genX: string;
  babyBoomers: string;
  traditionalists: string;
  malePercentage: number;
  femalePercentage: number;
  totalPopulation: number;
  averageDisposableIncome: number;
  familyHouseholds: number;

  // Variables for ethnicities
  ethnicities: string[] = []; // Country names
  ethnicityValues: string[] = []; // go straight to style.width for the bar
  ethnicBarColors: string[] = [
    '#728780', 
    '#95D6BE',
    '#F3AB70',
    '#C2CFBD',
    '#CE3E77',
  ]; // index must match the index of the countries

  constructor(
    private d3Service: D3Service,
    private dataService: DataService,
    private modalService: ModalService,
    private router: Router
  ) { // passing d3 service into the constructor
  }

  ngOnInit() {
    /**
     * FOR ANIMATION
     */
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.previousURL == '/welcome/stats-nundah' 
          && event.url == '/welcome') {
          // Then change animation to slide down instead of left
        }

        // After handling everything, store the previous URL
        this.previousURL = event.url;
      }
    })

    /**
     * MAIN LOGIC STUFF
     */
    var nundah = { lat: -27.4020, lng: 153.0660 };

    var map = new google.maps.Map(document.getElementById('top-map'), {
      zoom: 14,
      center: nundah
    });

    var markerMain = new google.maps.Marker({
      position: nundah,
      map: map,
      title: 'Nundah',
    });

    this.d3 = this.d3Service.getD3(); // <-- obtain the d3 object from the D3 service
    this.demographicData = this.dataService.getDemographicData('NUNDAH');
    this.pointOfInterest = this.dataService.getPOI('NUNDAH');
    this.publicFacilities = this.dataService.getPublicFacilities('NUNDAH');

    // SETUP THE DEMOGRAPHIC DATA
    let maxAgeRange = Math.max(
      this.demographicData.ageRange.genZ,
      this.demographicData.ageRange.millenials,
      this.demographicData.ageRange.genX,
      this.demographicData.ageRange.babyBoomers,
      this.demographicData.ageRange.traditionalists,
    );
    let ageRange = this.demographicData.ageRange;
    this.genZ = `${ageRange.genZ / maxAgeRange * 100}%`;
    this.millenials = `${ageRange.millenials / maxAgeRange * 100}%`;
    this.genX = `${ageRange.genX / maxAgeRange * 100}%`;
    this.babyBoomers = `${ageRange.babyBoomers / maxAgeRange * 100}%`;
    this.traditionalists = `${ageRange.traditionalists / maxAgeRange * 100}%`;
    // General stuff
    this.malePercentage = Math.round(this.demographicData.male / this.demographicData.totalPopulation * 100);
    this.femalePercentage = Math.round(this.demographicData.female / this.demographicData.totalPopulation * 100);
    this.totalPopulation = this.demographicData.totalPopulation;
    this.averageDisposableIncome = this.demographicData.averageDisposableIncome;
    this.familyHouseholds = this.demographicData.familyHouseholds;

    // SETUP THE ETHNICITIES DATA
    let countriesOfBirth: number[] = [];
    let maxPeople: number = 0;
    _.each(this.demographicData.countryOfBirth, (country: CountryOfBirth) => {
      countriesOfBirth.push(country.amount);
      this.ethnicities.push(country.country);
      // Get the max number of people
      if (country.amount > maxPeople) {
        maxPeople = country.amount;
      }
    })
    // Now calculate the length of the bar
    _.each(countriesOfBirth, value => {
      this.ethnicityValues.push(`${value / maxPeople * 100}%`)
    })

    // DRAW THE DONUT CHART
    let d3 = this.d3; // for convenience use a block scope variable
    let height,
      width,
      barWidth = 50,
      barOffset = 5,
      radius;
    // Setup params for the chart    
    let parentElement = document.getElementById('chart-wrapper');
    height = parentElement.getBoundingClientRect().height;
    width = parentElement.getBoundingClientRect().width;
    radius = Math.min(height, width) / 2;

    let pie = d3.pie()
      .value((d: number) => {return d;})
      .sort(null);

    let color = ["#C3A485", "#067376"];
    let demographicdata = [
      this.demographicData.male, this.demographicData.female
    ];

    // Create an arc generator with configuration
    let arc = d3.arc()
      .innerRadius(radius * 0.85)
      .outerRadius(radius);

    let svg = d3.select('svg.chart')
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
      });
    // END DONUT CHART
  }

  showModal() {
    this.modalService.showModal();
  }

}
