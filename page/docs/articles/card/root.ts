import {
    ComponentDisplay,
    ComponentPanel,
    CSSCodeBlock,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    HTMLCodeBlock,
} from "/page/docs/component";
import { tags } from "/lib/tags";

import type { Child } from "/lib/tags";
import { Heart, MessageSquare, Share, X } from "/component/symbol";

import postStyle from "/style/variant/card/post.css?inline";

const { div, b, span, img, button } = tags;

const CardContainer = (...children: Child[]) =>
    div(
        {
            class: "container",
            "data-variant": "card-display",
        },
        ...children
    );

const defaultCard = CardContainer(
    div(
        { class: "card" },
        div({ class: "card__section" }, "Card header"),
        div(
            { class: "card__section" },
            b("Card body title"),
            span(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            )
        ),
        div({ class: "card__section" }, "Card footer")
    )
);

const post = CardContainer(
    div(
        { class: "card" },
        div(
            { class: "card__section", "data-variant": "post-header" },
            img({
                class: "media",
                "data-variant": "post-avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
            }),
            div(
                {
                    class: "card__section",
                    "data-variant": "post-header-content",
                },
                span(
                    { class: "text", "data-variant": "post-primary" },
                    "Linux user"
                ),
                span(
                    { class: "text", "data-variant": "post-secondary" },
                    "Ottawa, Canada"
                )
            )
        ),
        img({
            class: "media",
            "data-variant": "post-image",
            src: "/asset/image/shoe.png",
            alt: "Linux penguin",
        }),
        div(
            {
                class: "card__section",
            },
            b({ class: "text", "data-variant": "post-primary"}, "Card body title"),
            span(
                { class: "text" },
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            )
        ),
        div(
            {
                class: "card__section",
                "data-variant": "post-control",
            },
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                MessageSquare()
            ),
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                Heart()
            ),
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                Share()
            )
        )
    )
);

const product = CardContainer(
    div(
        {
            class: "card",
            "data-variant": "product",
        },
        img({
            class: "media",
            "data-variant": "post-image",
            src: "/asset/image/shoe.png",
            alt: "Nike shoe",
        }),
        div(
            {
                class: "card__section",
                "data-variant": "product-body",
            },
            div(
                {
                    class: "card__section",
                    "data-variant": "product-content",
                },
                span(
                    { class: "text", "data-variant": "product-primary" },
                    "Nike Air Max 270"
                ),
                span(
                    { class: "text", "data-variant": "product-secondary" },
                    "Women's running shoes"
                )
            ),
            span({ class: "text", "data-variant": "product-price" }, "$350")
        ),
        div(
            {
                class: "card__section",
                "data-variant": "product-control",
            },
            button(
                {
                    class: "trigger",
                    "data-variant": "product-add-cart",
                },
                "Add to cart"
            ),
            button(
                {
                    class: "trigger",
                },
                Heart()
            )
        )
    )
);

const connect = CardContainer(
    div(
        {
            class: "card",
            "data-variant": "connect",
        },
        button(
            {
                class: "trigger",
                "data-variant": "connect-close",
            },
            X()
        ),
        div(
            {
                class: "card__section",
                "data-variant": "connect",
            },
            img({
                class: "media",
                "data-variant": "connect-avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
            })
        ),
        div(
            {
                class: "card__section",
                "data-variant": "connect-body",
            },
            span(
                { class: "text", "data-variant": "connect-name" },
                "Mr. Penguin"
            ),
            span(
                { class: "text", "data-variant": "connect-title" },
                "Chief linux evangelist"
            ),
            span(
                { class: "text", "data-variant": "connect-company" },
                "ACME Inc"
            )
        ),
        div(
            { class: "card__section", "data-variant": "connect" },
            button({ class: "trigger", "data-variant": "connect" }, "Connect")
        )
    )
);

export default [
    H1("Card"),
    Subheading(
        "A bordered container that groups related content into distinct sections, used for previews, summaries, and standalone items."
    ),
    H2("Base style"),
    P(
        "The base card is a block-level bordered box with rounded corners. Each section is a flex column separated by a bottom border, with the last section's border removed."
    ),
    Ul(
        Li(
            "Sections stack vertically by default. Variants that need horizontal layouts must override flex-direction on individual sections."
        ),
        Li(
            "Avoid using the card for full-page layouts or dense data. Use a table or dedicated page template instead."
        )
    ),
    ComponentPanel({
        display: ComponentDisplay(defaultCard),
        sources: {
            HTML: HTMLCodeBlock(defaultCard),
        },
    }),
    H2("Post"),
    P(
        "A social-media-style card with an avatar header, a full-width image, body text, and a row of icon action buttons."
    ),
    ComponentPanel({
        display: ComponentDisplay(post),
        sources: {
            HTML: HTMLCodeBlock(post),
            CSS: CSSCodeBlock(postStyle),
        },
    }),
    H2("Product"),
    P(
        "A commerce-oriented card with a product image, a side-by-side title/price row, and action buttons."
    ),
    ComponentPanel({
        display: ComponentDisplay(product),
        sources: {
            HTML: HTMLCodeBlock(product),
        },
    }),
    H2("Connect"),
    P(
        "A centered, profile-style card with an avatar, stacked identity details, and a connect action. Includes an absolutely positioned close button."
    ),
    ComponentPanel({
        display: ComponentDisplay(connect),
        sources: {
            HTML: HTMLCodeBlock(connect),
        },
    }),
];
