import { BookText, ChevronRight, Ellipsis, House } from "/component/symbol";
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
import breadcrumbStyle from "/style/pattern/breadcrumb.css?inline";
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
                    {
                        class: "breadcrumb__control",
                        "data-variant": "alternative",
                    },
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
                    {
                        class: "breadcrumb__control",
                        "data-variant": "alternative",
                    },
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
                    {
                        class: "breadcrumb__control",
                        "data-variant": "alternative",
                    },
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

const panel = (key: string) => {
    const { element, style } = breadcrumbs[key];
    const sources: Record<string, HTMLElement> = {
        HTML: HTMLCodeBlock(element),
    };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    return ComponentPanel({
        display: ComponentDisplay(element),
        sources,
    });
};

export default [
    H1("Breadcrumb"),
    Subheading(
        "A horizontal trail of links showing the user's current location within a site hierarchy.",
    ),
    H2("Base style"),
    P(
        "The base breadcrumb is a flex row of link items separated by inline dividers. Links show an underline on hover and preserve color across visited states.",
    ),
    Ul(
        Li(
            'The last breadcrumb item typically represents the current page and should be marked with aria-current="page" to convey this to assistive technology.',
        ),
        Li(
            "Avoid using the breadcrumb for flat navigation or unrelated links. Use a bar or tab instead.",
        ),
    ),
    ComponentPanel({
        display: ComponentDisplay(breadcrumbs.default.element),
        sources: {
            HTML: HTMLCodeBlock(breadcrumbs.default.element),
            CSS: CSSCodeBlock(breadcrumbStyle),
        },
    }),
    H2("Alternative"),
    P(
        "Replaces the text divider with a chevron icon and swaps the underline hover for a muted background fill with rounded corners.",
    ),
    panel("alternative"),
    H2("With icon"),
    P("Adds a leading icon alongside the link text in each breadcrumb item."),
    panel("withIcon"),
    H2("With ellipsis"),
    P(
        "Collapses intermediate items behind an ellipsis button, useful when the hierarchy is deep.",
    ),
    panel("withEllipsis"),
];
