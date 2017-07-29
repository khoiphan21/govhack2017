import { Injectable } from '@angular/core';
import { Demographic } from './classes/demographic';
import { NUNDAH } from './data/nundah';
import { PointOfInterest } from './classes/pointOfInterest';
import { PublicFacilities } from './classes/publicFacilities';
import { KEDRON } from './data/kedron';

@Injectable()
export class DataService {

  constructor() { }

  getDemographicData(suburb: string): Demographic {
    if (suburb == 'NUNDAH') {
      return NUNDAH.demographic;
    } else if (suburb == 'KEDRON') {
      return KEDRON.demographic;
    } else {
      return null;
    }
  }

  getPOI(suburb: string): PointOfInterest {
    if (suburb == 'NUNDAH') {
      return NUNDAH.pointOfInterest;
    } else if (suburb == 'KEDRON') {
      return KEDRON.pointOfInterest;
    } else {
      return null;
    }
  }

  getPublicFacilities(suburb: string): PublicFacilities {
    if (suburb == 'NUNDAH') {
      return NUNDAH.publicFacilities;
    } else if (suburb == 'KEDRON') {
      return KEDRON.publicFacilities;
    } else {
      return null;
    }
  }
}
