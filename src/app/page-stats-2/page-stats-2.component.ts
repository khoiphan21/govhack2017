import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInRightAnimation } from '../animations';

import * as _ from 'underscore';

import { Demographic } from '../classes/demographic';
import { DataService } from '../data.service';
import { CountryOfBirth } from '../classes/countryOfBirth';
import { PointOfInterest } from '../classes/pointOfInterest';
import { PublicFacilities } from '../classes/publicFacilities';

@Component({
  selector: 'app-page-stats-2',
  templateUrl: './page-stats-2.component.html',
  styleUrls: ['./page-stats-2.component.scss'],
  animations: [slideInRightAnimation]
})
export class PageStats2Component implements OnInit {
@HostBinding('@slideInRightAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.demographicData = this.dataService.getDemographicData('HENDRA');
    this.pointOfInterest = this.dataService.getPOI('HENDRA');
    this.publicFacilities = this.dataService.getPublicFacilities('HENDRA');

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
  }

}