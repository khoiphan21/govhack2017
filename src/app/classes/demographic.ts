import { AgeRange } from './ageRange';
import { CountryOfBirth } from './countryOfBirth';

export class Demographic {
    totalPopulation: number;
    female: number;
    male: number;
    averageDisposableIncome: number; // weekly
    familyHouseholds: number; // As a percentage
    ageRange: AgeRange;
    countryOfBirth: CountryOfBirth[];
}