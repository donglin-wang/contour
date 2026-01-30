import { OctagonAlert, X } from "/component/symbol";
import { tags } from "/lib/tags";
import { H1 } from "/page/docs/component";

const { span, button, div } = tags;

const toggleable = span(
    { class: "marker", "data-variant": "toggleable" },
    "lalala"
);

toggleable.addEventListener("click", () => {
    if (toggleable.getAttribute("aria-selected") === "true") {
        toggleable.removeAttribute("aria-selected");
    } else {
        toggleable.setAttribute("aria-selected", "true");
    }
});
toggleable.addEventListener("selectstart", (event) => {
    event.preventDefault();
});

const counter = div(
    {
        class: "container",
        style: "width: 50px; height: 50px; background-color: var(--background-muted); position: relative;",
    },
    span({ class: "marker m-danger", "data-variant": "counter" }, "99+")
);

const ribbon = div(
    {
        class: "container",
        style: "width: 50px; height: 50px; background-color: var(--background-muted); position: relative;",
    },
    span({ class: "marker m-danger", "data-variant": "ribbon" }, "Ribbon"),
    span({ class: "marker m-danger", "data-variant": "ribbon-corner" })
);

const compound = span(
    {
        class: "marker",
        "data-variant": "compound",
    },
    span(
        {
            class: "marker m-danger-muted",
            "data-variant": "compound-item",
        },
        OctagonAlert()
    ),
    span(
        {
            class: "marker m-danger",
            "data-variant": "compound-item",
        },
        "Warning"
    )
);

const compound2 = span(
    {
        class: "marker",
        "data-variant": "compound",
    },
    span(
        {
            class: "marker m-inverse",
            "data-variant": "compound-item",
        },
        "coverage"
    ),
    span(
        {
            class: "marker m-success",
            "data-variant": "compound-item",
        },
        "98%"
    )
);

export default [
    H1("Marker"),
    span(
        { class: "marker", "data-variant": "closeable" },
        "lalala",
        button(
            { class: "trigger", "data-variant": "marker-close" },
            X({ class: "symbol", variant: "marker-close" })
        )
    ),
    toggleable,
    counter,
    ribbon,
    compound,
    compound2,
];
