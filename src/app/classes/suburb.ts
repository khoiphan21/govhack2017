import { Demographic } from './demographic';
import { Crime } from './crime';
import { PointOfInterest } from './pointOfInterest';
import { PublicFacilities } from './publicFacilities';

export class Suburb {
    pointOfInterest: PointOfInterest;
    publicFacilities: PublicFacilities;
    demographic: Demographic;
}