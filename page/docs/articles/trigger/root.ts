import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
} from "/page/docs/component";

import { Child, tags } from "/lib/tags";
import { ChevronRight, House } from "/component/symbol";
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
        ChevronRight({ variant: `article-control-chevron-${variantSuffix}` })
    );

export default [
    H1("Trigger"),
    Subheading(
        "A clickable element used for buttons, links, and other interactive controls."
    ),
    H2("Base style"),
    P(
        "The base trigger is a bordered, fit-content flex container with rounded corners and a hover background shift."
    ),
    Ul(
        Li(
            "The trigger has no disabled state built in. Add your own disabled styling and aria-disabled handling when needed."
        ),
        Li(
            "Avoid using the trigger pattern for non-interactive elements. Use a card or badge instead for static, decorative content."
        )
    ),
    ComponentPanel({
        display: ComponentDisplay(button({ class: "trigger" }, "Default")),
    }),
    H2("Colored"),
    P(
        "Semantic color variants for communicating intent. Each replaces the border with a solid background color and matching hover state."
    ),
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
    H2("Article control"),
    P(
        "A previous/next navigation trigger with a two-line label and a directional chevron. The prev variant reverses the flex direction."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                ArticleControl("prev", "Menu"),
                ArticleControl("next", "Table")
            )
        ),
    }),
    H2("Modifiers"),
    P(
        "Composable modifier classes that can be combined with the base trigger. Pill adds full rounding, ghost removes the border and background, and they can be stacked."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                button(
                    {
                        class: "trigger m-pill",
                    },
                    "Pill"
                ),
                button(
                    {
                        class: "trigger m-ghost",
                    },
                    "Ghost"
                ),
                button(
                    {
                        class: "trigger m-pill m-ghost",
                    },
                    "Pill ghost"
                )
            )
        ),
    }),
    H2("Preview"),
    P(
        "A card-like trigger with a leading image and a stacked primary/secondary text section."
    ),
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
                        src: "/asset/image/linux.jpg",
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
                            "Learn more about installing Linux"
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
    H2("Icon"),
    P(
        "A compact trigger sized to fit a single icon, with reduced padding."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            ButtonsContainer(
                button(
                    {
                        class: "trigger",
                        "data-variant": "icon",
                    },
                    House()
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "icon",
                    },
                    House({class: "symbol m-large"})
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "icon",
                    },
                    House({class: "symbol m-x-large"})
                ),
            )
        ),
    }),
];
