import { Injectable } from '@angular/core';
import { Demographic } from './classes/demographic';
import { NUNDAH } from './data/nundah';

@Injectable()
export class DataService {

  constructor() { }

  getDemographic(suburb: string): Demographic {
    if (suburb == 'NUNDAH') {
      return NUNDAH.demographic;
    }
    return null;
  }

}
