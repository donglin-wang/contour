import { tags } from "/lib/tags";
import { Link } from "/component/link";
import { stateStore } from "/store/state";

import type { Router } from "/lib/routing";

const { div, h1, p, span } = tags;



export default (router: Router) => {
    const displayButton = Link({
        attributes: {
            class: "trigger",
            "data-for": "landing-hero",
        },
        callback: async () => {
            await router.navigate("/docs/lorem");
            stateStore.setState({sidebarOpen: true});
        },
        children: ["Get started"],
    });

    const home = div(
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

    return home
};
