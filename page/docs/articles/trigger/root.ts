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
            class: "trigger",
            "data-variant": `article-control-${variantSuffix}`,
        },
        span(
            {
                class: "trigger__section",
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
    H1("Trigger"),
    ComponentPanel({
        display: ComponentDisplay(button({ class: "trigger" }, "Default")),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                button(
                    {
                        class: "trigger",
                        "data-variant": "danger",
                    },
                    "Danger"
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "warning",
                    },
                    "Warning"
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "info",
                    },
                    "Info"
                ),
                button(
                    {
                        class: "trigger",
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
                        class: "trigger",
                        "data-variant": "pill",
                    },
                    "Pill"
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "ghost",
                    },
                    "Ghost"
                ),
                button(
                    {
                        class: "trigger",
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
                        class: "trigger",
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
                            class: "trigger__section",
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
