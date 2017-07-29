import { Injectable } from '@angular/core';
import { Demographic } from './classes/demographic';
import { NUNDAH } from './data/nundah';
import { Crime } from './classes/crime';

@Injectable()
export class DataService {

  constructor() { }

  getDemographicData(suburb: string): Demographic {
    if (suburb == 'NUNDAH') {
      return NUNDAH.demographic;
    } else {
      return null;
    }
  }
  // getCrimeData(suburb: string): Crime {
  //   if (suburb == 'NUNDAH') {
  //     return NUNDAH.crime;
  //   } else {
  //     return null;
  //   }
  // }

}
