import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";

import { tags } from "/lib/tags";
import { ChevronRight, House, BookText, Ellipsis } from "/component/symbol";
import alternativeStyle from "/style/variant/breadcrumb/alternative.css?inline";

const { div, a, button } = tags;

const breadcrumbs: Record<
    string,
    { element: HTMLElement; style?: string; title?: string }
> = {
    default: {
        element: div(
            {
                class: "breadcrumb",
            },
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, "Home"),
            ),
            div({ class: "breadcrumb__divider" }, "/"),
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, "Docs"),
            ),
            div({ class: "breadcrumb__divider" }, "/"),
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, "Breadcrumb"),
            ),
        ),
    },
    alternative: {
        element: div(
            {
                class: "breadcrumb",
                "data-variant": "alternative",
            },
            div(
                { class: "breadcrumb__item" },
                a(
                    { class: "breadcrumb__control", "data-variant": "alternative" },
                    "Home",
                ),
            ),
            div(
                { class: "breadcrumb__divider", "data-variant": "alternative" },
                ChevronRight(),
            ),
            div(
                { class: "breadcrumb__item" },
                a(
                    { class: "breadcrumb__control", "data-variant": "alternative" },
                    "Docs",
                ),
            ),
            div(
                { class: "breadcrumb__divider", "data-variant": "alternative" },
                ChevronRight(),
            ),
            div(
                { class: "breadcrumb__item" },
                a(
                    { class: "breadcrumb__control", "data-variant": "alternative" },
                    "Breadcrumb",
                ),
            ),
        ),
        style: alternativeStyle,
        title: "Alternative",
    },
    withIcon: {
        element: div(
            {
                class: "breadcrumb",
            },
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, House(), "Home"),
            ),
            div({ class: "breadcrumb__divider" }, "/"),
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, BookText(), "Docs"),
            ),
            div({ class: "breadcrumb__divider" }, "/"),
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, "Breadcrumb"),
            ),
        ),
    },
    withEllipsis: {
        element: div(
            {
                class: "breadcrumb",
            },
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, "Home"),
            ),
            div({ class: "breadcrumb__divider" }, "/"),
            div(
                { class: "breadcrumb__item" },
                button(
                    { class: "trigger m-ghost", "data-variant": "icon" },
                    Ellipsis(),
                ),
            ),
            div({ class: "breadcrumb__divider" }, "/"),
            div(
                { class: "breadcrumb__item" },
                a({ class: "breadcrumb__control" }, "Breadcrumb"),
            ),
        ),
        title: "With ellipsis",
    },
};

const articleElements = [H1("Breadcrumb")];

Object.values(breadcrumbs).forEach(({ element, style, title }) => {
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
            display: ComponentDisplay(element),
            sources: sources,
        }),
    );
});

export default articleElements;
