import van from "./van.js";
import { faker, fakerEN_CA } from "@faker-js/faker";

const {
    table,
    thead,
    tfoot,
    tr,
    tbody,
    th,
    td,
    input,
    div,
    button,
    "icon-chevron-down": iconChevronDown,
} = van.tags;

const tableSchema = {
    columns: [
        {
            key: "firstName",
            name: "First Name",
        },
        {
            key: "middleName",
            name: "Middle Name",
        },
        {
            key: "lastName",
            name: "Last Name",
        },
        {
            key: "phoneNumber",
            name: "Phone Number",
        },
        {
            key: "address",
            name: "Address",
        },
        {
            key: "province",
            name: "Province",
        }
    ],
};

const people = [];

for (let i = 0; i < 10; i++) {
    people.push({
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        province: fakerEN_CA.location.state(),
    });
}

const TableBody = () => {
    const tableRows = [];
    for (const person of people) {
        tableRows.push(
            tr(
                th(
                    { colspan: "1", style: "width: fit-content" },
                    iconChevronDown({
                        style: "position: absolute; left: -30px; cursor: pointer;",
                    }),
                    input({ type: "checkbox"})
                ),
                ...tableSchema.columns.map((col) => td(person[col.key]))
            )
        );
    }
    return tableRows;
};

const Table = () =>
    table(
        { class: "table table--notion", style: "margin-inline-start: 50px;" },
        thead(
            tr(
                th(input({ type: "checkbox" })),
                ...tableSchema.columns.map((col) => th({style: "width: max-content"}, col.name))
            )
        ),
        tbody(
            ...TableBody(),
            tr(
                td(
                    {
                        style: "background-color: var(--accent-muted);",
                        colspan: tableSchema.columns.length + 1,
                    },
                    table(
                        {
                            class: "table table--notion",
                            style: "width: 100%; background-color: white;",
                        },
                        thead(
                            tr(
                                th(input({ type: "checkbox" })),
                                th("Header 1"),
                                th("Header 2"),
                                th("Header 3")
                            )
                        ),
                        tbody(
                            tr(
                                th(
                                    { colspan: "1" },
                                    input({ type: "checkbox" })
                                ),
                                th("Row head"),
                                td("Content"),
                                td("content")
                            )
                        )
                    ),
                    div(
                        {
                            style: "margin-block-start: 1rem; margin-inline: auto; display: flex; justify-content: center; gap: 0.25rem;",
                        },
                        button("1"),
                        button("2")
                    )
                )
            )
        )
    );

const TableContainer = () =>
    div(
        {
            style: "display: flex; max-width: 40rem; margin-inline: auto; overflow-x: auto; padding-block: 2rem;",
        },
        Table()
    );

van.add(document.getElementById("table"), TableContainer);
