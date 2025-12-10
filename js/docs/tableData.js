export const userProfileSpec = [
    { index: 0, label: "ID", children: [] },
    { index: 1, label: "Active", children: [] },
    { index: 2, label: "Age", children: [] },
    { index: 3, label: "Name", children: [] },
    { index: 4, label: "Eye Color", children: [] },
    { index: 5, label: "Gender", children: [] },
    { index: 6, label: "Company", children: [] },
    { index: 7, label: "Email", children: [] },
    { index: 8, label: "Phone Number", children: [] },
];

export const userProfiles = [
    [
        "66e1e86577475ecb479d80a3",
        true,
        34,
        "Mendoza Miles",
        "brown",
        "male",
        "DARWINIUM",
        "mendozamiles@darwinium.com",
        "+1 (860) 517-3454",
    ],
    [
        "66e1e865f4b1fc096ef2b059",
        false,
        38,
        "Annabelle Nguyen",
        "green",
        "female",
        "TETAK",
        "annabellenguyen@tetak.com",
        "+1 (887) 428-3260",
    ],
    [
        "66e1e865e334fd50fc7c5037",
        true,
        32,
        "Turner Osborne",
        "brown",
        "male",
        "QUOTEZART",
        "turnerosborne@quotezart.com",
        "+1 (908) 487-3598",
    ],
    [
        "66e1e86582a28996691f6f29",
        false,
        29,
        "Nanette Nixon",
        "brown",
        "female",
        "EQUITOX",
        "nanettenixon@equitox.com",
        "+1 (941) 564-2072",
    ],
    [
        "66e1e86556edba471653ad1a",
        false,
        24,
        "Santiago Mitchell",
        "green",
        "male",
        "VERTON",
        "santiagomitchell@verton.com",
        "+1 (815) 569-2443",
    ],
    [
        "66e1e86587e3b8c9cdd20d07",
        true,
        28,
        "Hines Pacheco",
        "green",
        "male",
        "TELLIFLY",
        "hinespacheco@tellifly.com",
        "+1 (991) 597-2328",
    ],
    [
        "66e1e86566c3aae7b4666be3",
        true,
        32,
        "Gonzales Carver",
        "blue",
        "male",
        "GEEKOLOGY",
        "gonzalescarver@geekology.com",
        "+1 (820) 493-2616",
    ],
    [
        "66e1e865862714311390a846",
        true,
        26,
        "Haley Stanton",
        "green",
        "male",
        "XTH",
        "haleystanton@xth.com",
        "+1 (945) 460-2987",
    ],
    [
        "66e1e8650c93be3f4a0148e8",
        false,
        33,
        "Hancock Logan",
        "green",
        "male",
        "EDECINE",
        "hancocklogan@edecine.com",
        "+1 (913) 462-2406",
    ],
    [
        "66e1e8654c842facf540e53b",
        true,
        27,
        "Bonner Fitzpatrick",
        "green",
        "male",
        "ISOTRACK",
        "bonnerfitzpatrick@isotrack.com",
        "+1 (989) 508-2122",
    ],
];

export const patientHeaderSpec = [
    {
        label: "ID",
    },
    {
        label: "Name",
        children: [
            {
                label: "First",
            },
            {
                label: "Middle",
            },
            {
                label: "Last",
            },
        ],
    },
    {
        label: "Info",
        children: [
            {
                label: "Age",
            },
            {
                label: "Gender",
            },
            {
                label: "Marital status",
            },
            {
                label: "History",
                children: [
                    {
                        label: "Visits",
                    },
                    {
                        label: "Progress",
                    },
                ],
            },
        ],
    },
];

export const patients = [
    [1, "John", "Michael", "Smith", 45, "Male", "Married", 8, 75],
    [2, "Sarah", "Elizabeth", "Johnson", 32, "Female", "Single", 3, 40],
    [3, "Robert", "James", "Williams", 58, "Male", "Married", 12, 90],
    [4, "Maria", "Grace", "Garcia", 41, "Female", "Divorced", 6, 65],
    [5, "David", "Allen", "Brown", 29, "Male", "Single", 2, 25],
    [6, "Jennifer", "Marie", "Davis", 52, "Female", "Married", 15, 85],
    [7, "Michael", "Thomas", "Rodriguez", 37, "Male", "Married", 5, 55],
    [8, "Lisa", "Ann", "Martinez", 44, "Female", "Widowed", 9, 70],
    [9, "William", "Charles", "Hernandez", 61, "Male", "Married", 18, 95],
    [10, "Patricia", "Rose", "Lopez", 35, "Female", "Single", 4, 50],
];
