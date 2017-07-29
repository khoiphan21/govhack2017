import { Suburb } from '../classes/suburb';

export const NUNDAH: Suburb = {
    demographic: {
        totalPopulation: 12141,
        male: 6006,
        female: 6133,
        averageDisposableIncome: 334, // (weekly income * 2 - mortgage) /4
        familyHouseholds: 2956, // search for 'Family households'
        ageRange: {
            genZ: 2005, // 0-19
            millenials: 5539, // 20-39
            genX: 1576, // 40-49
            babyBoomers: 2202, // 50-69
            traditionalists: 821 // 70+
        },
        countryOfBirth: [ // Search for 'country of birth'
            {
                country: 'Australia',
                amount: 7637
            },
            {
                country: 'India',
                amount: 708
            },
            {
                country: 'New Zealand',
                amount: 548
            },
            {
                country: 'England',
                amount: 390
            },
            {
                country: 'Philippines',
                amount: 172
            },
            {
                country: 'Nepal',
                amount: 154
            },
        ]
    }
}