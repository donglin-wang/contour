import { constructTable } from "/page/docs/articles/table/component";
import { patients, complexPatientSpec, patientSepc } from "./data";
import {
    H1,
    H2,
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
import nestedStyle from "/page/docs/articles/table/style/nested";

const defaultTable = constructTable(
    patientSepc,
    patients,
    "default",
    "default-header",
    "default-body"
);

const rowBordered = constructTable(
    patientSepc,
    patients,
    "row-bordered",
    "row-bordered-header",
    "row-bordered-body"
);

const columnBordered = constructTable(
    patientSepc,
    patients,
    "column-bordered",
    "column-bordered-header",
    "column-bordered-body"
);

const rowSticky = constructTable(
    patientSepc,
    patients,
    "row-sticky",
    "row-sticky-header",
    "row-sticky-body"
);

const columnSticky = constructTable(
    patientSepc,
    patients,
    "column-sticky",
    "column-sticky-header",
    "column-sticky-body"
);

const nestedHeader = constructTable(
    complexPatientSpec,
    patients,
    "nested",
    "nested-header",
    "nested-body"
);

export default [
    H1("Table"),
    ComponentPanel({
        display: ComponentDisplay(defaultTable, "component-display-table"),
        sources: {
            HTML: HTMLCodeBlock(defaultTable),
            CSS: CSSCodeBlock(defaultStyle),
        },
    }),
    H2("Row border"),
    ComponentPanel({
        display: ComponentDisplay(rowBordered, "component-display-table"),
        sources: {
            HTML: HTMLCodeBlock(rowBordered),
            CSS: CSSCodeBlock(rowBorderedStyle),
        },
    }),
    H2("Column border"),
    ComponentPanel({
        display: ComponentDisplay(columnBordered, "component-display-table"),
        sources: {
            HTML: HTMLCodeBlock(columnBordered),
            CSS: CSSCodeBlock(columnBorderedStyle),
        },
    }),
    H2("Sticky row"),
    ComponentPanel({
        display: ComponentDisplay(rowSticky, "component-display-table"),
        sources: {
            HTML: HTMLCodeBlock(rowSticky),
            CSS: CSSCodeBlock(rowStickyStyle),
        },
    }),
    H2("Sticky column"),
    ComponentPanel({
        display: ComponentDisplay(columnSticky, "component-display-table"),
        sources: {
            HTML: HTMLCodeBlock(columnSticky),
            CSS: CSSCodeBlock(columnStickyStyle),
        },
    }),
    H2("Nested header"),
    ComponentPanel({
        display: ComponentDisplay(nestedHeader, "component-display-table"),
        sources: {
            HTML: HTMLCodeBlock(nestedHeader),
            CSS: CSSCodeBlock(nestedStyle),
        },
    }),
];
