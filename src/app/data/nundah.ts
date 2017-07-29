import { Suburb } from '../classes/suburb';

export const NUNDAH: Suburb = {
    demographic: {
        totalPopulation: 12141,
        male: 6006,
        female: 6133,
        averageDisposableIncome: 334, // Weekly
        familyHouseholds: 2956,
        ageRange: {
            genZ: 2005,
            millenials: 5539,
            genX: 1576,
            babyBoomers: 2202,
            traditionalists: 821
        },
        countryOfBirth: [
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
    },
    crime: {
        offences: 73
    }
}