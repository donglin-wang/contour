import {
    H1,
    H2,
    ComponentDisplay,
    ComponentPanel,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { tags } from "/lib/tags";
import { registerTabsBehavior } from "/page/docs/articles/tabs/behavior";

import defaultStyle from "/style/pattern/tabs.css?inline";
import underscoredStyle from "/style/variant/tabs/underscored.css?inline";
import backdropStyle from "/style/variant/tabs/backdrop.css?inline";
import enclosedStyle from "/style/variant/tabs/enclosed.css?inline";
import outlinedStyle from "/style/variant/tabs/outlined.css?inline";

const { div } = tags;

const defaultTabs = registerTabsBehavior(
    div(
        {
            class: "tabs",
        },
        div(
            {
                class: "tab",
                "aria-selected": "true",
            },
            "Tab 1"
        ),
        div(
            {
                class: "tab",
            },
            "Tab 2"
        ),
        div(
            {
                class: "tab",
            },
            "Tab 3"
        )
    )
);

const underscored = registerTabsBehavior(
    div(
        {
            class: "tabs",
            "data-variant": "underscored",
        },
        div(
            {
                class: "tab",
                "data-variant": "underscored",
                "aria-selected": "true",
            },
            "Tab 1"
        ),
        div(
            {
                class: "tab",
                "data-variant": "underscored",
            },
            "Tab 2"
        ),
        div(
            {
                class: "tab",
                "data-variant": "underscored",
            },
            "Tab 3"
        )
    )
);

const backdrop = registerTabsBehavior(
    div(
        {
            class: "tabs",
            "data-variant": "backdrop",
        },
        div(
            {
                class: "tab",
                "data-variant": "backdrop",
                "aria-selected": "true",
            },
            "Tab 1"
        ),
        div(
            {
                class: "tab",
                "data-variant": "backdrop",
            },
            "Tab 2"
        ),
        div(
            {
                class: "tab",
                "data-variant": "backdrop",
            },
            "Tab 3"
        )
    )
);

const enclosed = registerTabsBehavior(
    div(
        {
            class: "tabs",
            "data-variant": "enclosed",
        },
        div(
            {
                class: "tab",
                "data-variant": "enclosed",
                "aria-selected": "true",
            },
            "Tab 1"
        ),
        div(
            {
                class: "tab",
                "data-variant": "enclosed",
            },
            "Tab 2"
        ),
        div(
            {
                class: "tab",
                "data-variant": "enclosed",
            },
            "Tab 3"
        )
    )
);

const outlined = registerTabsBehavior(
    div(
        {
            class: "tabs",
            "data-variant": "outlined",
        },
        div(
            {
                class: "tab",
                "data-variant": "outlined",
                "aria-selected": "true",
            },
            "Tab 1"
        ),
        div(
            {
                class: "tab",
                "data-variant": "outlined",
            },
            "Tab 2"
        ),
        div(
            {
                class: "tab",
                "data-variant": "outlined",
            },
            "Tab 3"
        )
    )
);

export default [
    H1("Tabs"),
    ComponentPanel({
        display: ComponentDisplay(defaultTabs),
        sources: {
            HTML: HTMLCodeBlock(defaultTabs),
            CSS: CSSCodeBlock(defaultStyle),
        },
    }),
    H2("Underscored"),
    ComponentPanel({
        display: ComponentDisplay(underscored),
        sources: {
            HTML: HTMLCodeBlock(underscored),
            CSS: CSSCodeBlock(underscoredStyle),
        },
    }),
    H2("Backdrop"),
    ComponentPanel({
        display: ComponentDisplay(backdrop),
        sources: {
            HTML: HTMLCodeBlock(backdrop),
            CSS: CSSCodeBlock(backdropStyle),
        },
    }),
    H2("Enclosed"),
    ComponentPanel({
        display: ComponentDisplay(enclosed),
        sources: {
            HTML: HTMLCodeBlock(enclosed),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
    H2("Outlined"),
    ComponentPanel({
        display: ComponentDisplay(outlined),
        sources: {
            HTML: HTMLCodeBlock(outlined),
            CSS: CSSCodeBlock(outlinedStyle),
        },
    }),
];
