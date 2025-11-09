import van from "/js/van.js";

// Icons taken from Lucide https://lucide.dev

const { circle, rect, path, svg } = van.tags("http://www.w3.org/2000/svg");

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
