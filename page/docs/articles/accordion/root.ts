import { tags } from "/lib/tags";
import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
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

import linuxImg from "/asset/image/linux.jpg"
import accordionStyle from "/style/pattern/accordion.css?inline";
import inlineEndStyle from "/style/variant/accordion/inlineEndIndicator.css?inline";
import enclosedStyle from "/style/variant/accordion/enclosed.css?inline";
import alternativeStyle from "/style/variant/accordion/alternativeIndicator.css?inline";

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
                    src: linuxImg,
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
                    src: linuxImg,
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
    Subheading(
        "A vertically stacked set of collapsible sections, built on the native details/summary elements."
    ),
    H2("Base style"),
    P(
        "Each item is a details element separated by a bottom border. The summary row is a flex container with a rotating chevron indicator that turns 180 degrees when open."
    ),
    Ul(
        Li(
            "Because it relies on the native details element, accordions are mutually exclusive."
        ),
        Li(
            "Avoid using the accordion for content that users need to compare side by side. Use a tabbed or stacked layout instead."
        )
    ),
    ComponentPanel({
        display: ComponentDisplay(accordion),
        sources: {
            HTML: HTMLCodeBlock(accordion, true),
            CSS: CSSCodeBlock(accordionStyle),
        },
    }),
    H2("With alternative indicator"),
    P(
        "Swaps the chevron for a plus icon that rotates 45 degrees into an X when open."
    ),
    ComponentPanel({
        display: ComponentDisplay(alternativeIndicator),
        sources: {
            HTML: HTMLCodeBlock(alternativeIndicator, true),
            CSS: CSSCodeBlock(alternativeStyle),
        },
    }),
    H2("With icon"),
    P(
        "Adds a leading icon next to the label in the summary row."
    ),
    ComponentPanel({
        display: ComponentDisplay(withIcon),
        sources: {
            HTML: HTMLCodeBlock(withIcon, true),
        },
    }),
    H2("Indicator at the end"),
    P(
        "Moves the expand/collapse indicator to the inline-end of the summary row using auto margin."
    ),
    ComponentPanel({
        display: ComponentDisplay(inlineEnd),
        sources: {
            HTML: HTMLCodeBlock(inlineEnd, true),
            CSS: CSSCodeBlock(inlineEndStyle),
        },
    }),
    H2("With button"),
    P(
        "Places an action button at the inline-end of the summary row alongside the label. Reuses the inline-end indicator styles for positioning."
    ),
    ComponentPanel({
        display: ComponentDisplay(withButton),
        sources: {
            HTML: HTMLCodeBlock(withButton, true),
        },
    }),
    H2("Enclosed"),
    P(
        "Wraps the entire accordion in a rounded border to visually group the items."
    ),
    ComponentPanel({
        display: ComponentDisplay(enclosed),
        sources: {
            HTML: HTMLCodeBlock(enclosed, true),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
    H2("Character"),
    P(
        "A richer summary row with an avatar image and a stacked name/description section."
    ),
    ComponentPanel({
        display: ComponentDisplay(character),
        sources: {
            HTML: HTMLCodeBlock(character, true),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
];
