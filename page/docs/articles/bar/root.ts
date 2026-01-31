import { Ellipsis, Menu } from "/component/symbol";
import { tags } from "/lib/tags";
import { H1 } from "/page/docs/component";

const { nav, div, button, span } = tags;

export default [
    H1("Bar"),
    nav(
        {
            class: "bar",
        },
        div(
            {
                class: "bar__section",
                "data-composition": "gap-3",
            },
            span(
                {
                    class: "text",
                    "data-variant": "logo",
                },
                "Contour",
            ),
            span("Doucmentation"),
            span("Guides"),
        ),
        div(
            {
                class: "bar__section",
                "data-composition": "margin-inline-start-auto",
            },
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                Ellipsis(),
            ),
        ),
    ),

    nav(
        {
            class: "bar",
        },
        div(
            {
                class: "bar__section",
                "data-composition": "sandwich-start",
            },
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                Menu(),
            ),
        ),
        div(
            {
                class: "bar__section",
                "data-composition": "sandwich-middle",
            },
            span(
                {
                    class: "text",
                    "data-variant": "logo",
                },
                "Contour",
            ),
        ),
        div(
            {
                class: "bar__section",
                "data-composition": "sandwich-end",
            },
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                Ellipsis(),
            ),
        ),
    ),
];
