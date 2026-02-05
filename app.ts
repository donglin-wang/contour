import { initializeRouter } from "/store/router";
import { initializeStyleRegistry } from "/store/style";
import homeRoutes from "/page/home/routes";
import { tags } from "/lib/tags";
import { PanelLeftClose, PanelRightClose, House } from "/component/symbol";
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

const sidebar = createSidebar(articles);

const sidebarToggle = button(
    {
        class: "trigger m-ghost",
        "data-variant": "icon",
    },
    PanelLeftClose(),
);

sidebarToggle.addEventListener("click", () => {
    if (sidebar.hasAttribute("data-closed")) {
        sidebar.toggleAttribute("data-open", true);
        sidebar.toggleAttribute("data-closed", false);
        sidebarToggle.replaceChildren(PanelLeftClose());
    } else {
        sidebar.toggleAttribute("data-open", false);
        sidebar.toggleAttribute("data-closed", true);
        sidebarToggle.replaceChildren(PanelRightClose());
    }
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
            sidebarToggle,
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
        sidebar,
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
