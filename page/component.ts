import { tags } from "/lib/tags";
import { Link } from "/component/link";
import { stateStore } from "/store/state";
import {
    PanelLeftClose,
    PanelRightClose,
    Sun,
    Moon,
    House,
} from "/component/symbol";

const { div, button, nav, main, span } = tags;

export const createSidebar = (
    articles: {
        path: string;
        title: string;
        section: "Foundation" | "Patterns";
    }[],
    navigateTo: (path: string) => void,
) => {
    const foundationArticles = articles.filter(
        (a) => a.section === "Foundation",
    );
    const patternArticles = articles.filter((a) => a.section === "Patterns");

    const sidebar = div(
        {
            class: "menu",
            "data-variant": "sidebar",
        },
        span(
            {
                class: "menu__title",
            },
            "Foundation",
        ),
        div(
            {
                class: "menu",
                "data-variant": "nested",
            },
            ...foundationArticles.map((spec) =>
                Link({
                    callback: async () => {
                        navigateTo("/docs/" + spec.path);
                    },
                    children: [spec.title],
                    attributes: {
                        class: "menu__item",
                        href: `/docs/${spec.path}`,
                        "data-variant": "sidebar",
                    },
                }),
            ),
        ),
        span(
            {
                class: "menu__title",
            },
            "Patterns",
        ),
        div(
            {
                class: "menu",
                "data-variant": "nested",
            },
            ...patternArticles.map((spec) =>
                Link({
                    callback: async () => {
                        navigateTo("/docs/" + spec.path);
                    },
                    children: [spec.title],
                    attributes: {
                        class: "menu__item",
                        href: `/docs/${spec.path}`,
                        "data-variant": "sidebar",
                    },
                }),
            ),
        ),
    );

    const openSidebar = () => {
        sidebar.toggleAttribute("data-open", true);
        sidebar.toggleAttribute("data-closed", false);
    };

    const closeSidebar = () => {
        sidebar.toggleAttribute("data-open", false);
        sidebar.toggleAttribute("data-closed", true);
    };

    if (stateStore.getState().sidebarOpen) {
        openSidebar();
    } else {
        closeSidebar();
    }

    stateStore.subscribe((state) => {
        if (state.sidebarOpen) {
            openSidebar();
        } else {
            closeSidebar();
        }
    });

    return sidebar;
};

const closeSidebar = () => {
    stateStore.setState({ sidebarOpen: false });
};

const openSidebar = () => {
    stateStore.setState({ sidebarOpen: true });
};

const toggleSidebarState = () => {
    if (stateStore.getState().sidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
};

export const createSidebarToggle = () => {
    const sidebarToggleSymbol = stateStore.getState().sidebarOpen
        ? PanelLeftClose()
        : PanelRightClose();

    const sidebarToggle = button(
        {
            class: "trigger m-ghost",
            "data-variant": "icon",
        },
        sidebarToggleSymbol,
    );

    sidebarToggle.addEventListener("click", toggleSidebarState);
    stateStore.subscribe((appState) => {
        console.log("Setting toggle icon");
        if (appState.sidebarOpen) {
            sidebarToggle.replaceChildren(PanelLeftClose());
        } else {
            sidebarToggle.replaceChildren(PanelRightClose());
        }
    });

    return sidebarToggle;
};

export const createHomeButton = (navigateTo: (path: string) => void) =>
    Link({
        attributes: {
            class: "trigger m-ghost",
            "data-variant": "icon",
        },
        callback: async () => {
            navigateTo("/");
            closeSidebar();
        },
        children: [House()],
    });

export const createScaffold = (
    sidebar: Element,
    sidebarToggle: Element,
    homeButton: Element,
    root: Element,
) => [
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
            homeButton,
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

export const ThemeToggleTrigger = () => {
    const trigger = button(
        {
            class: "trigger m-ghost",
            "data-variant": "icon",
        },
        Sun(),
    );

    trigger.addEventListener("click", () => {
        if (document.body.getAttribute("data-theme") === "dark") {
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            trigger.replaceChildren(Sun());
        } else {
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            trigger.replaceChildren(Moon());
        }
    });

    return trigger;
};

export const initializeTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        document.body.setAttribute("data-theme", storedTheme);
    }
};
