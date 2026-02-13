import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
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

const articleElements = [H1("Marker")];

Object.values(markers).forEach(({ element, style, title }) => {
    if (title) {
        articleElements.push(H2(title));
    }
    const sources: any = {
        HTML: HTMLCodeBlock(element),
    };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    articleElements.push(
        ComponentPanel({
            display: ComponentDisplay(element),
            sources: sources,
        }),
    );
});

export default articleElements;
