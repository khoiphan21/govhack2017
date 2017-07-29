import { Injectable } from '@angular/core';
import { Demographic } from './classes/demographic';
import { NUNDAH } from './data/nundah';
import { PointOfInterest } from './classes/pointOfInterest';
import { PublicFacilities } from './classes/publicFacilities';
import { KEDRON } from './data/kedron';
import { HENDRA } from './data/hendra';
import { WOOLOOWIN } from './data/wooloowin';
import { CLAYFIELD } from './data/clayfield';
import { WAVELLHEIGHTS } from './data/wavell-heights';

@Injectable()
export class DataService {

  constructor() { }

  getDemographicData(suburb: string): Demographic {
    if (suburb == 'NUNDAH') {
      return NUNDAH.demographic;
    } else if (suburb == 'KEDRON') {
      return KEDRON.demographic;
    } else if (suburb == 'HENDRA') {
      return HENDRA.demographic;
    } else if (suburb == 'WOOLOOWIN') {
      return WOOLOOWIN.demographic;
    } else if (suburb == 'CLAYFIELD') {
      return CLAYFIELD.demographic;
    } else if (suburb == 'WAVELLHEIGHTS') {
      return WAVELLHEIGHTS.demographic;
    } else {
      return null;
    }
  }

  getPOI(suburb: string): PointOfInterest {
    if (suburb == 'NUNDAH') {
      return NUNDAH.pointOfInterest;
    } else if (suburb == 'KEDRON') {
      return KEDRON.pointOfInterest;
    } else if (suburb == 'HENDRA') {
      return HENDRA.pointOfInterest;
    } else if (suburb == 'WOOLOOWIN') {
      return WOOLOOWIN.pointOfInterest;
    } else if (suburb == 'CLAYFIELD') {
      return CLAYFIELD.pointOfInterest;
    } else if (suburb == 'WAVELLHEIGHTS') {
      return WAVELLHEIGHTS.pointOfInterest;
    } else {
      return null;
    }
  }

  getPublicFacilities(suburb: string): PublicFacilities {
    if (suburb == 'NUNDAH') {
      return NUNDAH.publicFacilities;
    } else if (suburb == 'KEDRON') {
      return KEDRON.publicFacilities;
    } else if (suburb == 'HENDRA') {
      return HENDRA.publicFacilities;
    } else if (suburb == 'WOOLOOWIN') {
      return WOOLOOWIN.publicFacilities;
    } else if (suburb == 'CLAYFIELD') {
      return CLAYFIELD.publicFacilities;
    } else if (suburb == 'WAVELLHEIGHTS') {
      return WAVELLHEIGHTS.publicFacilities;
    } else {
      return null;
    }
  }
}
