// Icons taken from Lucide https://lucide.dev

import { svgTags } from "/lib/tags";

const { path, svg, circle, rect } = svgTags;

export type SymbolAttributes = {
    class?: string;
    variant?: string;
    stroke?: string;
    fill?: string;
    viewBox?: string;
};

const getAttributes = ({
    variant = "",
    stroke = "currentColor",
    fill = "none",
    viewBox = "0 0 24 24",
    class: className = "symbol",
}: SymbolAttributes = {}) => {
    return {
        class: className,
        "data-variant": variant,
        xmlns: "http://www.w3.org/2000/svg",
        stroke: stroke,
        fill: fill,
        viewBox: viewBox,
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
    };
};

export const ArrowUp = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "m5 12 7-7 7 7" }),
        path({ d: "M12 19V5" }),
    );

export const ArrowDown = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M12 5v14" }),
        path({ d: "m19 12-7 7-7-7" }),
    );

export const ChevronRight = (attributes?: SymbolAttributes) =>
    svg(getAttributes(attributes), path({ d: "m9 18 6-6-6-6" }));

export const ChevronUp = (attributes?: SymbolAttributes) =>
    svg(getAttributes(attributes), path({ d: "m18 15-6-6-6 6" }));

export const ChevronDown = (attributes?: SymbolAttributes) =>
    svg(getAttributes(attributes), path({ d: "m6 9 6 6 6-6" }));

export const Play = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        }),
    );

export const Braces = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
        }),
        path({
            d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
        }),
    );

export const X = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M18 6 6 18" }),
        path({ d: "m6 6 12 12" }),
    );

export const FileCode = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        }),
        path({ d: "M14 2v5a1 1 0 0 0 1 1h5" }),
        path({ d: "M10 12.5 8 15l2 2.5" }),
        path({ d: "m14 12.5 2 2.5-2 2.5" }),
    );

export const MapPin = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        }),
        circle({ cx: "12", cy: "10", r: "3" }),
    );

export const Bookmark = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }),
    );

export const CirclePlus = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        circle({ cx: "12", cy: "12", r: "10" }),
        path({ d: "M8 12h8" }),
        path({ d: "M12 8v8" }),
    );

export const Plus = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M5 12h14" }),
        path({ d: "M12 5v14" }),
    );

export const Ellipsis = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        circle({ cx: "12", cy: "12", r: "1" }),
        circle({ cx: "19", cy: "12", r: "1" }),
        circle({ cx: "5", cy: "12", r: "1" }),
    );

export const CircleCheck = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        circle({ cx: "12", cy: "12", r: "10" }),
        path({ d: "m9 12 2 2 4-4" }),
    );

export const House = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
        path({
            d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        }),
    );

export const Heart = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        }),
    );

export const MessageSquare = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        }),
    );

export const Share = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M12 2v13" }),
        path({ d: "m16 6-4-4-4 4" }),
        path({ d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
    );

export const OctagonAlert = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M12 16h.01" }),
        path({ d: "M12 8v4" }),
        path({
            d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
        }),
    );

export const Menu = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({ d: "M4 5h16" }),
        path({ d: "M4 12h16" }),
        path({ d: "M4 19h16" }),
    );

export const PanelLeftClose = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        rect({ width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        path({ d: "M9 3v18" }),
        path({ d: "m16 15-3-3 3-3" }),
    );

export const PanelRightClose = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        rect({ width: "18", height: "18", x: "3", y: "3", rx: "2" }),
        path({ d: "M15 3v18" }),
        path({ d: "m8 9 3 3-3 3" }),
    );

export const Sun = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        circle({ cx: "12", cy: "12", r: "4" }),
        path({ d: "M12 2v2" }),
        path({ d: "M12 20v2" }),
        path({ d: "m4.93 4.93 1.41 1.41" }),
        path({ d: "m17.66 17.66 1.41 1.41" }),
        path({ d: "M2 12h2" }),
        path({ d: "M20 12h2" }),
        path({ d: "m6.34 17.66-1.41 1.41" }),
        path({ d: "m19.07 4.93-1.41 1.41" }),
    );

export const Moon = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        }),
    );

export const ContourLogo = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes({...attributes, viewBox: "0 0 79 79", stroke: "none", fill: "currentColor"}),
        path({
            d: "M74 0C76.7614 0 79 2.23858 79 5V74C79 76.7614 76.7614 79 74 79H5C2.23858 79 2.81871e-08 76.7614 0 74V5C0 2.23858 2.23858 2.81862e-08 5 0H74ZM41.9756 12.1602C38.4238 12.1602 35.2798 12.6164 32.5439 13.5283C29.808 14.3923 27.4795 15.6405 25.5596 17.2725C23.6878 18.8564 22.2714 20.7764 21.3115 23.0322C20.3516 25.2401 19.8721 27.6881 19.8721 30.376V47.2236C19.8721 49.9596 20.3282 52.4559 21.2402 54.7119C22.2002 56.9198 23.5921 58.8397 25.416 60.4717C27.288 62.0557 29.5921 63.2796 32.3281 64.1436C35.1121 65.0076 38.3043 65.4404 41.9043 65.4404C44.7361 65.4404 47.3278 65.2239 49.6797 64.792C52.0317 64.408 54.0243 63.9043 55.6562 63.2803C57.3362 62.6083 58.5116 61.9356 59.1836 61.2637C59.2796 61.1677 59.3281 61.0716 59.3281 60.9756C59.3759 60.8799 59.4003 60.7842 59.4004 60.6885V46.6484H57.96C55.1282 48.0403 52.6083 49.0003 50.4004 49.5283C48.1924 50.0563 45.8397 50.3203 43.3438 50.3203C42.0959 50.3203 41.0397 50.1999 40.1758 49.96C39.36 49.672 38.6881 49.2642 38.1602 48.7363C37.6802 48.2563 37.3201 47.6798 37.0801 47.0078C36.8881 46.2879 36.792 45.4715 36.792 44.5596V31.96C36.792 30.76 36.9599 29.7758 37.2959 29.0078C37.6319 28.1919 38.16 27.592 38.8799 27.208C39.5999 26.776 40.488 26.5596 41.5439 26.5596C42.5039 26.5596 43.392 26.6799 44.208 26.9199C44.5638 27.0187 44.9476 27.1551 45.3604 27.3271V31.8877C45.3604 32.0796 45.408 32.2719 45.5039 32.4639C45.5999 32.6079 45.7921 32.6797 46.0801 32.6797H59.4004V18.3516C59.4004 18.1598 59.3761 18.0159 59.3281 17.9199C59.3281 17.776 59.3039 17.6556 59.2559 17.5596C59.2078 17.4158 59.1116 17.2961 58.9678 17.2002C58.1998 16.4323 57 15.6644 55.3682 14.8965C53.7842 14.1285 51.8401 13.4801 49.5361 12.9521C47.2801 12.4241 44.7596 12.1602 41.9756 12.1602Z",
        }),
    );

export const Copy = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        rect({ width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
        path({ d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }),
    );

export const Check = (attributes?: SymbolAttributes) =>
    svg(getAttributes(attributes), path({ d: "M20 6 9 17l-5-5" }));

export const BookText = (attributes?: SymbolAttributes) =>
    svg(
        getAttributes(attributes),
        path({
            d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
        }),
        path({ d: "M8 11h8" }),
        path({ d: "M8 7h6" }),
    );
