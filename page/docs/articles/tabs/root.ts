import Tabs from "/component/tabs";
import { tags } from "/lib/tags";
import { registerTabsBehavior } from "/page/docs/articles/tabs/behavior";
import {
    ComponentDisplay,
    ComponentPanel,
    CSSCodeBlock,
    H1,
    H2,
    HTMLCodeBlock,
    Li,
    P,
    Subheading,
    Ul,
} from "/page/docs/component";

import defaultStyle from "/style/pattern/tabs.css?inline";
import backdropStyle from "/style/variant/tabs/backdrop.css?inline";
import enclosedStyle from "/style/variant/tabs/enclosed.css?inline";
import indicatorStyle from "/style/variant/tabs/indicators.css?inline";
import outlinedStyle from "/style/variant/tabs/outlined.css?inline";
import underscoredStyle from "/style/variant/tabs/underscored.css?inline";

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
            "Tab 1",
        ),
        div(
            {
                class: "tab",
            },
            "Tab 2",
        ),
        div(
            {
                class: "tab",
            },
            "Tab 3",
        ),
    ),
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
            "Tab 1",
        ),
        div(
            {
                class: "tab",
                "data-variant": "underscored",
            },
            "Tab 2",
        ),
        div(
            {
                class: "tab",
                "data-variant": "underscored",
            },
            "Tab 3",
        ),
    ),
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
            "Tab 1",
        ),
        div(
            {
                class: "tab",
                "data-variant": "backdrop",
            },
            "Tab 2",
        ),
        div(
            {
                class: "tab",
                "data-variant": "backdrop",
            },
            "Tab 3",
        ),
    ),
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
            "Tab 1",
        ),
        div(
            {
                class: "tab",
                "data-variant": "enclosed",
            },
            "Tab 2",
        ),
        div(
            {
                class: "tab",
                "data-variant": "enclosed",
            },
            "Tab 3",
        ),
    ),
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
            "Tab 1",
        ),
        div(
            {
                class: "tab",
                "data-variant": "outlined",
            },
            "Tab 2",
        ),
        div(
            {
                class: "tab",
                "data-variant": "outlined",
            },
            "Tab 3",
        ),
    ),
);

const indicatorTabs = Tabs({
    rootAttributes: {
        class: "tabs",
        "data-variant": "underscored",
        style: "position: relative;",
    },
    tabSpecs: [
        {
            attributes: { class: "tab" },
            body: ["Tab 1"],
            selected: true,
        },
        {
            attributes: { class: "tab" },
            body: ["Tab 2"],
        },
        {
            attributes: { class: "tab" },
            body: ["Tab 3"],
        },
    ],
    indicatorAttributes: {
        class: "tab__indicator",
        "data-variant": "underscored",
    },
});

export default [
    H1("Tabs"),
    Subheading(
        "A horizontal set of selectable items that switch between views or filter content.",
    ),
    H2("Base style"),
    P(
        "The base tabs container is a flex row. Each tab uses muted text that becomes full color on hover or when selected via aria-selected.",
    ),
    Ul(
        Li(
            "Consider using a menu if the elements are used for actions or navigations",
        ),
        Li("Avoid using tabs when the selections are not mutually exclusive"),
    ),
    ComponentPanel({
        display: ComponentDisplay(defaultTabs),
        sources: {
            HTML: HTMLCodeBlock(defaultTabs),
            CSS: CSSCodeBlock(defaultStyle),
        },
    }),
    H2("Underscored"),
    P(
        "Adds a bottom border to the tab bar and highlights the selected tab with a thicker underline.",
    ),
    ComponentPanel({
        display: ComponentDisplay(underscored),
        sources: {
            HTML: HTMLCodeBlock(underscored),
            CSS: CSSCodeBlock(underscoredStyle),
        },
    }),
    H2("Backdrop"),
    P(
        "Highlights the selected tab with a muted background fill and rounded corners.",
    ),
    ComponentPanel({
        display: ComponentDisplay(backdrop),
        sources: {
            HTML: HTMLCodeBlock(backdrop),
            CSS: CSSCodeBlock(backdropStyle),
        },
    }),
    H2("Enclosed"),
    P(
        "Wraps all tabs in a muted background, then elevates the selected tab with a subtle shadow and darker background.",
    ),
    ComponentPanel({
        display: ComponentDisplay(enclosed),
        sources: {
            HTML: HTMLCodeBlock(enclosed),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
    H2("Outlined"),
    P(
        "Draws a border around the selected tab on three sides while removing the bottom border, creating a connected-panel look.",
    ),
    ComponentPanel({
        display: ComponentDisplay(outlined),
        sources: {
            HTML: HTMLCodeBlock(outlined),
            CSS: CSSCodeBlock(outlinedStyle),
        },
    }),
    H2("Indicator"),
    P(
        "An animated indicator bar slides to follow the selected tab. The indicator position and width are recalculated automatically via ResizeObserver.",
    ),
    ComponentPanel({
        display: ComponentDisplay(indicatorTabs.root),
        sources: {
            HTML: HTMLCodeBlock(indicatorTabs.root),
            CSS: CSSCodeBlock(indicatorStyle),
        },
    }),
];
