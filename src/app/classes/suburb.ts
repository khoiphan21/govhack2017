import { Demographic } from './demographic';
import { PointOfInterest } from './pointOfInterest';
import { PublicFacilities } from './publicFacilities';

export class Suburb {
    pointOfInterest: PointOfInterest;
    publicFacilities: PublicFacilities;
    demographic: Demographic;
}