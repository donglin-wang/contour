import { initializeRouter } from "/store/router";
import { initializeStyleRegistry } from "/store/style";
import homeRoutes from "/page/home/routes";
import { tags } from "/lib/tags";
import { PanelLeftClose, House, Sun } from "/component/symbol";
import { ThemeToggleTrigger } from "/page/docs/component";
import { articles } from "/page/docs/routes";
import docRoutes from "/page/docs/routes";
import { createSidebar } from "/page/docs/sidebar";
import { Link } from "/component/link";

const { div, nav, button, main } = tags;
const home = Link({
    attributes: {
        class: "trigger m-ghost",
        "data-variant": "icon",
    },
    callback: () => router.navigateTo(""),
    children: [House()],
});

const root = div({
    class: "container",
    "data-for": "contour-root",
});

const scaffold = [
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
            home,
        ),
        div(
            {
                class: "bar__section",
                "data-composition": "margin-inline-start-auto",
            },
            ThemeToggleTrigger(),
        ),
    ),
    main(
        {
            class: "container",
            "data-variant": "main",
        },
        createSidebar(articles),
        root,
    ),
];

const router = initializeRouter({
    routeSegments: [...homeRoutes, ...docRoutes],
    rootCallback: () => {
        document.body.replaceChildren(...scaffold);
        return root;
    },
});

await router.loadPath();
initializeStyleRegistry();
