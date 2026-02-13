import { tags } from "/lib/tags";
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

const articleElements = [H1("Table")];

Object.values(tables).forEach(({ element, style, title }) => {
    if (title) {
        articleElements.push(H2(title));
    }
    articleElements.push(
        ComponentPanel({
            display: ComponentDisplay(TableContainer(element), "display-main-table"),
            sources: {
                HTML: HTMLCodeBlock(element),
                CSS: CSSCodeBlock(style),
            },
        }),
    );
});

export default articleElements;
