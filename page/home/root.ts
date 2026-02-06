import { tags } from "/lib/tags";
import { getRouter } from "/store/router";
import { Link } from "/component/link";
import { openSidebar } from "/page/routes";

const { div, h1, p, span } = tags;
const router = getRouter();

const displayButton = Link({
    attributes: {
        class: "trigger",
        "data-for": "landing-hero",
    },
    callback: async () => {
        await router.navigateTo("docs/lorem");
        openSidebar()
    },
    children: ["Get started"],
});

export default div(
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
                "It is a zero-dependency naming convention, component \
                    library, and design system rolled into one.",
            ),
            displayButton,
        ),
    ),
);
