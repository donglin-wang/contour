import van from "/js/van.js";

// Icons taken from Lucide https://lucide.dev

const { circle, rect, path, svg, line } = van.tags(
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
