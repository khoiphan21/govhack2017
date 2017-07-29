import { Suburb } from '../classes/suburb';

export const HENDRA: Suburb = {
    demographic: {
        totalPopulation: 4625,
        male: 2273,
        female: 2354,
        averageDisposableIncome: 487, // (weekly income * 2 - mortgage) /4
        familyHouseholds: 1224, // search for 'Family households'
        ageRange: {
            genZ: 1158, // 0-19
            millenials: 1158, // 20-39
            genX: 732, // 40-49
            babyBoomers: 1175, // 50-69
            traditionalists: 408 // 70+
        },
        countryOfBirth: [ // Search for 'country of birth'
            {
                country: 'Australia',
                amount: 3425
            },
            {
                country: 'England',
                amount: 190
            },
            {
                country: 'New Zealand',
                amount: 146
            },
            {
                country: 'South Africa',
                amount: 47
            },
            {
                country: 'Ireland',
                amount: 41
            },
            {
                country: 'India',
                amount: 38
            },
        ]
    },
    pointOfInterest: {
        restaurants: 7,
        cafe: 10,
        parks: 2,
        shoppingMalls: 2
    },
    publicFacilities: {
        schools: 3,
        hospitals: 0,
        busStops: 11
    }
}