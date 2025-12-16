import van from "/js/van.js";

// Icons taken from Lucide https://lucide.dev

const { path, svg } = van.tags(
    "http://www.w3.org/2000/svg"
);

const getAttributes = (variant = "") => {
    return {
        class: "symbol",
        "data-variant": variant,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
    };
};

export const ArrowUp = (variant = "") =>
    svg(
        getAttributes(variant),
        path({ d: "m5 12 7-7 7 7" }),
        path({ d: "M12 19V5" })
    );

export const ArrowDown = (variant = "") =>
    svg(
        getAttributes(variant),
        path({ d: "M12 5v14" }),
        path({ d: "m19 12-7 7-7-7" })
    );

export const ChevronRight = (variant = "") =>
    svg(getAttributes(variant), path({ d: "m9 18 6-6-6-6" }));

export const Play = (variant = "") =>
    svg(
        getAttributes(variant),
        path({
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        })
    );

export const Braces = (variant = "") =>
    svg(
        getAttributes(variant),
        path({
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
        }),
        path({
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
        })
    );

export const X = (variant = "") =>
    svg(
        getAttributes(variant),
        path({ d: "M18 6 6 18" }),
        path({ d: "m6 6 12 12" })
    );

export const FileCode = (variant = "") =>
    svg(
       getAttributes(variant),
        path({
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        }),
        path({ d: "M14 2v5a1 1 0 0 0 1 1h5" }),
        path({ d: "M10 12.5 8 15l2 2.5" }),
        path({ d: "m14 12.5 2 2.5-2 2.5" })
    );
