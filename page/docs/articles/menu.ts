import { tags } from "/lib/tags";
import { H1, H2, P, ComponentDisplay } from "/page/docs/text";
import { FileCode, MapPin, Bookmark } from "/component/symbol";

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
        class: "menu"
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
    hr(
        {
            class: "divider",
        }
    ),
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
)

export default [
    H1("Menu"),
    ComponentDisplay(MenuContainer(defaultMenu)),
    ComponentDisplay(MenuContainer(withSymbolKBD)),
    ComponentDisplay(MenuContainer(withTitle)),
    ComponentDisplay(MenuContainer(indented)),
    ComponentDisplay(MenuContainer(nested)),
    ComponentDisplay(MenuContainer(titleNested)),
    ComponentDisplay(MenuContainer(withDivider)),
];
