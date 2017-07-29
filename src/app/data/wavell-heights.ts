import { Suburb } from '../classes/suburb';

export const WAVELLHEIGHTS: Suburb = {
    demographic: {
        totalPopulation: 9692,
        male: 4683,
        female: 5009,
        averageDisposableIncome: 471, // (weekly income * 2 - mortgage) /4
        familyHouseholds: 2610, // search for 'Family households'
        ageRange: {
            genZ: 2586, // 0-19
            millenials: 2717, // 20-39
            genX: 1647, // 40-49
            babyBoomers: 1933, // 50-69
            traditionalists: 809 // 70+
        },
        countryOfBirth: [ // Search for 'country of birth'
            {
                country: 'Australia',
                amount: 7495
            },
            {
                country: 'New Zealand',
                amount: 319
            },
            {
                country: 'England',
                amount: 302
            },
            {
                country: 'India',
                amount: 120
            },
            {
                country: 'Philippines',
                amount: 89
            },
            {
                country: 'Italy',
                amount: 60
            },
        ]
    },
    pointOfInterest: {
        restaurants: 24,
        cafe: 11,
        parks: 10,
        shoppingMalls: 1
    },
    publicFacilities: {
        schools: 3,
        hospitals: 4,
        busStops: 28
    }
}