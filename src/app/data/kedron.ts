import { Suburb } from '../classes/suburb';

export const KEDRON: Suburb = {
    demographic: {
        totalPopulation: 9359,
        male: 4578,
        female: 4782,
        averageDisposableIncome: 335, // (weekly income * 2 - mortgage) /4
        familyHouseholds: 2302, // search for 'Family households'
        ageRange: {
            genZ: 2314, // 0-19
            millenials: 3272, // 20-39
            genX: 1483, // 40-49
            babyBoomers: 1640, // 50-69
            traditionalists: 650 // 70+
        },
        countryOfBirth: [ // Search for 'country of birth'
            {
                country: 'Australia',
                amount: 6930
            },
            {
                country: 'New Zealand',
                amount: 303
            },
            {
                country: 'England',
                amount: 255
            },
            {
                country: 'India',
                amount: 203
            },
            {
                country: 'Philippines',
                amount: 101
            },
            {
                country: 'Italy',
                amount: 85
            },
        ]
    },
    pointOfInterest: {
        restaurants: 10,
        cafe: 9,
        parks: 6,
        shoppingMalls: 3
    },
    publicFacilities: {
        schools: 4,
        hospitals: 1,
        busStops: 12
    }
}