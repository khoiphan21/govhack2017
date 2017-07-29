import { Suburb } from '../classes/suburb';

export const wavellHeights: Suburb = {
    demographic: {
        totalPopulation: 3938,
        male: 1991,
        female: 1950,
        averageDisposableIncome: 309, // (weekly income * 2 - mortgage) /4
        familyHouseholds: 925, // search for 'Family households'
        ageRange: {
            genZ: 815, // 0-19
            millenials: 1582, // 20-39
            genX: 576, // 40-49
            babyBoomers: 761, // 50-69
            traditionalists: 218 // 70+
        },
        countryOfBirth: [ // Search for 'country of birth'
            {
                country: 'Australia',
                amount: 2691
            },
            {
                country: 'India',
                amount: 136
            },
            {
                country: 'New Zealand',
                amount: 123
            },
            {
                country: 'Nepal',
                amount: 120
            },
            {
                country: 'England',
                amount: 113
            },
            {
                country: 'Italy',
                amount: 38
            },
        ]
    },
    pointOfInterest: {
        restaurants: 4,
        cafe: 6,
        parks: 1,
        shoppingMalls: 0
    },
    publicFacilities: {
        schools: 3,
        hospitals: 1,
        busStops: 10
    }
}