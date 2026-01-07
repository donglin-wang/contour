import { tags } from "/lib/tags";
import { H1, H2, P, ComponentDisplay, ComponentPanel } from "/page/docs/component";
import { FileCode, MapPin, Bookmark } from "/component/symbol";
import { HTMLCodeBlock, CSSCodeBlock } from "/page/docs/code";

import menuStyle from "/style/pattern/menu.css?inline";
import shortcutStyle from "/page/docs/articles/menu/style/shortcut.css?raw";
import indentedStyle from "/page/docs/articles/menu/style/indented.css?raw";
import nestedStyle from "/page/docs/articles/menu/style/nested.css?raw";

const { div, kbd, span, hr } = tags;

const MenuContainer = (...children: Element[]) =>
    div(
        {
            class: "container",
            "data-variant": "menu-display",
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
        kbd(
            {
                class: "kbd",
                "data-variant": "menu-shortcut",
            },
            "Ctrl P"
        )
    ),
    div(
        {
            class: "menu__item",
        },
        Bookmark(),
        "Item 2",
        kbd(
            {
                class: "kbd",
                "data-variant": "menu-shortcut",
            },
            "Ctrl C"
        )
    ),
    div(
        {
            class: "menu__item",
        },
        FileCode(),
        "Item 3",
        kbd(
            {
                class: "kbd",
                "data-variant": "menu-shortcut",
            },
            "Ctrl D"
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
    ComponentPanel(
        ComponentDisplay(MenuContainer(defaultMenu)),
        HTMLCodeBlock(defaultMenu),
        CSSCodeBlock(menuStyle)
    ),
    H2("Title"),
    ComponentPanel(
        ComponentDisplay(MenuContainer(withTitle)),
        HTMLCodeBlock(withTitle)
    ),
    H2("Icon and shortcut"),
    ComponentPanel(
        ComponentDisplay(MenuContainer(withSymbolKBD)),
        HTMLCodeBlock(withSymbolKBD),
        CSSCodeBlock(shortcutStyle)
    ),
    H2("Indented items"),
    ComponentPanel(
        ComponentDisplay(MenuContainer(indented)),
        HTMLCodeBlock(indented),
        CSSCodeBlock(indentedStyle)
    ),
    H2("Nested menu"),
    ComponentPanel(
        ComponentDisplay(MenuContainer(nested)),
        HTMLCodeBlock(nested),
        CSSCodeBlock(nestedStyle)
    ),
    H2("Title with children"),
    ComponentPanel(
        ComponentDisplay(MenuContainer(titleNested)),
        HTMLCodeBlock(titleNested)
    ),
    H2("Sectioned menu with title"),
    ComponentPanel(
        ComponentDisplay(MenuContainer(withDivider)),
        HTMLCodeBlock(withDivider)
    ),
];
