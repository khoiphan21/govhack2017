import { Suburb } from '../classes/suburb';

export const CLAYFIELD: Suburb = {
    demographic: {
        totalPopulation: 10555,
        male: 5042,
        female: 5519,
        averageDisposableIncome: 321, // (weekly income * 2 - mortgage) /4
        familyHouseholds: 2469, // search for 'Family households'
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
                amount: 7181
            },
            {
                country: 'India',
                amount: 417
            },
            {
                country: 'New Zealand',
                amount: 350
            },
            {
                country: 'England',
                amount: 332
            },
            {
                country: 'Papua New Geunea',
                amount: 86
            },
            {
                country: 'China',
                amount: 84
            },
        ]
    },
    pointOfInterest: {
        restaurants: 26,
        cafe: 15,
        parks: 1,
        shoppingMalls: 2
    },
    publicFacilities: {
        schools: 7,
        hospitals: 4,
        busStops: 2
    }
}