import { tags } from "/lib/tags";
import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    HTMLCodeBlock,
    CSSCodeBlock,
} from "/page/docs/component";
import {
    ChevronDown,
    Bookmark,
    MapPin,
    Plus,
    Ellipsis,
} from "/component/symbol";

import accordionStyle from "/style/pattern/accordion.css?inline";
import inlineEndStyle from "/page/docs/articles/accordion/style/inlineEndIndicator.css?inline";
import enclosedStyle from "/page/docs/articles/accordion/style/enclosed.css?inline";
import alternativeStyle from "/page/docs/articles/accordion/style/alternativeIndicator.css?inline";

import type { Child } from "/lib/tags";

const { summary, details, div, span, img, button } = tags;

const AccordionContainer = (...children: Child[]) =>
    div(
        {
            class: "accordion",
            "data-variant": "accordion-display",
        },
        ...children
    );

const accordion = AccordionContainer(
    details(
        { class: "accordion__item" },
        summary(
            { class: "accordion__control" },
            span(
                {
                    class: "accordion__indicator",
                },
                ChevronDown()
            ),
            "Does this work?"
        ),
        div({ class: "accordion__content" }, "Yes, it does")
    ),
    details(
        { class: "accordion__item" },
        summary(
            { class: "accordion__control" },
            span(
                {
                    class: "accordion__indicator",
                },
                ChevronDown()
            ),
            "How about stacked together?"
        ),
        div({ class: "accordion__content" }, "Yes, it does")
    )
);

const alternativeIndicator = AccordionContainer(
    div(
        {
            class: "accordion",
        },
        details(
            {
                class: "accordion__item",
                "data-variant": "alternative-indicator",
            },
            summary(
                { class: "accordion__control" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    Plus()
                ),
                "Does this work?"
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        ),
        details(
            {
                class: "accordion__item",
                "data-variant": "alternative-indicator",
            },
            summary(
                { class: "accordion__control" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    Plus()
                ),
                "How about stacked together?"
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        )
    )
);

const withIcon = AccordionContainer(
    details(
        { class: "accordion__item" },
        summary(
            { class: "accordion__control" },
            span(
                {
                    class: "accordion__indicator",
                },
                ChevronDown()
            ),
            MapPin(),
            "Does this work?"
        ),
        div({ class: "accordion__content" }, "Yes, it does")
    ),
    details(
        { class: "accordion__item" },
        summary(
            { class: "accordion__control" },
            span(
                {
                    class: "accordion__indicator",
                },
                ChevronDown()
            ),
            Bookmark(),
            "How about stacked together?"
        ),
        div({ class: "accordion__content" }, "Yes, it does")
    )
);

const inlineEnd = AccordionContainer(
    details(
        { class: "accordion__item" },
        summary(
            { class: "accordion__control" },
            "Does this work?",
            span(
                {
                    class: "accordion__indicator",
                    "data-variant": "inline-end",
                },
                ChevronDown()
            )
        ),
        div({ class: "accordion__content" }, "Yes, it does")
    ),
    details(
        { class: "accordion__item" },
        summary(
            { class: "accordion__control" },
            "How about stacked together?",
            span(
                {
                    class: "accordion__indicator",
                    "data-variant": "inline-end",
                },
                ChevronDown()
            )
        ),
        div({ class: "accordion__content" }, "Yes, it does")
    )
);

const withButton = AccordionContainer(
    div(
        { class: "accordion" },
        details(
            { class: "accordion__item" },
            summary(
                { class: "accordion__control" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    ChevronDown()
                ),
                "Does this work?",
                button(
                    { class: "trigger", "data-variant": "accordion-options" },
                    Ellipsis()
                )
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        ),
        details(
            { class: "accordion__item" },
            summary(
                { class: "accordion__control" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    ChevronDown()
                ),
                "How about stacked together?",
                button(
                    { class: "trigger", "data-variant": "accordion-options" },
                    Ellipsis()
                )
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        )
    )
);

const enclosed = AccordionContainer(
    div(
        {
            class: "accordion",
            "data-variant": "enclosed",
        },
        details(
            { class: "accordion__item" },
            summary(
                { class: "accordion__control" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    ChevronDown()
                ),
                "Does this work?"
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        ),
        details(
            { class: "accordion__item" },
            summary(
                { class: "accordion__control" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    ChevronDown()
                ),
                "How about stacked together?"
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        )
    )
);

const character = AccordionContainer(
    div(
        {
            class: "accordion",
        },
        details(
            { class: "accordion__item" },
            summary(
                { class: "accordion__control", "data-variant": "character" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    ChevronDown()
                ),
                img({
                    class: "media",
                    "data-variant": "accordion-avatar",
                    src: "/asset/image/linux.jpg",
                    alt: "Linux penguin",
                }),
                div(
                    {
                        class: "accordion__section",
                        "data-variant": "character-bio",
                    },
                    span(
                        {
                            class: "text",
                            "data-variant": "character-name",
                        },
                        "Herman Miller"
                    ),
                    span(
                        {
                            class: "text",
                            "data-variant": "character-description",
                        },
                        "They make very good chairs"
                    )
                )
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        ),
        details(
            { class: "accordion__item" },
            summary(
                { class: "accordion__control", "data-variant": "character" },
                span(
                    {
                        class: "accordion__indicator",
                    },
                    ChevronDown()
                ),
                img({
                    class: "media",
                    "data-variant": "accordion-avatar",
                    src: "/asset/image/linux.jpg",
                    alt: "Linux penguin",
                }),
                div(
                    {
                        class: "accordion__section",
                        "data-variant": "character-bio",
                    },
                    span(
                        {
                            class: "text",
                            "data-variant": "character-name",
                        },
                        "Herman Miller"
                    ),
                    span(
                        {
                            class: "text",
                            "data-variant": "character-description",
                        },
                        "They make very good chairs"
                    )
                )
            ),
            div({ class: "accordion__content" }, "Yes, it does")
        )
    )
);

export default [
    H1("Accordion"),
    ComponentPanel({
        display: ComponentDisplay(accordion),
        sources: {
            HTML: HTMLCodeBlock(accordion, true),
            CSS: CSSCodeBlock(accordionStyle),
        },
    }),
    H2("With alternative indicator"),
    ComponentPanel({
        display: ComponentDisplay(alternativeIndicator),
        sources: {
            HTML: HTMLCodeBlock(alternativeIndicator, true),
            CSS: CSSCodeBlock(alternativeStyle),
        },
    }),
    H2("With icon"),
    ComponentPanel({
        display: ComponentDisplay(withIcon),
        sources: {
            HTML: HTMLCodeBlock(withIcon, true),
        },
    }),
    H2("Indicator at the end"),
    ComponentPanel({
        display: ComponentDisplay(inlineEnd),
        sources: {
            HTML: HTMLCodeBlock(inlineEnd, true),
            CSS: CSSCodeBlock(inlineEndStyle),
        },
    }),
    H2("With button"),
    ComponentPanel({
        display: ComponentDisplay(withButton),
        sources: {
            HTML: HTMLCodeBlock(withButton, true),
        },
    }),
    H2("Enclosed"),
    ComponentPanel({
        display: ComponentDisplay(enclosed),
        sources: {
            HTML: HTMLCodeBlock(enclosed, true),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
    H2("Character"),
    ComponentPanel({
        display: ComponentDisplay(character),
        sources: {
            HTML: HTMLCodeBlock(character, true),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
];
