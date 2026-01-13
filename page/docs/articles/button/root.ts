import { ComponentDisplay, ComponentPanel, H1, H2 } from "/page/docs/component";

import { Child, tags } from "/lib/tags";
import { ChevronRight } from "/component/symbol";
const { button, div, span, b, img } = tags;

const ButtonsContainer = (...children: Child[]) =>
    div(
        {
            class: "container",
            "data-variant": "button-display",
        },
        ...children
    );

const ArticleControl = (variantSuffix: "prev" | "next", title) =>
    button(
        {
            class: "button",
            "data-variant": `article-control-${variantSuffix}`,
        },
        span(
            {
                class: "button__section",
                "data-variant": "article-control",
            },
            b(
                {
                    class: "text",
                    "data-variant": "article-control-primary",
                },
                title
            ),
            span(
                {
                    class: "text",
                    "data-variant": "article-control-secondary",
                },
                variantSuffix === "prev" ? "Previous" : "Next"
            )
        ),
        ChevronRight(`article-control-chevron-${variantSuffix}`)
    );

export default [
    H1("Button"),
    ComponentPanel({
        display: ComponentDisplay(button({ class: "button" }, "Default")),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                button(
                    {
                        class: "button",
                        "data-variant": "danger",
                    },
                    "Danger"
                ),
                button(
                    {
                        class: "button",
                        "data-variant": "warning",
                    },
                    "Warning"
                ),
                button(
                    {
                        class: "button",
                        "data-variant": "info",
                    },
                    "Info"
                ),
                button(
                    {
                        class: "button",
                        "data-variant": "success",
                    },
                    "Success"
                )
            )
        ),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                ArticleControl("prev", "Menu"),
                ArticleControl("next", "Table")
            )
        ),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                button(
                    {
                        class: "button",
                        "data-variant": "pill",
                    },
                    "Pill"
                ),
                button(
                    {
                        class: "button",
                        "data-variant": "ghost",
                    },
                    "Ghost"
                ),
                button(
                    {
                        class: "button",
                        "data-variant": "pill-ghost",
                    },
                    "Pill ghost"
                )
            )
        ),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                button(
                    {
                        class: "button",
                        "data-variant": "preview",
                    },
                    img({
                        class: "media",
                        "data-variant": "preview-trigger",
                        src: "/asset/image/contour-letter.svg",
                        alt: "Linux penguin",
                    }),
                    span(
                        {
                            class: "button__section",
                            "data-variant": "preview",
                        },
                        span(
                            {
                                class: "text",
                                "data-variant": "preview-primary",
                            },
                            "Getting started with Contour"
                        ),
                        span(
                            {
                                class: "text",
                                "data-variant": "preview-secondary",
                            },
                            "5 minutes"
                        )
                    )
                )
            )
        ),
    }),
];
