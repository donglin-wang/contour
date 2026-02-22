import { ContourLogo, Ellipsis, Menu } from "/component/symbol";
import { tags } from "/lib/tags";
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
import barStyle from "/style/pattern/bar.css?inline";
import modifiersStyle from "/style/variant/bar/modifiers.css?inline";
import topNavStyle from "/style/variant/bar/topNav.css?inline";

const { nav, div, button, span } = tags;

const defaultBar = nav(
    { class: "bar" },
    div({ class: "bar__section" }, span("Section 1")),
    div({ class: "bar__section" }, span("Section 2")),
);

const bars: Record<
    string,
    { element: HTMLElement; style?: string; title?: string }
> = {
    topNav: {
        element: nav(
            {
                class: "bar",
            },
            div(
                {
                    class: "bar__section m-gap-3",
                },
                ContourLogo({ class: "symbol m-x-large" }),
                span("Doucmentation"),
                span("Guides"),
            ),
            div(
                {
                    class: "bar__section m-margin-inline-start-auto",
                },
                button(
                    {
                        class: "trigger m-ghost",
                        "data-variant": "icon",
                    },
                    Ellipsis(),
                ),
            ),
        ),
        style: topNavStyle,
        title: "Top nav",
    },
    sandwich: {
        element: nav(
            {
                class: "bar",
            },
            div(
                {
                    class: "bar__section m-sandwich-start",
                },
                button(
                    {
                        class: "trigger m-ghost",
                        "data-variant": "icon",
                    },
                    Menu(),
                ),
            ),
            div(
                {
                    class: "bar__section m-sandwich-middle",
                },
                ContourLogo({ class: "symbol m-x-large" }),
            ),
            div(
                {
                    class: "bar__section m-sandwich-end",
                },
                button(
                    {
                        class: "trigger m-ghost",
                        "data-variant": "icon",
                    },
                    Ellipsis(),
                ),
            ),
        ),
        style: modifiersStyle,
        title: "Sandwich",
    },
};

const panel = (key: string) => {
    const { element, style } = bars[key];
    const sources: Record<string, HTMLElement> = {
        HTML: HTMLCodeBlock(element),
    };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    return ComponentPanel({
        display: ComponentDisplay(element, "display-main-striped"),
        sources,
    });
};

export default [
    H1("Bar"),
    Subheading(
        "A full-width horizontal strip used for toolbars, navigation headers, and status bars.",
    ),
    H2("Base style"),
    P(
        "The base bar is a full-width flex row with centered alignment and inline/block padding. Sections are flex containers that can be positioned with modifier classes.",
    ),
    Ul(
        Li(
            "The bar has no fixed height by default. Variants that need a consistent height, such as a sticky top nav, must set it explicitly.",
        ),
        Li(
            "Avoid using the bar for stacked or multi-row layouts. Use a card or a container with grid layout instead.",
        ),
    ),
    ComponentPanel({
        display: ComponentDisplay(defaultBar, "display-main-striped"),
        sources: {
            HTML: HTMLCodeBlock(defaultBar),
            CSS: CSSCodeBlock(barStyle),
        },
    }),
    H2("Top nav"),
    P(
        "A sticky navigation bar pinned to the top of the viewport with a fixed height and a bottom border.",
    ),
    panel("topNav"),
    H2("Sandwich"),
    P(
        "A three-section layout with start and end sections each taking 50% width, and a non-shrinking center section. Useful for centering a logo between two action areas.",
    ),
    panel("sandwich"),
];
