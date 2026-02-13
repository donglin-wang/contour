import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { tags } from "/lib/tags";
import { ChevronDown, ChevronUp } from "/component/symbol";
import draggableStyle from "/style/variant/boundary/draggable.css?inline";
import actionsStyle from "/style/variant/boundary/actions.css?inline";
import textStyle from "/style/variant/boundary/text.css?inline";

const { div, button, span } = tags;

const boundaries: Record<
    string,
    { element: HTMLElement; style?: string; title?: string }
> = {
    draggable: {
        element: div(
            { class: "boundary", "data-variant": "draggable" },
            div({ class: "boundary", "data-variant": "draggable-control" })
        ),
        style: draggableStyle,
        title: "Draggable",
    },
    actions: {
        element: div(
            { class: "boundary", "data-variant": "actions" },
            button(
                { class: "trigger", "data-variant": "boundary-control" },
                ChevronUp({ variant: "boundary-symbol" })
            ),
            button(
                { class: "trigger", "data-variant": "boundary-control" },
                ChevronDown({ variant: "boundary-symbol" })
            )
        ),
        style: actionsStyle,
        title: "Actions",
    },
    text: {
        element: div({ class: "boundary", "data-variant": "text" }, "OR"),
        style: textStyle,
        title: "Text",
    },
    textEnclosed: {
        element: div(
            { class: "boundary", "data-variant": "text" },
            span(
                {
                    class: "text",
                    "data-variant": "boundary-enclosed",
                },
                "OR"
            )
        ),
        style: textStyle,
        title: "Text enclosed",
    },
};

const articleElements = [H1("Boundary")];

Object.values(boundaries).forEach(({ element, style, title }) => {
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
            display: ComponentDisplay(element, "display-main-boundary"),
            sources: sources,
        }),
    );
});

export default articleElements;
