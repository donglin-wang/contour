import van from "/js/van.js";
import { highlightAll } from "/js/shj.js";
import {
    Article,
    H1,
    H2,
    P,
    Ul,
    Li,
    CodeInline,
    Section,
    registerStyle,
} from "/js/article.js";
import { highlightHTML, highlightCSS } from "/js/highlight.js";
import {
    userProfiles,
    userProfileSpec,
    patientHeaderSpec,
    patients,
} from "/js/docs/tableData.js";

const { table, tr, td, th, thead, tbody } = van.tags;

console.log(userProfiles.length);

/**
 * @typedef HeaderSpec
 * @property {number} index
 * @property {string} label
 * @property {number | undefined} depth
 * @property {number | undefined} width
 * @property {boolean | undefined} isLeaf
 * @property {HeaderSpec[] | undefined} children
 */

/**
 * @param {HeaderSpec} headerSpec
 * @param {number} depth
 * @returns {number}
 */
const setTreeNodeinfo = (headerSpec, depth) => {
    headerSpec.depth = depth;

    if (!headerSpec.children || headerSpec.children.length === 0) {
        headerSpec.width = 1;
        headerSpec.isLeaf = true;
        return depth;
    }

    let maxDepth = 0;
    headerSpec.width = 0;
    for (const child of headerSpec.children) {
        maxDepth = Math.max(setTreeNodeinfo(child, depth + 1), maxDepth);
        headerSpec.width += child.width;
    }

    return maxDepth;
};

/**
 * @param {string} label
 * @returns {string}
 */
const labelToSuffix = (label) => {
    const tokens = label.split(" ");
    const newTokens = [];
    for (const token of tokens) {
        newTokens.push(token.toLowerCase());
    }
    return newTokens.join("-");
};

/**
 * @param {string} block
 * @param {number} numChar
 * @returns {string}
 */
const truncateLines = (block, numChar) => {
    const lines = [];
    for (const line of block.split("\n")) {
        lines.push(line.slice(numChar));
    }

    return lines.join("\n");
};

/**
 * @param {HeaderSpec[]} headerSpecs
 * @param {string} variant
 * @returns {[HTMLElement, string]}
 */
const construcTableHeader = (headerSpecs, variantPrefix) => {
    const dummyRoot = {
        label: "",
        children: headerSpecs,
    };

    const maxDepth = setTreeNodeinfo(dummyRoot, 0);
    const rows = [];
    let styleRules = "";
    for (let i = 0; i < maxDepth; i++) {
        rows.push([]);
    }

    const queue = headerSpecs;
    let prevDepth = 1;
    let levelCounter = 1;
    while (queue.length != 0) {
        const spec = queue.shift();
        if (spec.depth !== prevDepth) {
            prevDepth = spec.depth;
            levelCounter = 1;
        }

        const height = spec.isLeaf ? maxDepth - spec.depth + 1 : 1;
        const variant = `${variantPrefix}-header-${labelToSuffix(spec.label)}`;
        rows[spec.depth - 1].push(
            th(
                {
                    class: "table__cell",
                    "data-variant": variant,
                },
                spec.label
            )
        );

        styleRules += truncateLines(
            /*css*/ `
            .table__cell[data-variant="${variant}"] {
                grid-column: span ${spec.width};
                grid-row: span ${height};
            }
        `,
            8
        );

        if (spec.children) {
            queue.push(...spec.children);
        }

        levelCounter += 1;
    }

    const header = thead(
        {
            class: "table__section",
            "data-variant": `${variantPrefix}-header`,
        },
        ...rows.map((row) =>
            tr(
                {
                    class: "table__row",
                    "data-variant": `${variantPrefix}-header`,
                },
                ...row
            )
        )
    );

    return [header, styleRules];
};

/**
 * @param {[{label: string}]} spec
 * @param {[[string]]} data
 * @param {string} bodyVariant
 * @param {string} headerVariant
 */
const constructTable = (
    spec,
    data,
    tableVariant,
    headerVariant,
    bodyVariant
) => {
    const sections = [];
    const headerRows = [];
    const bodyRows = [];

    for (const columnSpec of spec) {
        headerRows.push(
            th(
                {
                    class: "table__cell",
                    "data-variant": headerVariant,
                },
                columnSpec.label
            )
        );
    }

    sections.push(
        thead(
            {
                class: "table__section",
                "data-variant": headerVariant,
            },
            ...headerRows
        )
    );

    for (const row of data) {
        const rowCells = [];
        for (const cell of row) {
            rowCells.push(
                td(
                    {
                        class: "table__cell",
                        "data-variant": bodyVariant,
                    },
                    cell
                )
            );
        }
        bodyRows.push(
            tr(
                {
                    class: "table__row",
                    "data-variant": bodyVariant,
                },
                ...rowCells
            )
        );
    }

    sections.push(
        tbody(
            {
                class: "table__section",
                "data-variant": bodyVariant,
            },
            ...bodyRows
        )
    );

    return table(
        {
            class: "table",
            "data-variant": tableVariant,
        },
        ...sections
    );
};

const [header, rules] = construcTableHeader(patientHeaderSpec, "nested");
const nestedStyle = registerStyle(/*css*/ `
@layer variant {
    .table[data-variant="nested"] {
        --table-cell-padding-inline: var(--space-2);
        --table-cell-padding-block: var(--space-3);
        --table-cell-line-height: 1rem;
        --table-cell-border-inline-end: 1px solid var(--background-color-3);
        --table-cell-border-block-end: 1px solid var(--background-color-3);

        grid-template-columns:
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content;

        max-width: 100%;
        max-height: 30rem;
        overflow: auto;
    }

    /* Setting header row background & font weight */
    .table__section[data-variant="nested-header"] {
        --table-cell-background: var(--background-color-2);
        --table-cell-font-weight: var(--font-bold);
    }

    /* Removing borders that are not necessary */
    .table__cell[data-variant^="nested-header"]:last-child,
    .table__cell[data-variant="nested-body"]:last-child {
        border-inline-end: none;
    }

    .table__row[data-variant="nested-body"]:last-child {
        --table-cell-border-block-end: none;
    }

    /* Setting header cell spanning */
    ${rules}
}`);



const NestedTableBody = () => {
    const rows = [];
    for (const patientInfos of patients) {
        rows.push(
            patientInfos.map((info) =>
                td(
                    {
                        class: "table__cell",
                        "data-variant": "nested-body",
                    },
                    info
                )
            )
        );
    }
    return tbody(
        {
            class: "table__section",
            "data-variant": "nested-body",
        },
        ...rows.map((row) =>
            tr(
                {
                    class: "table__row",
                    "data-variant": "nested-body",
                },
                ...row
            )
        )
    );
};

const nestedTable = table(
    {
        class: "table",
        "data-variant": "nested",
    },
    header,
    NestedTableBody(),
);

const userProfileStyle = registerStyle(/*css*/ `
@layer variant {
    .table[data-variant="vanilla"] {
        --table-cell-padding-inline: var(--space-2);
        --table-cell-padding-block: var(--space-3);
        --table-cell-line-height: 1rem;

        grid-template-columns:
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content;

        max-width: 100%;
        max-height: 15rem;
        overflow: auto;
    }

    /* Setting header row background & font weight */
    .table__section[data-variant="vanilla-header"] {
        --table-cell-background: var(--background-color-2);
        --table-cell-font-weight: var(--font-bold);
    }
}`);

const userProfileTable = constructTable(
    userProfileSpec,
    userProfiles,
    "vanilla",
    "vanilla-header",
    "vanilla-body"
);

const borderedStyle = registerStyle(/*css*/ `
@layer variant {
    .table[data-variant="bordered"] {
        --table-cell-padding-inline: var(--space-2);
        --table-cell-padding-block: var(--space-3);
        --table-cell-line-height: 1rem;

        /* Setting borders for all cells first*/
        --table-border-width: 1px;
        --table-cell-border-block-end: var(--table-border-width)
            solid var(--background-color-3);
        --table-cell-border-inline-end: var(--table-border-width)
            solid var(--background-color-3);

        grid-template-columns:
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content;

        max-width: 100%;
        max-height: 15rem;
        overflow: auto;
    }

    /* Setting header row background & font weight */
    .table__section[data-variant="bordered-header"] {
        --table-cell-background: var(--background-color-2);
        --table-cell-font-weight: var(--font-bold);
    }

    /* Removing borders that are not necessary */
    .table__cell[data-variant="bordered-header"]:last-child,
    .table__cell[data-variant="bordered-body"]:last-child {
        border-inline-end: none;
    }

    .table__row[data-variant="bordered-body"]:last-child {
        --table-cell-border-block-end: none;
    }
}`);

const borderedTable = constructTable(
    userProfileSpec,
    userProfiles,
    "bordered",
    "bordered-header",
    "bordered-body"
);

const stickyStyle = registerStyle(/*css*/ `
@layer variant {
    .table[data-variant="sticky"] {
        --table-cell-padding-inline: var(--space-2);
        --table-cell-padding-block: var(--space-3);
        --table-cell-line-height: 1rem;

        /* Make cell background not transparent */
        --table-cell-background: white;

        grid-template-columns:
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content
            max-content;

        max-width: 100%;
        max-height: 15rem;
        overflow: auto;
    }

    /* Setting header row background & font weight */
    .table__section[data-variant="sticky-header"] {
        --table-cell-background: var(--background-color-2);
        --table-cell-font-weight: var(--font-bold);
    }

    /* Set up sticky header row */
    .table__cell[data-variant="sticky-header"] {
        position: sticky;
        inset-block-start: 0;
    }

    /* Set up sticky column */
    .table__cell[data-variant="sticky-body"]:first-child,
    .table__cell[data-variant="sticky-header"]:first-child {
        position: sticky;
        inset-inline-start: 0;
    }

    .table__cell[data-variant="sticky-header"]:first-child {
        z-index: 10;
    }
}`);

const stickyTable = constructTable(
    userProfileSpec,
    userProfiles,
    "sticky",
    "sticky-header",
    "sticky-body"
);

const article = Article(
    H1("Table"),
    P(
        `
        Table can only be used on the `,
        CodeInline("<table>"),
        ` element. Contour uses CSS grid to style tables instead of using the 
        default table layout. This means that elements between table cells and 
        the table root element such as `,
        CodeInline("<tbody>"),
        `, `,
        CodeInline("<thead>"),
        `, `,
        CodeInline("<tfoot>"),
        `, and `,
        CodeInline("<tr>"),
        ` are ignored by setting `,
        CodeInline("display: contents"),
        `. Table consists of the following elements: `
    ),
    Ul(
        Li(
            CodeInline("table__section"),
            ` used on table-sectioning elements such as `,
            CodeInline("<thead>"),
            `, `,
            CodeInline("<tbody>"),
            `, and `,
            CodeInline("<tfoot>"),
            `. It does not generate a DOM box itself and is merely used as a 
            selector for propagating variables`
        ),
        Li(
            CodeInline("table__row"),
            ` to be used on every `,
            CodeInline("<tr>"),
            ` element. Like `,
            CodeInline("table__section"),
            ` it does not generate DOM box and is merely a vessel for its 
            children`
        )
    ),
    H2("Vanilla"),
    P(`
        Below is a vanilla table with the only modification being table header
        border and scrolling.
    `),
    Section(userProfileTable),
    highlightHTML(userProfileTable),
    highlightCSS(userProfileStyle),
    H2("Inner border"),
    P(`
        Typically, adding inner borders to tables involves nested and convoluted
        selectors. However, with the varianbles defined by Contour, setting 
        table inner border becomes easy:    
    `),
    Section(borderedTable),
    P(`
        The structure of the HTML remains the same as above. The only change was
        replacing "vanilla" with "bordered" in the class name prefix.
    `),
    highlightCSS(borderedStyle),
    H2("Sticky row and column"),
    P(`
        You can add sticky row and column to your table: 
    `),
    Section(stickyTable),
    highlightCSS(stickyStyle),
    H2("Complex header"),
    P(`
        You can form complex headers with the power of CSS grid.
    `),
    nestedTable,
    highlightCSS(nestedStyle)
);

van.add(document.body, article);
highlightAll({
    hideLineNumbers: true,
});
