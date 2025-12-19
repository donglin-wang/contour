import van from "/js/van.js";
import { highlightAll } from "/js/shj.js";
import {
    Article,
    H1,
    H2,
    P,
    Ul,
    Li,
    CodeInline,
    Section,
    registerStyle,
} from "/js/article.js";
import { highlightHTML, highlightCSS } from "/js/highlight.js";
import {
    Braces,
    X,
    FileCode,
    MapPin,
    Bookmark,
    CirclePlus,
} from "/js/symbol.js";

const { div, button } = van.tags;

const tabUnderscoredStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex[data-variant="tab-underscored"] {
        --mutex-variant-border-width: 2px;
        --mutex-item-color: var(--color-3);
        --mutex-item-hover-color: var(--color-1);
        --mutex-item-active-color: var(--color-1);
        border-block-end: var(--mutex-variant-border-width) solid var(--background-color-3);
    }

    .mutex__item[data-variant="tab-underscored"] {
        margin-block: 0 calc(-1 * var(--mutex-variant-border-width));
        border-block-end: var(--mutex-variant-border-width) solid transparent;
    }

    .mutex__item[data-variant="tab-underscored"][aria-selected] {
        border-block-end: var(--mutex-variant-border-width) solid var(--color-1);
    }
}`);

const tabUnderscored = div(
    {
        class: "mutex",
        "data-variant": "tab-underscored",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-underscored",
            "aria-selected": null,
        },
        "Tab 1"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-underscored",
        },
        "Tab 2"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-underscored",
        },
        "Tab 3"
    )
);

const tabBackdropStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex__item[data-variant="tab-backdrop"] {
        --mutex-item-active-background: var(--background-color-2);
        --mutex-item-color: var(--color-3);
        --mutex-item-hover-color: var(--color-1);
        --mutex-item-active-color: var(--color-1);
        border-radius: 5px;
    }
}`);

const tabBackdrop = div(
    {
        class: "mutex",
        "data-variant": "tab-backdrop",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-backdrop",
            "aria-selected": null,
        },
        "Tab 1"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-backdrop",
        },
        "Tab 2"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-backdrop",
        },
        "Tab 3"
    )
);

const tabEnclosedStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex[data-variant="tab-enclosed"] {
        --mutex-item-color: var(--color-3);
        --mutex-item-hover-color: var(--color-1);
        --mutex-item-active-color: var(--color-1);
        padding-block: var(--space-1);
        padding-inline: var(--space-1);
        background: var(--background-color-2);
        border-radius: 5px;
    }

    .mutex__item[data-variant="tab-enclosed"] {
        --mutex-item-active-background: var(--background-color-1);
        --mutex-item-active-border-radius: 3px;
        --mutex-item-active-box-shadow: 0 1px 1px 1px var(--background-color-3);
    }
}`);

const tabEnclosed = div(
    {
        class: "mutex",
        "data-variant": "tab-enclosed",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-enclosed",
            "aria-selected": null,
        },
        "Tab 1"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-enclosed",
        },
        "Tab 2"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-enclosed",
        },
        "Tab 3"
    )
);

const tabOutlinedStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex[data-variant="tab-outlined"] {
        --mutex-variant-border-width: 2px;
        --mutex-item-color: var(--color-3);
        --mutex-item-hover-color: var(--color-1);
        --mutex-item-active-color: var(--color-1);
        border-block-end: var(--mutex-variant-border-width) solid var(--background-color-3);
    }

    .mutex__item[data-variant="tab-outlined"] {
        margin-block: 0 calc(-1 * var(--mutex-variant-border-width));
    }

    .mutex__item[data-variant="tab-outlined"][aria-selected] {
        background: var(--background-color-1);
        border-inline-start: var(--mutex-variant-border-width) solid var(--background-color-3);
        border-inline-end: var(--mutex-variant-border-width) solid var(--background-color-3);
        border-block-start: var(--mutex-variant-border-width) solid var(--background-color-3);
        border-start-start-radius: 5px;
        border-start-end-radius: 5px;
    }
}`);

const tabOutlined = div(
    {
        class: "mutex",
        "data-variant": "tab-outlined",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-outlined",
            "aria-selected": null,
        },
        "Tab 1"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-outlined",
        },
        "Tab 2"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-outlined",
        },
        "Tab 3"
    )
);

const tabJointStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex__item[data-variant="tab-joint"] {
        --mutex-item-hover-background: var(--background-color-2);
        --mutex-item-color: var(--color-3);
        --mutex-item-hover-color: var(--color-1);
        --mutex-item-active-color: var(--color-1);

        border-block: 1px solid var(--background-color-3);
        border-inline: 1px solid var(--background-color-3);
        margin-inline-start: -1px;
    }

    .mutex__item[data-variant="tab-joint"][aria-selected] {
        border-block: 1px solid var(--background-color-3);
        border-inline: 1px solid var(--background-color-3);
        background: var(--background-color-2);
        box-shadow: var(--background-color-3) 0px 0px 4px 0px inset;
    }

    .mutex__item[data-variant="tab-joint"]:first-child,
    .mutex__item[data-variant="tab-joint"][aria-selected]:first-child {
        margin-inline-start: 0;
        border-start-start-radius: 5px;
        border-end-start-radius: 5px;
    }

    .mutex__item[data-variant="tab-joint"]:last-child,
    .mutex__item[data-variant="tab-joint"][aria-selected]:last-child {
        border-start-end-radius: 5px;
        border-end-end-radius: 5px;
    }
}`);

const tabJoint = div(
    {
        class: "mutex",
        "data-variant": "tab-joint",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-joint",
            "aria-selected": null,
        },
        "Tab 1"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-joint",
        },
        "Tab 2"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-joint",
        },
        "Tab 3"
    )
);

const fileTabStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex__item[data-variant="file-tab"] {
        --mutex-item-hover-background: var(--background-color-2);
        --mutex-item-background: var(--background-color-2);
        gap: var(--space-2);
        border: 1px solid var(--background-color-3);
        margin-inline: -1px;
        padding-inline-end: var(--space-3);
    }

    .mutex__item[data-variant="file-tab"] > .mutex--close {
        visibility: hidden;
    }

    .mutex__item[data-variant="file-tab"]:hover > .mutex--close,
    .mutex__item[data-variant="file-tab"][aria-selected] > .mutex--close {
        visibility: visible;
    }

    .mutex__item[data-variant="file-tab"][aria-selected] {
        background: var(--background-color-1);
        border-block-start: 2px solid var(--color-1);
        border-block-end: none;
    }

    .trigger[data-variant="file-tab"] {
        --trigger-background: transparent;
        --trigger-hover-background: var(--background-color-3);
        padding: var(--space-1);
        border: none;
    }
}`);

const fileTab = div(
    {
        class: "mutex",
        "data-variant": "file-tab",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "file-tab",
            "aria-selected": "",
        },
        FileCode(),
        "index.html",
        button(
            {
                class: "trigger mutex--close",
                "data-variant": "file-tab",
            },
            X()
        )
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "file-tab",
        },
        Braces(),
        "styles.css",
        button(
            {
                class: "trigger mutex--close",
                "data-variant": "file-tab",
            },
            X()
        )
    )
);

const dockStyle = registerStyle(/*css*/ `
@layer variant {
    .mutex__item[data-variant="dock"] {
        --symbol-width: var(--space-5);
        --symbol-height: var(--space-5);
        flex-direction: column;
        gap: var(--space-3);
        color: var(--color-3);
        flex: 1;
    }

    .mutex__item[data-variant="dock"][aria-selected],
    .mutex__item[data-variant="dock"]:hover {
        color: var(--color-1);
    }

    .mutex__item[data-variant="dock"]:hover > .mutex__section[data-variant="dock-symbol-backdrop"] {
        background: var(--background-color-2);
    }

    .mutex__item[data-variant="dock"][aria-selected] > .mutex__section[data-variant="dock-symbol-backdrop"] {
        background: var(--color-1);
        color: var(--background-color-2);
    }

    .mutex__section[data-variant="dock-symbol-backdrop"] {
        justify-content: center;
        padding-block: var(--space-2);
        padding-inline: var(--space-5);
        border-radius: 999px;
    }
}`);

const dock = div(
    {
        class: "mutex",
        "data-variant": "dock",
    },
    div(
        {
            class: "mutex__item",
            "data-variant": "dock",
            "aria-selected": "",
        },
        div(
            {
                class: "mutex__section",
                "data-variant": "dock-symbol-backdrop",
            },
            MapPin()
        ),
        "Explore"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "dock",
        },
        div(
            {
                class: "mutex__section",
                "data-variant": "dock-symbol-backdrop",
            },
            Bookmark()
        ),
        "Revisit"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "dock",
        },
        div(
            {
                class: "mutex__section",
                "data-variant": "dock-symbol-backdrop",
            },
            CirclePlus()
        ),
        "Contribute"
    )
);

const article = Article(
    H1("Mutex"),
    Section(tabUnderscored),
    Section(tabBackdrop),
    Section(tabEnclosed),
    Section(tabOutlined),
    Section(tabJoint),
    Section(fileTab),
    Section(dock)
);

van.add(document.body, article);
