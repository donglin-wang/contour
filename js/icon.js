import van from "/js/van.js";

// Icons taken from Lucide https://lucide.dev

const { circle, rect, path, svg, line } = van.tags(
    "http://www.w3.org/2000/svg"
);

export const createPanelLeftOpen = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            class: "icon",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        rect({ width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        path({ d: "M9 3v18" }),
        path({ d: "m14 9 3 3-3 3" })
    );

export const createPanelLeftClose = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            class: "icon",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        rect({ width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        path({ d: "M9 3v18" }),
        path({ d: "m16 15-3-3 3-3" })
    );

export const createAlarm = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            class: "icon",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        circle({ cx: "12", cy: "13", r: "8" }),
        path({ d: "M12 9v4l2 2" }),
        path({ d: "M5 3 2 6" }),
        path({ d: "m22 6-3-3" }),
        path({ d: "M6.38 18.7 4 21" }),
        path({ d: "M17.64 18.67 20 21" })
    );

export const createChevronRight = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            class: "icon",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        path({ d: "m9 18 6-6-6-6" })
    );

export const createGitPullRequest = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        circle({ cx: "18", cy: "18", r: "3" }),
        circle({ cx: "6", cy: "6", r: "3" }),
        path({ d: "M13 6h3a2 2 0 0 1 2 2v7" }),
        line({ x1: "6", x2: "6", y1: "9", y2: "21" })
    );

export const createTelescope = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        path({
            d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
        }),
        path({ d: "m13.56 11.747 4.332-.924" }),
        path({ d: "m16 21-3.105-6.21" }),
        path({
            d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
        }),
        path({ d: "m6.158 8.633 1.114 4.456" }),
        path({ d: "m8 21 3.105-6.21" }),
        circle({ cx: "12", cy: "13", r: "2" })
    );

export const createX = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        path({ d: "M18 6 6 18" }),
        path({ d: "m6 6 12 12" })
    );

export const createFileCode = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        path({
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        }),
        path({ d: "M14 2v5a1 1 0 0 0 1 1h5" }),
        path({ d: "M10 12.5 8 15l2 2.5" }),
        path({ d: "m14 12.5 2 2.5-2 2.5" })
    );

export const createSquareTerminal = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        path({ d: "m7 11 2-2-2-2" }),
        path({ d: "M11 13h4" }),
        rect({ width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" })
    );

export const createInfo = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
        },
        circle({ cx: "12", cy: "12", r: "10" }),
        path({ d: "M12 16v-4" }),
        path({ d: "M12 8h.01" })
    );

export const createInfoSquareFill = () =>
    svg(
        {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 16 16",
        },
        path({
            d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
        })
    );
