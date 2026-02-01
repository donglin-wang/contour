import { tags } from "/lib/tags";
import { getRouter } from "/store/router";
import { Link } from "/component/link";
import { ThemeToggleTrigger } from "/page/docs/component";
import { House, PanelLeftClose } from "/component/symbol";

const { div, h1, p, span, nav, button } = tags;
const router = getRouter();

const displayButton = Link({
    attributes: {
        class: "trigger",
        "data-for": "landing-hero",
    },
    callback: () => router.navigateTo("docs/lorem"),
    children: ["Get started"],
});

export default div(
    nav(
        {
            class: "bar",
            "data-for": "top-nav",
        },
        div(
            {
                class: "bar__section",
            },
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                PanelLeftClose(),
            ),
            button(
                {
                    class: "trigger m-ghost",
                    "data-variant": "icon",
                },
                House(),
            ),
        ),
        div(
            {
                class: "bar__section",
                "data-composition": "margin-inline-start-auto",
            },

            ThemeToggleTrigger(),
        ),
    ),
    div(
        {
            class: "container",
            "data-variant": "contour-hero-backdrop",
        },
        div(
            {
                class: "container",
                "data-variant": "contour-hero-panel",
            },
            div(
                {
                    class: "container",
                    "data-variant": "contour-hero-prose",
                },
                h1(
                    {
                        class: "text",
                        "data-for": "landing-hero",
                    },
                    span(
                        {
                            class: "text",
                            "data-for": "landing-hero-logo",
                        },
                        "Contour",
                    ),
                    " helps you write scalable CSS",
                ),
                p(
                    {
                        class: "text",
                        "data-for": "landing-subheading",
                    },
                    "It is a zero-dependency naming convention, library, and design system rolled into one.",
                ),
                displayButton
            ),
        ),
    ),
);
