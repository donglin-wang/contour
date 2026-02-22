import { tags } from "/lib/tags";

import type {
    ColumnSpec,
    TableData,
    TableSpec,
} from "/page/docs/articles/table/data";

type HeaderDimension = ColumnSpec & {
    isLeaf?: boolean;
    width?: number;
    height?: number;
    depth?: number;
    children?: HeaderDimension[];
};

const { table, th, thead, td, tbody, tr } = tags;

const populateHeaderWidthDepth = (
    node: HeaderDimension,
    depth: number,
): [number, HeaderDimension[]] => {
    node.depth = depth;

    if (!node.children || node.children.length === 0) {
        node.isLeaf = true;
        node.width = 1;
        return [depth, [node]];
    }

    const leaves = [];
    let maxDepth = 0;
    node.width = 0;
    for (const child of node.children) {
        const [childDepth, childLeaves] = populateHeaderWidthDepth(
            child,
            depth + 1,
        );
        leaves.push(...childLeaves);
        maxDepth = Math.max(childDepth, maxDepth);
        node.width += child.width ?? 0;
        node.height = 1;
    }

    return [maxDepth, leaves];
};

export const calculateHeaderDimensions = (tableSpec: TableSpec) => {
    const clone: HeaderDimension[] = structuredClone(tableSpec);

    const dummyRoot: HeaderDimension = {
        label: "",
        children: clone,
    };

    const [maxDepth, leaves] = populateHeaderWidthDepth(dummyRoot, 0);

    for (const leaf of leaves) {
        leaf.height = maxDepth - (leaf.depth ?? 0) + 1;
    }

    return clone;
};

const constructHeaderCellStyle = (
    variant: string,
    width: number,
    height: number,
) => /*css*/ `
.table__cell[data-variant="${variant}"] {
    grid-column: span ${width};
    grid-row: span ${height};
}`;

export const construcHeaderStyle = (
    dimensions: HeaderDimension[],
    variantPrefix: string,
) => {
    const nodes = [...dimensions];
    let style = "";
    while (nodes.length !== 0) {
        const node = nodes.shift();
        if (!node) continue;

        if (node.height === 1 && node.width === 1) {
            continue;
        }

        const variant = `${variantPrefix}-${
            node.variantSuffix ?? node.accessor ?? node.label
        }`;
        style += constructHeaderCellStyle(
            variant,
            node.width ?? 1,
            node.height ?? 1,
        );

        if (node.children && node.children.length !== 0) {
            nodes.push(...node.children);
        }
    }
    return style.trim();
};

export const construcTableHeader = (
    tableSpec: TableSpec,
    variantPrefix: string,
): { header: HTMLTableSectionElement; columns: ColumnSpec[] } => {
    const rows: Element[][] = [[]];
    const columns: ColumnSpec[] = [];
    const queue: (ColumnSpec & { depth: number })[] = tableSpec.map((spec) => ({
        ...spec,
        depth: 1,
    }));

    while (queue.length !== 0) {
        const info = queue.shift();
        if (!info) continue;

        if (info.depth - 1 >= rows.length) {
            rows.push([]);
        }

        if (info.children === undefined || info.children === null) {
            columns.push(info);
        }

        const variant = `${variantPrefix}-${
            info.variantSuffix ?? info.accessor ?? info.label
        }`;

        rows[info.depth - 1].push(
            th(
                {
                    class: "table__cell",
                    "data-variant": variant,
                },
                info.label,
            ),
        );

        if (info.children) {
            queue.push(
                ...info.children.map((child) => ({
                    ...child,
                    depth: info.depth + 1,
                })),
            );
        }
    }

    const header = thead(
        {
            class: "table__section",
            "data-variant": variantPrefix,
        },
        ...rows.map((row) =>
            tr(
                {
                    class: "table__row",
                    "data-variant": variantPrefix,
                },
                ...row,
            ),
        ),
    );

    return { header, columns };
};

export const constructTableBody = (
    columns: ColumnSpec[],
    data: TableData,
    variant: string,
) => {
    const bodyRows = [];
    for (const row of data) {
        const rowCells = [];
        for (const col of columns) {
            if (!col.accessor) {
                throw TypeError("Column spec does not have a 'accessor' field");
            }
            rowCells.push(
                td(
                    {
                        class: "table__cell",
                        "data-variant": variant,
                    },
                    row[col.accessor],
                ),
            );
        }
        bodyRows.push(
            tr(
                {
                    class: "table__row",
                    "data-variant": variant,
                },
                ...rowCells,
            ),
        );
    }

    return tbody(
        {
            class: "table__section",
            "data-variant": variant,
        },
        ...bodyRows,
    );
};

export const constructTable = (
    spec: TableSpec,
    data: TableData,
    tableVariant: string,
    headerVariantPrefix: string,
    bodyVariant: string,
) => {
    const sections = [];

    const { header, columns } = construcTableHeader(spec, headerVariantPrefix);

    sections.push(header);
    sections.push(constructTableBody(columns, data, bodyVariant));

    return table(
        {
            class: "table",
            "data-variant": tableVariant,
        },
        ...sections,
    );
};
