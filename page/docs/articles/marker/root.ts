import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { OctagonAlert, X } from "/component/symbol";
import { tags } from "/lib/tags";
import closeableStyle from "/style/variant/marker/closeable.css?inline";
import toggleableStyle from "/style/variant/marker/toggleable.css?inline";
import counterStyle from "/style/variant/marker/counter.css?inline";
import ribbonStyle from "/style/variant/marker/ribbon.css?inline";
import compoundStyle from "/style/variant/marker/compound.css?inline";

const { span, button, div } = tags;

const markers: Record<
    string,
    { element: HTMLElement; style?: string; title?: string }
> = {
    closeable: {
        element: span(
            { class: "marker", "data-variant": "closeable" },
            "lalala",
            button(
                { class: "trigger", "data-variant": "marker-close" },
                X({ class: "symbol", variant: "marker-close" }),
            ),
        ),
        style: closeableStyle,
        title: "Closeable",
    },
    toggleable: {
        element: (() => {
            const element = span(
                { class: "marker", "data-variant": "toggleable" },
                "lalala",
            );
            element.addEventListener("click", () => {
                if (element.getAttribute("aria-selected") === "true") {
                    element.removeAttribute("aria-selected");
                } else {
                    element.setAttribute("aria-selected", "true");
                }
            });
            element.addEventListener("selectstart", (event) => {
                event.preventDefault();
            });
            return element;
        })(),
        style: toggleableStyle,
        title: "Toggleable",
    },
    counter: {
        element: div(
            {
                class: "container",
                style: "width: 50px; height: 50px; background-color: var(--background-muted); position: relative;",
            },
            span(
                { class: "marker m-danger", "data-variant": "counter" },
                "99+",
            ),
        ),
        style: counterStyle,
        title: "Counter",
    },
    ribbon: {
        element: div(
            {
                class: "container",
                style: "width: 50px; height: 50px; background-color: var(--background-muted); position: relative;",
            },
            span(
                { class: "marker m-danger", "data-variant": "ribbon" },
                "Ribbon",
            ),
            span({ class: "marker m-danger", "data-variant": "ribbon-corner" }),
        ),
        style: ribbonStyle,
        title: "Ribbon",
    },
    compound: {
        element: span(
            {
                class: "marker",
                "data-variant": "compound",
            },
            span(
                {
                    class: "marker m-danger-muted",
                    "data-variant": "compound-item",
                },
                OctagonAlert(),
            ),
            span(
                {
                    class: "marker m-danger",
                    "data-variant": "compound-item",
                },
                "Warning",
            ),
        ),
        style: compoundStyle,
        title: "Compound",
    },
    compoundSecondary: {
        element: span(
            {
                class: "marker",
                "data-variant": "compound",
            },
            span(
                {
                    class: "marker m-inverse",
                    "data-variant": "compound-item",
                },
                "coverage",
            ),
            span(
                {
                    class: "marker m-success",
                    "data-variant": "compound-item",
                },
                "98%",
            ),
        ),
        style: compoundStyle,
        title: "Compound secondary",
    },
};

const panel = (key: string) => {
    const { element, style } = markers[key];
    const sources: any = { HTML: HTMLCodeBlock(element) };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    return ComponentPanel({
        display: ComponentDisplay(element),
        sources,
    });
};

export default [
    H1("Marker"),
    Subheading(
        "A small inline label used for tags, badges, counters, and status indicators."
    ),
    H2("Base style"),
    P(
        "The base marker is a minimal inline-flex container. All visual styling — color, padding, shape — comes from variants and color modifiers."
    ),
    Ul(
        Li(
            "The base pattern provides no padding, border, or background on its own. Every marker needs a variant or modifier to be visually meaningful."
        ),
        Li(
            "Avoid using the marker for long text or multi-line content. Use a notice or card instead."
        )
    ),
    H2("Closeable"),
    P(
        "A pill-shaped marker with a bordered outline and an inline close button."
    ),
    panel("closeable"),
    H2("Toggleable"),
    P(
        "A pill-shaped marker that acts as a toggle. It switches between a muted background and an inverted selected state via aria-selected."
    ),
    panel("toggleable"),
    H2("Counter"),
    P(
        "An absolutely positioned badge anchored to the top-right corner of its container, typically used for notification counts."
    ),
    panel("counter"),
    H2("Ribbon"),
    P(
        "An absolutely positioned label with a folded corner effect created by a pseudo-element."
    ),
    panel("ribbon"),
    H2("Compound"),
    P(
        "Two or more marker segments joined side by side within a shared rounded container, each with its own color modifier."
    ),
    panel("compound"),
    H2("Compound secondary"),
    P(
        "A variation of the compound marker using different color combinations. Reuses the compound styles."
    ),
    panel("compoundSecondary"),
];
