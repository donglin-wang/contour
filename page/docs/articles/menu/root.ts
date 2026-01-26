import { tags } from "/lib/tags";
import {
    H1,
    H2,
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
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(defaultMenu),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(defaultMenu),
            CSS: CSSCodeBlock(menuStyle),
        },
    }),
    H2("Title"),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(withTitle),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(withTitle),
        },
    }),
    H2("Icon and shortcut"),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(withSymbolKBD),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(withSymbolKBD),
            CSS: CSSCodeBlock(shortcutStyle),
        },
    }),
    H2("Indented items"),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(indented),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(indented),
            CSS: CSSCodeBlock(indentedStyle),
        },
    }),
    H2("Nested menu"),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(nested),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(nested),
            CSS: CSSCodeBlock(nestedStyle),
        },
    }),
    H2("Title with children"),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(titleNested),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(titleNested),
        },
    }),
    H2("Sectioned menu with title"),
    ComponentPanel({
        display: ComponentDisplay(
            MenuContainer(withDivider),
            "component-display-stripe"
        ),
        sources: {
            HTML: HTMLCodeBlock(withDivider),
        },
    }),
];
