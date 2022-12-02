const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev: 'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        appendableList: {
            unique: {
                title: 'double value',
                text: 'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset the settings',
            text: 'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text: 'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Select position',
            zoom: 'Select position and zoom',
            sync: 'use current position',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    vehicles: {
        0: {
            caption: 'Pumper',
            color: '#cc0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 5,
            wtank: 2000,
            possibleBuildings: [0, 18],
        },
        1: {
            caption: 'Medium Tanker',
            color: '#bb0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 5,
            wtank: 3000,
            possibleBuildings: [0, 18],
        },
        2: {
            caption: 'Ladder Platform',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 18],
            special: 'Required once you have built 3 firehouses',
        },
        3: {
            caption: 'Support Vehicle',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [0, 18],
            special: 'Required once you have built 6 firehouses',
        },
        4: {
            caption: 'Major Rescue Vehicle',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [0, 18],
            special: 'Required once you have built 4 firehouses',
        },
        5: {
            caption: 'Ambulance',
            color: '#9c691c',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
        },
        6: {
            caption: 'Bulk Water Tanker',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 11_000,
            possibleBuildings: [0, 18],
            special: 'Required once you have built 7 firehouses',
        },
        7: {
            caption: 'HAZMAT Truck',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            schooling: {
                'Fire Station': {
                    'HAZMAT Course': {
                        all: true,
                    },
                },
            },
            special: 'Required once you have built 11 firehouses',
        },
        8: {
            caption: 'Police car',
            color: '#0b6911',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
        },
        9: {
            caption: 'Air Ambulance',
            color: '#ba9d0b',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [5],
            schooling: {
                Rescue: {
                    'Intensive Care Education': {
                        all: true,
                    },
                },
            },
        },
        10: {
            caption: 'BASU',
            color: '#ca1616',
            credits: 11_680,
            coins: 25,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            special: 'Required from 5 fire stations',
        },
        11: {
            caption: 'MCV',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            schooling: {
                'Fire Station': {
                    'Mobile command': {
                        all: true,
                    },
                },
            },
            special: 'Required once you have built 13 firehouses',
        },
        12: {
            caption: 'Rescue Pumper',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [0, 18],
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. <br>Rescue Pumper acts as a MRU and a Fire Truck.',
        },
        13: {
            caption: 'Aerial Pumper',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 5,
            possibleBuildings: [0, 18],
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. <br>Aerial Pumper acts as a Turntable Ladder and a Fire Truck.',
        },
        14: {
            caption: 'Police helicopter',
            color: '#0e661d',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            possibleBuildings: [13],
            schooling: {
                Police: {
                    'Police Air Wing': {
                        all: true,
                    },
                },
            },
        },
        15: {
            caption: 'TOG Armoured Bearcat',
            color: '#257513',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 10,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    TOG: {
                        all: true,
                    },
                },
            },
            special: 'Required once you have built 8 police stations',
        },
        16: {
            caption: 'K-9 Unit',
            color: '#15791a',
            coins: 25,
            credits: 7000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    'K-9': {
                        all: true,
                    },
                },
            },
            special: 'Required once you have built 6 police stations',
        },
        17: {
            caption: 'Police Motorcycle',
            color: '#346622',
            coins: 18,
            credits: 2500,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    'Police Motorcycle': {
                        all: true,
                    },
                },
            },
        },
        18: {
            caption: 'TOG SUV',
            color: '#2c642e',
            coins: 23,
            credits: 7000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    TOG: {
                        all: true,
                    },
                },
            },
            special: 'Required once you have built 8 police stations',
        },
        19: {
            caption: 'Heavy Tanker',
            color: '#bb0000',
            coins: 25,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 5,
            wtank: 4000,
            possibleBuildings: [0, 18],
        },
        20: {
            caption: 'SES Vehicle',
            color: '#22997d',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            possibleBuildings: [15],
            schooling: {
                'Fire Station': {
                    'SES Water Rescue': {
                        all: true,
                    },
                },
            },
        },
        21: {
            caption: 'Rescue Boat',
            color: '#229b7a',
            coins: 12,
            credits: 6000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [15],
            special: 'SES Vehicle is the towing vehicle',
        },
        22: {
            caption: 'Mounted Police',
            color: '#105d36',
            coins: 10,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    'Mounted Police Training': {
                        all: true,
                    },
                },
            },
            special: 'Towing Vehicle is Police Car',
        },
        23: {
            caption: 'Paramedic Supervisor',
            color: '#ba9d0b',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
            special: 'Required once you have built 6 Rescue stations',
        },
        24: {
            caption: 'ICP',
            color: '#ba9d0b',
            coins: 15,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [0, 2, 20],
            schooling: {
                'Fire Station': {
                    'Intensive Care Education': {
                        all: true,
                    },
                },
                'Rescue': {
                    'Intensive Care Education': {
                        all: true,
                    },
                },
            },
        },
        25: {
            caption: 'ICS',
            color: '#ba9d0b',
            coins: 15,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            possibleBuildings: [0, 2, 20],
            schooling: {
                'Fire Station': {
                    'Intensive Care Education': {
                        all: true,
                    },
                },
                'Rescue': {
                    'Intensive Care Education': {
                        all: true,
                    },
                },
            },
        },
        26: {
            caption: 'Ambulance Rescue',
            color: '#ba9d0b',
            coins: 15,
            credits: 10_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            possibleBuildings: [0, 2, 20],
            special: 'Can work as MRU',
        },
        27: {
            caption: 'Mass Casualty Unit',
            color: '#ba9d0b',
            coins: 25,
            credits: 25_000,
            minPersonnel: 4,
            maxPersonnel: 10,
            possibleBuildings: [0, 2, 20],
            special:
                'You can buy 1 Mass Casualty Vehicle for every 20 ambulance stations (respectively 15 with premium account).',
        },
        28: {
            caption: 'Ultra-Light Tanker',
            color: '#bb0000',
            coins: 5,
            credits: 5000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 500,
            possibleBuildings: [0, 18],
        },
        29: {
            caption: 'Light Tanker',
            color: '#bb0000',
            coins: 8,
            credits: 8000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 1800,
            possibleBuildings: [0, 18],
        },
        30: {
            caption: 'Pumper Tanker',
            color: '#bb0000',
            coins: 15,
            credits: 19_000,
            minPersonnel: 4,
            maxPersonnel: 5,
            wtank: 3000,
            possibleBuildings: [0, 18],
        },
        31: {
            caption: 'Fire Helicopter',
            color: '#bb0000',
            coins: 25,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 1500,
            possibleBuildings: [23],
            schooling: {
                'Fire Station': {
                    'Airborne firefighting': {
                        all: true,
                    },
                },
            },
        },
        32: {
            caption: 'Bomber',
            color: '#bb0000',
            coins: 25,
            credits: 1_000_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 3200,
            possibleBuildings: [23],
            schooling: {
                'Fire Station': {
                    'Airborne firefighting': {
                        all: true,
                    },
                },
            },
        },
        33: {
            caption: 'Large Air Tanker',
            color: '#bb0000',
            coins: 25,
            credits: 1_500_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            wtank: 13_000,
            possibleBuildings: [23],
            schooling: {
                'Fire Station': {
                    'Airborne firefighting': {
                        all: true,
                    },
                },
            },
        },
        34: {
            caption: 'Riot Police SUV',
            color: '#105d36',
            coins: 10,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            possibleBuildings: [6, 19],
            special: 'May be replaced by TOG units.',
        },
        35: {
            caption: 'Riot Police Group Vehicle',
            color: '#105d36',
            coins: 10,
            credits: 15_000,
            minPersonnel: 1,
            maxPersonnel: 8,
            possibleBuildings: [6, 19],
            special: 'May be replaced by TOG units.',
        },
        36: {
            caption: 'Riot Police Equipment Vehicles',
            color: '#105d36',
            coins: 15,
            credits: 35_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    'Riot Police Equipment Training': {
                        all: true,
                    },
                },
            },
        },
        37: {
            caption: 'Senior Sergeant',
            color: '#105d36',
            coins: 15,
            credits: 35_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            possibleBuildings: [6, 19],
            schooling: {
                Police: {
                    'Senior Sergeant': {
                        min: 1,
                    },
                },
            },
        },
    },
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18, 23],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        'SES': {
            buildings: [15],
            color: '#0000ff',
        },
        'Other': {
            buildings: [7, 14, 21, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Fire Vehicles': {
            vehicles: {
                'Fire Trucks': [0, 1, 12, 13, 19, 30],
                'Bush-Fire Units': [28, 29, 31, 32, 33],
                'Special Vehicles': [2, 3, 4, 6, 7, 10, 11],
            },
            color: '#ff2d2d',
        },
        'Ambulance Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'Intensive Care Vehicles': [9, 24, 25],
                'Other Ambulance Vehicles': [23, 26, 27],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Cars': [8, 17],
                'TOG': [15, 18],
                'Police Helicopter': [14],
                'K-9 Unit': [16],
                'Mounted': [22],
                'RIOT Units': [34, 35, 36],
                'Senior Sergeant': [37],
            },
            color: '#00ac00',
        },
        'SES': {
            vehicles: {
                SES: [20, 21],
            },
            color: '#02a18c',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    schoolings: {
        'Fire Station': [
            {
                caption: 'HAZMAT Course',
                duration: '3 Days',
                staffList: 'HazMat Unit',
            },
            {
                caption: 'Mobile command',
                duration: '5 Days',
                staffList: 'Mobile command',
            },
            {
                caption: 'ARFF-Training',
                duration: '3 Days',
            },
            {
                caption: 'SES Water Rescue',
                duration: '4 Days',
                staffList: 'SES Water Rescue',
            },
            {
                caption: 'Ocean Navigation',
                duration: '5 Days',
            },
            {
                caption: 'Airborne firefighting',
                duration: '5 Days',
                staffList: 'Airborne firefighting',
            },
            {
                caption: 'Intensive Care Education',
                duration: '5 Days',
                staffList: 'Intensive Care Paramedic',
            },
        ],
        'Police': [
            {
                caption: 'Police Air Wing',
                duration: '7 Days',
                staffList: 'Police Air Wing',
            },
            {
                caption: 'TOG',
                duration: '5 Days',
                staffList: 'TOG',
            },
            {
                caption: 'K-9',
                duration: '5 Days',
                staffList: 'K-9',
            },
            {
                caption: 'Police Motorcycle',
                duration: '3 Days',
                staffList: 'Motor Officer',
            },
            {
                caption: 'Mounted Police Training',
                duration: '3 Days',
                staffList: 'Mounted Police Training',
            },
            {
                caption: 'Riot Police Equipment Training',
                duration: '5 Days',
                staffList: 'Riot Police Equipment Training',
            },
            {
                caption: 'Senior Sergeant',
                duration: '5 Days',
                staffList: 'Senior Sergeant',
            },
        ],
        'Rescue': [
            {
                caption: 'Intensive Care Education',
                duration: '5 Days',
                staffList: 'Intensive Care Paramedic',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    coins: 'Coins',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Gas station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Discotheque',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Station',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Intersection with lights',
        'Carpentry Workshop',
        'Restaurant',
        'City Centre',
        'Hill',
        'Pier',
        'Playground',
        'Dirt Race Track',
        'Sheltered housing facility',
        'Field',
        'Heathland',
        'Moorland',
        'Cabin',
        'Campsite',
        'Cliff',
        'Sawmill',
        'Mine',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [],
    ranks: {
        missionchief: {
            0: 'Probie',
            200: 'Firefighter',
            10_000: 'Senior Firefighter',
            100_000: 'Fire Apparatus Operator',
            1_000_000: 'Lieutenant',
            5_000_000: 'Captain',
            20_000_000: 'Staff Captain',
            50_000_000: 'Battalion Chief',
            1_000_000_000: 'Division Chief',
            2_000_000_000: 'Deputy Chief',
            5_000_000_000: 'Fire Chief',
        },
        policechief: {
            0: 'Probationary Constable',
            200: 'Constable',
            10_000: 'Senior Constable',
            100_000: 'Leading Senior Constable',
            1_000_000: 'Sergeant',
            5_000_000: 'Senior Sergeant',
            20_000_000: 'Inspector',
            50_000_000: 'Superintendent',
            1_000_000_000: 'Assistant Commissioner',
            2_000_000_000: 'Deputy Commissioner',
            5_000_000_000: 'Commissioner',
        },
    },
};
