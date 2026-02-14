import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    CodeInline,
    inline,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { tags } from "/lib/tags";
import { ChevronDown, ChevronUp } from "/component/symbol";
import boundaryStyle from "/style/pattern/boundary.css?inline";
import draggableStyle from "/style/variant/boundary/draggable.css?inline";
import actionsStyle from "/style/variant/boundary/actions.css?inline";
import textStyle from "/style/variant/boundary/text.css?inline";

const { div, button, span } = tags;

const defaultBoundary = div({ class: "boundary" });

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

const panel = (key: string) => {
    const { element, style } = boundaries[key];
    const sources: any = { HTML: HTMLCodeBlock(element) };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    return ComponentPanel({
        display: ComponentDisplay(element, "display-main-boundary"),
        sources,
    });
};

export default [
    H1("Boundary"),
    Subheading(
        "A horizontal divider used to visually separate sections of content."
    ),
    H2("Base style"),
    P(
        "The base boundary is a flex row with a single top border. All visual embellishments — handles, buttons, text — come from variants."
    ),
    Ul(
        Li(
            "The boundary has no intrinsic height beyond its border. Variants that need a visible hit area must set their own height."
        ),
        Li(
            ...inline`Using a ${CodeInline("div")} instead of an ${CodeInline("hr")} forgoes the native separator semantics. Add ${CodeInline('role="separator"')} and appropriate ARIA attributes to restore accessibility.`
        ),
        Li(
            "Avoid using the boundary for decorative spacing alone. Use margin or padding instead when no visible line is needed."
        )
    ),
    ComponentPanel({
        display: ComponentDisplay(defaultBoundary, "display-main-boundary"),
        sources: {
            HTML: HTMLCodeBlock(defaultBoundary),
            CSS: CSSCodeBlock(boundaryStyle),
        },
    }),
    H2("Draggable"),
    P(
        "A double-bordered divider with a centered pill-shaped drag handle that uses a row-resize cursor."
    ),
    panel("draggable"),
    H2("Actions"),
    P(
        "A double-bordered divider with centered action buttons, such as expand/collapse controls."
    ),
    panel("actions"),
    H2("Text"),
    P(
        "A text label centered between two horizontal lines created with pseudo-elements. The base border is removed in this variant."
    ),
    panel("text"),
    H2("Text enclosed"),
    P(
        "Same centered-text layout with the label wrapped in a pill-shaped border. Reuses the text variant styles."
    ),
    panel("textEnclosed"),
];
