import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { Ellipsis, Menu, ContourLogo } from "/component/symbol";
import { tags } from "/lib/tags";
import topNavStyle from "/style/variant/bar/topNav.css?inline";
import modifiersStyle from "/style/variant/bar/modifiers.css?inline";

const { nav, div, button, span } = tags;

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
                ContourLogo({class: "symbol m-x-large"}),
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
                ContourLogo({class: "symbol m-x-large"}),
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

const articleElements = [H1("Bar")];

Object.values(bars).forEach(({ element, style, title }) => {
    if (title) {
        articleElements.push(H2(title));
    }
    const sources: any = {
        HTML: HTMLCodeBlock(element),
    };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    articleElements.push(
        ComponentPanel({
            display: ComponentDisplay(element, "display-main-striped"),
            sources: sources,
        }),
    );
});

export default articleElements;
