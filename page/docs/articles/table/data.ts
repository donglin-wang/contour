import type { Attributes, Primitive } from "/lib/tags";

export type TableSpec = ColumnSpec[];

export type ColumnSpec = {
    label: string;
    accessor?: string;
    children?: ColumnSpec[];
    variantSuffix?: string;
};

export type TableData = Record<string, Primitive>[];

export type TableArraySpec = {
    index: number;
    label: string;
}[];

export type TableArrayData = Primitive[][];

export const complexPatientSpec: TableSpec = [
    {
        label: "ID",
        accessor: "id",
    },
    {
        label: "Name",
        variantSuffix: "name",
        children: [
            {
                label: "First",
                accessor: "first_name",
                variantSuffix: "first-name",
            },
            {
                label: "Middle",
                accessor: "middle_name",
                variantSuffix: "middle-name",
            },
            {
                label: "Last",
                accessor: "last_name",
                variantSuffix: "last-name",
            },
        ],
    },
    {
        label: "Info",
        variantSuffix: "info",
        children: [
            {
                label: "Age",
                accessor: "age",
            },
            {
                label: "Gender",
                accessor: "gender",
            },
            {
                label: "Marital status",
                accessor: "marital_status",
                variantSuffix: "marital-status",
            },
            {
                label: "History",
                variantSuffix: "history",
                children: [
                    {
                        label: "Visits",
                        accessor: "visits",
                    },
                    {
                        label: "Progress",
                        accessor: "progress",
                    },
                ],
            },
        ],
    },
];

export const patientSepc: TableSpec = [
    {
        label: "ID",
        accessor: "id",
    },
    {
        label: "First",
        accessor: "first_name",
    },
    {
        label: "Middle",
        accessor: "middle_name",
    },
    {
        label: "Last",
        accessor: "last_name",
    },

    {
        label: "Age",
        accessor: "age",
    },
    {
        label: "Gender",
        accessor: "gender",
    },
    {
        label: "Marital status",
        accessor: "marital_status",
    },
    {
        label: "Visits",
        accessor: "visits",
    },
    {
        label: "Progress",
        accessor: "progress",
    },
];

export const patients: TableData = [
    {
        id: 1,
        first_name: "John",
        middle_name: "Michael",
        last_name: "Smith",
        age: 45,
        gender: "Male",
        marital_status: "Married",
        visits: 8,
        progress: 75,
    },
    {
        id: 2,
        first_name: "Sarah",
        middle_name: "Elizabeth",
        last_name: "Johnson",
        age: 32,
        gender: "Female",
        marital_status: "Single",
        visits: 3,
        progress: 40,
    },
    {
        id: 3,
        first_name: "Robert",
        middle_name: "James",
        last_name: "Williams",
        age: 58,
        gender: "Male",
        marital_status: "Married",
        visits: 12,
        progress: 90,
    },
    {
        id: 4,
        first_name: "Maria",
        middle_name: "Grace",
        last_name: "Garcia",
        age: 41,
        gender: "Female",
        marital_status: "Divorced",
        visits: 6,
        progress: 65,
    },
    {
        id: 5,
        first_name: "David",
        middle_name: "Allen",
        last_name: "Brown",
        age: 29,
        gender: "Male",
        marital_status: "Single",
        visits: 2,
        progress: 25,
    },
    {
        id: 6,
        first_name: "Jennifer",
        middle_name: "Marie",
        last_name: "Davis",
        age: 52,
        gender: "Female",
        marital_status: "Married",
        visits: 15,
        progress: 85,
    },
    {
        id: 7,
        first_name: "Michael",
        middle_name: "Thomas",
        last_name: "Rodriguez",
        age: 37,
        gender: "Male",
        marital_status: "Married",
        visits: 5,
        progress: 55,
    },
    {
        id: 8,
        first_name: "Lisa",
        middle_name: "Ann",
        last_name: "Martinez",
        age: 44,
        gender: "Female",
        marital_status: "Widowed",
        visits: 9,
        progress: 70,
    },
    {
        id: 9,
        first_name: "William",
        middle_name: "Charles",
        last_name: "Hernandez",
        age: 61,
        gender: "Male",
        marital_status: "Married",
        visits: 18,
        progress: 95,
    },
    {
        id: 10,
        first_name: "Patricia",
        middle_name: "Rose",
        last_name: "Lopez",
        age: 35,
        gender: "Female",
        marital_status: "Single",
        visits: 4,
        progress: 50,
    },
];
