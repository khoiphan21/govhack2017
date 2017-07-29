import { AgeRange } from './ageRange';
export class Demographic {
    totalPopulation: number;
    female: number;
    male: number;
    averageDisposableIncome: number; // weekly
    familyHouseholds: number; // As a percentage
    ageRange: AgeRange;
}