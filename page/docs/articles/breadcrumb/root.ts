import { H1 } from "/page/docs/component";

import { tags } from "/lib/tags";
import { getRouter } from "/store/router";
import { ChevronRight, House, BookText, Ellipsis } from "/component/symbol";

const { div, a, button } = tags;

const router = getRouter();

export default [
    H1("Breadcrumb"),
    div(
        {
            class: "breadcrumb",
        },
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, "Home")
        ),
        div({ class: "breadcrumb__divider" }, "/"),
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, "Docs")
        ),
        div({ class: "breadcrumb__divider" }, "/"),
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, "Breadcrumb")
        )
    ),
    div(
        {
            class: "breadcrumb",
            "data-variant": "alternative",
        },
        div(
            { class: "breadcrumb__item" },
            a(
                { class: "breadcrumb__control", "data-variant": "alternative" },
                "Home"
            )
        ),
        div(
            { class: "breadcrumb__divider", "data-variant": "alternative" },
            ChevronRight()
        ),
        div(
            { class: "breadcrumb__item" },
            a(
                { class: "breadcrumb__control", "data-variant": "alternative" },
                "Docs"
            )
        ),
        div(
            { class: "breadcrumb__divider", "data-variant": "alternative" },
            ChevronRight()
        ),
        div(
            { class: "breadcrumb__item" },
            a(
                { class: "breadcrumb__control", "data-variant": "alternative" },
                "Breadcrumb"
            )
        )
    ),
    div(
        {
            class: "breadcrumb",
        },
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, House(), "Home")
        ),
        div({ class: "breadcrumb__divider" }, "/"),
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, BookText(), "Docs")
        ),
        div({ class: "breadcrumb__divider" }, "/"),
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, "Breadcrumb")
        )
    ),
    div(
        {
            class: "breadcrumb",
        },
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, "Home")
        ),
        div({ class: "breadcrumb__divider" }, "/"),
        div(
            { class: "breadcrumb__item" },
            button({class: "trigger m-ghost", "data-variant": "icon"}, Ellipsis())
        ),
        div({ class: "breadcrumb__divider" }, "/"),
        div(
            { class: "breadcrumb__item" },
            a({ class: "breadcrumb__control" }, "Breadcrumb")
        )
    )
];
