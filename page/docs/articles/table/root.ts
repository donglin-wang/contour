import { tags } from "/lib/tags";
import { constructTable } from "/page/docs/articles/table/component";
import { patients, complexPatientSpec, patientSepc } from "./data";
import {
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    ComponentPanel,
    ComponentDisplay,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import defaultStyle from "/style/variant/table/default.css?inline";
import rowBorderedStyle from "/style/variant/table/rowBordered.css?inline";
import columnBorderedStyle from "/style/variant/table/columnBordered.css?inline";
import rowStickyStyle from "/style/variant/table/rowSticky.css?inline";
import columnStickyStyle from "/style/variant/table/columnSticky.css?inline";
import { nestedStyle } from "/page/docs/articles/table/css";

const { div } = tags;

const TableContainer = (...children: Element[]) =>
    div(
        {
            class: "container",
            "data-for": "table-framing",
        },
        ...children,
    );

const tables: Record<
    string,
    { element: HTMLElement; style: string; title?: string }
> = {
    defaultTable: {
        element: constructTable(
            patientSepc,
            patients,
            "default",
            "default-header",
            "default-body",
        ),
        style: defaultStyle,
    },
    rowBordered: {
        element: constructTable(
            patientSepc,
            patients,
            "row-bordered",
            "row-bordered-header",
            "row-bordered-body",
        ),
        style: rowBorderedStyle,
        title: "Row border",
    },
    columnBordered: {
        element: constructTable(
            patientSepc,
            patients,
            "column-bordered",
            "column-bordered-header",
            "column-bordered-body",
        ),
        style: columnBorderedStyle,
        title: "Column border",
    },
    rowSticky: {
        element: constructTable(
            patientSepc,
            patients,
            "row-sticky",
            "row-sticky-header",
            "row-sticky-body",
        ),
        style: rowStickyStyle,
        title: "Sticky row",
    },
    columnSticky: {
        element: constructTable(
            patientSepc,
            patients,
            "column-sticky",
            "column-sticky-header",
            "column-sticky-body",
        ),
        style: columnStickyStyle,
        title: "Sticky column",
    },
    nestedHeader: {
        element: constructTable(
            complexPatientSpec,
            patients,
            "nested",
            "nested-header",
            "nested-body",
        ),
        style: nestedStyle,
        title: "Nested header",
    },
};

const panel = (key: string) =>
    ComponentPanel({
        display: ComponentDisplay(
            TableContainer(tables[key].element),
            "display-main-table"
        ),
        sources: {
            HTML: HTMLCodeBlock(tables[key].element),
            CSS: CSSCodeBlock(tables[key].style),
        },
    });

export default [
    H1("Table"),
    Subheading(
        "A CSS grid-based table for displaying structured data with support for sticky headers, bordered layouts, and nested columns."
    ),
    H2("Base style"),
    P(
        "The base table is a CSS grid with overflow scrolling. Rows and sections use display: contents so cells participate directly in the grid. Each cell is a flex container with padding."
    ),
    Ul(
        Li(
            "Every variant must set grid-template-columns on the table to match the number of data columns. The base pattern does not define a column count."
        ),
        Li(
            "Avoid using this pattern for simple key-value pairs or narrow layouts where a list or a card would be more appropriate."
        )
    ),
    panel("defaultTable"),
    H2("Row border"),
    P(
        "Adds a horizontal border beneath each row, with the last row's border removed."
    ),
    panel("rowBordered"),
    H2("Column border"),
    P(
        "Adds a vertical border between each column, with the last column's border removed."
    ),
    panel("columnBordered"),
    H2("Sticky row"),
    P(
        "Pins the header row to the top of the scrollable area so column labels remain visible while scrolling vertically."
    ),
    panel("rowSticky"),
    H2("Sticky column"),
    P(
        "Pins the first column to the inline-start edge so row identifiers remain visible while scrolling horizontally."
    ),
    panel("columnSticky"),
    H2("Nested header"),
    P(
        "Supports multi-level column headers that span across child columns. Combines column borders and row borders with dynamically generated grid-column spans."
    ),
    panel("nestedHeader"),
];
