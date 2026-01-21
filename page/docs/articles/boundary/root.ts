import { H1 } from "/page/docs/component";
import { tags } from "/lib/tags";
import { ChevronDown, ChevronUp } from "/component/symbol";

const { div, button, span } = tags;

export default [
    H1("Boundary"),
    div(
        { class: "boundary", "data-variant": "draggable" },
        div({ class: "boundary", "data-variant": "draggable-control" })
    ),
    div(
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
    div({ class: "boundary", "data-variant": "text" }, "OR"),
    div(
        { class: "boundary", "data-variant": "text" },
        span(
            {
                class: "text",
                "data-variant": "boundary-enclosed",
            },
            "OR"
        )
    ),
];
