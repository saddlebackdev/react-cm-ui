import 'images/andy_davis.jpg';
import 'images/princess_buttercup.jpg';
import 'images/princess_merida.jpg';
import 'images/the_dude.jpg';

// eslint-disable-next-line import/prefer-default-export
export const PAYLOAD_PERSON = [
    {
        addresses: [
            {
                address1: '1 Dodger Ln',
                address2: '',
                city: 'Venice',
                country: 'United States of America',
                countryAlpha2: 'US',
                countryAlpha3: 'USA',
                id: 32676,
                isPrimary: true,
                postalCode: '91210',
                region: 'California',
                regionCode: 'CA',
            },
            {
                address1: '1 Bowling Circle',
                address2: '',
                city: 'Venice',
                country: 'United States of America',
                countryAlpha2: 'US',
                countryAlpha3: 'USA',
                id: 32676,
                isPrimary: false,
                postalCode: '91210',
                region: 'California',
                regionCode: 'CA',
            },
        ],
        allergies: null,
        birthDate: 854496000,
        churchEntityName: 'Los Angeles',
        contactPreferences: {
            doNotContact: false,
            doNotEmail: true,
            doNotMail: false,
            doNotPhone: true,
            doNotText: true,
            id: 42,
            preferredMethod: 'phone',
        },
        congregationDate: '2000-12-01T12:00:00',
        deceasedDate: null,
        emails: [
            {
                email: 'his.duderness@example.com',
                id: 31580,
                isPrimary: true,
            },
            {
                email: 'el.duderino@example.com',
                id: 31580,
                isPrimary: false,
            },
        ],
        emergencyContacts: [{
            addresses: [{
                address1: '1 Bowling Circle',
                address2: '',
                city: 'Venice',
                country: 'United States of America',
                countryAlpha2: 'US',
                countryAlpha3: 'USA',
                isPrimary: false,
                postalCode: '91210',
                region: 'California',
                regionCode: 'CA',
            }],
            emails: [{
                isPrimary: true,
                value: 'im.shomer.shabbos@example.com',
            }],
            firstName: 'Walter',
            isPrimary: true,
            lastName: 'Sobchak',
            phones: [{
                isPrimary: true,
                value: '(626) 456-7751',
            }, {
                isPrimary: false,
                value: '(626) 456-8846',
            }],
            preferredMethod: 'phone',
            relationshipName: 'Friend',
        }],
        firstContactDate: '2001-12-01T12:00:00',
        firstName: 'Jeffrey',
        gender: 'm',
        gradeLevel: 'none',
        hasAcceptedChrist: true,
        hasSignedMaturityCovenant: false,
        hasSignedMembershipAgreement: true,
        hasSignedMinistryCovenant: false,
        hasSignedMissionCovenant: false,
        hasTakenClass101: true,
        hasTakenClass201: true,
        hasTakenClass301: false,
        hasTakenClass401: false,
        id: 204534,
        isActiveInTrips: false,
        isAdult: true,
        isBaptised: true,
        isChild: false,
        isInMinistry: false,
        isInSmallGroup: true,
        lastName: 'Lebowski',
        maritalStatus: 'Single',
        nickName: 'The Dude',
        phones: [
            {
                countryCode: 'us',
                displayPhoneNumber: '(626) 456-7890',
                extension: '',
                id: 57739,
                isPrimary: true,
                phoneNumber: '+16264567890',
                phoneType: 'Cell Phone',
                phoneTypeId: 3,
            },
            {
                countryCode: 'us',
                displayPhoneNumber: '(626) 456-7891',
                extension: '',
                id: 57736,
                isPrimary: false,
                phoneNumber: '+16264567891',
                phoneType: 'Home Phone',
                phoneTypeId: 1,
            },
        ],
        preferredService: null,
        prefix: 'Mr.',
        profilePictureUrl: '/images/the_dude.jpg',
        suffix: null,
    },
    {
        addresses: [
            {
                address1: '1 Kings Way',
                address2: '',
                city: 'Florin City',
                country: 'Florin',
                countryAlpha2: 'US',
                countryAlpha3: 'USA',
                id: 32674,
                isPrimary: true,
                postalCode: '83199',
                region: 'Humperdinck',
                regionCode: 'HU',
            },
        ],
        allergies: null,
        birthDate: 854496000,
        churchEntityId: 2,
        churchEntityKnown: true,
        churchEntityName: 'Lake Forest',
        contactPreferences: {
            doNotContact: false,
            doNotEmail: false,
            doNotMail: false,
            doNotPhone: false,
            doNotText: false,
            id: 42,
            preferredMethod: 'email',
        },
        deceasedDate: null,
        emails: [
            {
                email: 'princess.buttercup@example.com',
                id: 31580,
                isPrimary: true,
            },
        ],
        firstContact: null,
        firstName: 'Princess',
        gender: 'f',
        gradeLevel: 'none',
        id: 104534,
        isAdult: true,
        isChild: false,
        lastName: 'Buttercup',
        maritalStatus: 'Married',
        nickName: '',
        phones: [
            {
                countryCode: 'us',
                displayPhoneNumber: '(555) 308-7577',
                extension: '',
                id: 57439,
                isPrimary: true,
                phoneNumber: '+15553087577',
                phoneType: 'Cell Phone',
                phoneTypeId: 3,
            },
        ],
        preferredService: null,
        prefix: 'Mrs.',
        profilePictureUrl: '/images/princess_buttercup.jpg',
        suffix: null,
    },
    {
        addresses: [],
        allergies: null,
        birthDate: 854496000,
        churchEntities: [],
        churchEntityId: 2,
        churchEntityKnown: true,
        churchEntityName: 'Lake Forest',
        contactPreferences: {
            doNotContact: false,
            doNotEmail: false,
            doNotMail: false,
            doNotPhone: false,
            doNotText: false,
            id: 42,
            preferredMethod: 'mail',
        },
        deceasedDate: null,
        emails: [
            {
                email: 'nacho.libre@example.com',
                id: 31580,
                isPrimary: true,
            },
        ],
        firstContact: null,
        firstName: 'Nacho',
        gender: '',
        gradeLevel: 'none',
        id: 404331,
        isAdult: true,
        isChild: false,
        lastName: 'Libre',
        maritalStatus: '',
        nickName: '',
        phones: [],
        preferredService: null,
        prefix: '',
        profilePictureUrl: '',
        suffix: null,
    },
    {
        addresses: [],
        allergies: null,
        birthDate: null,
        churchEntities: [],
        churchEntityId: 2,
        churchEntityKnown: true,
        churchEntityName: 'Los Angeles',
        contactPreferences: {
            doNotContact: false,
            doNotEmail: true,
            doNotMail: false,
            doNotPhone: true,
            doNotText: true,
            id: 42,
            preferredMethod: 'mail',
        },
        deceasedDate: null,
        emails: [],
        emergencyContacts: [{
            addresses: [{
                address1: '1 Bowling Circle',
                address2: '',
                city: 'Venice',
                country: 'United States of America',
                countryAlpha2: 'US',
                countryAlpha3: 'USA',
                isPrimary: false,
                postalCode: '91210',
                region: 'California',
                regionCode: 'CA',
            }],
            emails: [{
                isPrimary: true,
                value: 'im.shomer.shabbos@example.com',
            }],
            firstName: 'Walter',
            isPrimary: true,
            lastName: 'Sobchak',
            phones: [{
                isPrimary: true,
                value: '(626) 456-7751',
            }, {
                isPrimary: false,
                value: '(626) 456-8846',
            }],
            preferredMethod: 'phone',
            relationshipName: 'Friend',
        }],
        firstContact: null,
        firstName: 'Andy',
        gender: 'm',
        gradeLevel: 'none',
        id: 298388,
        isAdult: false,
        isChild: true,
        lastName: 'Davis',
        maritalStatus: '',
        nickName: '',
        phones: [],
        preferredService: null,
        prefix: '',
        profilePictureUrl: '/images/andy_davis.jpg',
        suffix: null,
    },
    {
        addresses: [
            {
                address1: '1 Highland Ave.',
                address2: '',
                city: 'Highland Countryside',
                country: 'Scotland',
                countryAlpha2: 'SCT',
                countryAlpha3: 'GB-SCT',
                id: 49877,
                isPrimary: true,
                postalCode: '91210',
                region: 'Countryside',
                regionCode: 'CO',
            },
        ],
        allergies: null,
        birthDate: 1133395200,
        churchEntities: [],
        churchEntityKnown: true,
        churchEntityName: 'Los Angeles',
        contactPreferences: {
            doNotContact: false,
            doNotEmail: false,
            doNotMail: false,
            doNotPhone: false,
            doNotText: false,
            id: 42,
            preferredMethod: 'mail',
        },
        deceasedDate: null,
        emails: [],
        emergencyContacts: [],
        firstContact: null,
        firstName: 'Princess',
        gender: 'f',
        gradeLevel: 'eighth',
        id: 837747,
        isAdult: false,
        isChild: false,
        isStudent: true,
        lastName: 'Merida',
        maritalStatus: 'Single',
        nickName: '',
        phones: [],
        preferredService: null,
        prefix: '',
        profilePictureUrl: '/images/princess_merida.jpg',
        suffix: null,
    },
];
