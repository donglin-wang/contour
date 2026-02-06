import { tags } from "/lib/tags";
import { PanelLeftClose, PanelRightClose, House } from "/component/symbol";
import { ThemeToggleTrigger } from "/page/docs/component";
import { articles } from "/page/docs/routes";
import { createSidebar } from "/page/component";
import { Link } from "/component/link";
import { getRouter } from "/store/router";

const { div, nav, button, main } = tags;

const sidebar = createSidebar(articles);

const sidebarToggle = button(
    {
        class: "trigger m-ghost",
        "data-variant": "icon",
    },
    PanelRightClose(),
);

export const openSidebar = () => {
    sidebar.toggleAttribute("data-open", true);
    sidebar.toggleAttribute("data-closed", false);
    sidebarToggle.replaceChildren(PanelLeftClose());
};

export const closeSidebar = () => {
    sidebar.toggleAttribute("data-open", false);
    sidebar.toggleAttribute("data-closed", true);
    sidebarToggle.replaceChildren(PanelRightClose());
};

export const toggleSidebar = () => {
    if (sidebar.hasAttribute("data-closed")) {
        openSidebar();
    } else {
        closeSidebar();
    }
};

sidebarToggle.addEventListener("click", toggleSidebar);

const home = Link({
    attributes: {
        class: "trigger m-ghost",
        "data-variant": "icon",
    },
    callback: async () => {
        await getRouter().navigateTo("");
        closeSidebar();
    },
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
            sidebarToggle,
            home,
        ),
        div(
            {
                class: "bar__section m-margin-inline-start-auto",
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

export default () => {
    document.body.replaceChildren(...scaffold);
    return root;
};
