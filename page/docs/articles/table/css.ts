import {
    calculateHeaderDimensions,
    construcHeaderStyle,
} from "/page/docs/articles/table/component";
import { complexPatientSpec } from "/page/docs/articles/table/data";
import columnBorderedStyle from "/style/variant/table/columnBordered.css?inline";
import columnStickyStyle from "/style/variant/table/columnSticky.css?inline";
import defaultStyle from "/style/variant/table/default.css?inline";
import rowBorderedStyle from "/style/variant/table/rowBordered.css?inline";
import rowStickyStyle from "/style/variant/table/rowSticky.css?inline";

const dimensions = calculateHeaderDimensions(complexPatientSpec);
const headerStyle = construcHeaderStyle(dimensions, "nested-header");

export const nestedStyle = /*css*/ `
@layer variant {
    .table[data-variant="nested"] {
        grid-template-columns: repeat(9, max-content);
    }

    .table__cell[data-variant^="nested"] {
        border-inline-end: var(--border-width-1) solid var(--border-color);
        border-block-end: var(--table-body-cell-horizontal-border, var(--border-width-1) solid var(--border-color));
    }

    /* Setting header row background & font weight */
    .table__cell[data-variant^="nested-header"] {
        background: var(--background-muted);
        font-weight: var(--font-bold);
    }

    /* Removing borders that are not necessary */
    .table__cell[data-variant^="nested"]:last-child {
        border-inline-end: none;
    }

    .table__row[data-variant="nested-body"]:last-child{
        --table-body-cell-horizontal-border: none;
    }

    /* Setting header cell spanning */
    ${headerStyle}
}`;

export default defaultStyle +
    nestedStyle +
    rowBorderedStyle +
    columnBorderedStyle +
    rowStickyStyle +
    columnStickyStyle;
