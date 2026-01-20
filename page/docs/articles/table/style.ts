import { complexPatientSpec } from "/page/docs/articles/table/data";
import {
    construcHeaderStyle,
    calculateHeaderDimensions,
} from "/page/docs/articles/table/component";

import defaultStyle from "/style/variant/table/default.css?inline";
import rowBorderedStyle from "/style/variant/table/rowBordered.css?inline";
import columnBorderedStyle from "/style/variant/table/columnBordered.css?inline";
import rowStickyStyle from "/style/variant/table/rowSticky.css?inline";
import columnStickyStyle from "/style/variant/table/columnSticky.css?inline";

const dimensions = calculateHeaderDimensions(complexPatientSpec);
const headerStyle = construcHeaderStyle(dimensions, "nested-header");

export const nestedStyle = /*css*/ `
@layer variant {
    .table[data-variant="nested"] {
        grid-template-columns: repeat(9, max-content);
    }

    .table__cell[data-variant^="nested"] {
        border-inline-end: 1px solid var(--background-color-3);
        border-block-end: var(--table-body-cell-horizontal-border, 1px solid var(--background-color-3));
    }

    /* Setting header row background & font weight */
    .table__cell[data-variant^="nested-header"] {
        background: var(--background-color-2);
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
