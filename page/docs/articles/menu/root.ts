import { tags } from "/lib/tags";
import {
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    ComponentDisplay,
    ComponentPanel,
    HTMLCodeBlock,
    CSSCodeBlock,
} from "/page/docs/component";
import { FileCode, MapPin, Bookmark } from "/component/symbol";

import menuStyle from "/style/pattern/menu.css?inline";
import shortcutStyle from "/style/variant/menu/shortcut.css?raw";
import indentedStyle from "/style/variant/menu/indented.css?raw";
import nestedStyle from "/style/variant/menu/nested.css?raw";

const { div, kbd, span, hr } = tags;

const MenuContainer = (...children: Element[]) =>
    div(
        {
            class: "container",
            "data-for": "menu-framing",
        },
        ...children
    );

const defaultMenu = div(
    {
        class: "menu",
    },
    div(
        {
            class: "menu__item",
        },
        "Item 1"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 2"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 3"
    )
);

const withSymbolKBD = div(
    {
        class: "menu",
    },
    div(
        {
            class: "menu__item",
        },
        MapPin(),
        "Item 1",
        div(
            {
                class: "menu__section",
                "data-variant": "item-end",
            },
            kbd(
                {
                    class: "marker",
                    "data-variant": "kbd",
                },
                "Ctrl P"
            )
        )
    ),
    div(
        {
            class: "menu__item",
        },
        Bookmark(),
        "Item 2",
        div(
            {
                class: "menu__section",
                "data-variant": "item-end",
            },
            kbd(
                {
                    class: "marker",
                    "data-variant": "kbd",
                },
                "Ctrl C"
            )
        )
    ),
    div(
        {
            class: "menu__item",
        },
        FileCode(),
        "Item 3",
        div(
            {
                class: "menu__section",
                "data-variant": "item-end",
            },
            kbd(
                {
                    class: "marker",
                    "data-variant": "kbd",
                },
                "Ctrl D"
            )
        )
    )
);

const withTitle = div(
    {
        class: "menu",
    },
    span(
        {
            class: "menu__title",
        },
        "Title"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 1"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 2"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 3"
    )
);

const indented = div(
    {
        class: "menu",
    },
    span(
        {
            class: "menu__title",
        },
        "Title"
    ),
    div(
        {
            class: "menu__item",
            "data-variant": "indented",
        },
        "Item 1"
    ),
    div(
        {
            class: "menu__item",
            "data-variant": "indented",
        },
        "Item 2"
    ),
    div(
        {
            class: "menu__item",
            "data-variant": "indented",
        },
        "Item 3"
    )
);

const nested = div(
    div(
        {
            class: "menu",
        },
        div(
            {
                class: "menu__item",
            },
            "Item 1"
        ),
        div(
            {
                class: "menu__item",
            },
            "Item 2"
        ),
        div(
            { class: "menu", "data-variant": "nested" },
            div(
                {
                    class: "menu__item",
                },
                "Item 1"
            ),
            div(
                {
                    class: "menu__item",
                },
                "Item 2"
            ),
            div(
                { class: "menu", "data-variant": "nested" },
                div(
                    {
                        class: "menu__item",
                    },
                    "Item 1"
                ),
                div(
                    {
                        class: "menu__item",
                    },
                    "Item 2"
                )
            )
        ),
        div(
            {
                class: "menu__item",
            },
            "Item 3"
        )
    )
);

const titleNested = div(
    {
        class: "menu",
    },
    span(
        {
            class: "menu__title",
        },
        "Title"
    ),
    div(
        { class: "menu", "data-variant": "nested" },
        div(
            {
                class: "menu__item",
            },
            "Item 1"
        ),
        div(
            {
                class: "menu__item",
            },
            "Item 2"
        ),
        div(
            {
                class: "menu__item",
            },
            "Item 3"
        )
    )
);

const withDivider = div(
    {
        class: "menu",
    },
    span(
        {
            class: "menu__title",
        },
        "Title"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 1"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 2"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 3"
    ),
    hr({
        class: "boundary",
    }),
    span(
        {
            class: "menu__title",
        },
        "Title"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 1"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 2"
    ),
    div(
        {
            class: "menu__item",
        },
        "Item 3"
    )
);

export default [
    H1("Menu"),
    Subheading(
        "A vertical list of actionable items, often used for navigation, command palettes, and context menus."
    ),
    H2("Base style"),
    P(
        "The base menu is a block-level container with vertical padding. Each item is a flexbox row with hover highlighting and a pointer cursor."
    ),
    Ul(
        Li(
            "The menu does not manage focus or keyboard navigation. Add your own key handlers if the menu needs to be accessible as a composite widget."
        ),
        Li(
            "Avoid using the menu pattern for content that is not actionable. Use a list or card layout instead for displaying static information."
        )
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(defaultMenu),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(defaultMenu),
            CSS: CSSCodeBlock(menuStyle),
        },
    }),
    H2("Title"),
    P(
        "A menu can include a title element to label a group of items."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(withTitle),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(withTitle),
        },
    }),
    H2("Icon and shortcut"),
    P(
        "Menu items can display a leading icon and a trailing keyboard shortcut. This variant adds its own shortcut styles."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(withSymbolKBD),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(withSymbolKBD),
            CSS: CSSCodeBlock(shortcutStyle),
        },
    }),
    H2("Indented items"),
    P(
        "Items can be visually indented beneath a title using the indented variant."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(indented),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(indented),
            CSS: CSSCodeBlock(indentedStyle),
        },
    }),
    H2("Nested menu"),
    P(
        "Menus can be nested to create multi-level hierarchies."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(nested),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(nested),
            CSS: CSSCodeBlock(nestedStyle),
        },
    }),
    H2("Title with children"),
    P(
        "A title can serve as a heading for a nested group of items, combining the title and nested menu patterns. Reuses the nested menu styles."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(titleNested),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(titleNested),
        },
    }),
    H2("Sectioned menu with title"),
    P(
        "A menu can be divided into distinct sections using a divider, each with its own title."
    ),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(withDivider),
            "display-main-striped"
        ),
        sources: {
            HTML: HTMLCodeBlock(withDivider),
        },
    }),
];
