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

const COMPACT_BREAKPOINT = 800;
let isCompact = document.documentElement.clientWidth <= COMPACT_BREAKPOINT;

const observer = new ResizeObserver((entries) => {
    const width = entries[0].contentRect.width;
    const wasCompact = isCompact;
    isCompact = width <= COMPACT_BREAKPOINT;
    if (!wasCompact && isCompact && stateStore.getState().sidebarOpen) {
        stateStore.setState({ sidebarOpen: false });
    }
});
observer.observe(document.documentElement);

export const createSidebar = (
    articles: {
        path: string;
        title: string;
        section: "Foundation" | "Patterns";
    }[],
    navigateTo: (path: string) => void,
) => {
    const getSidebarLinks = (section: "Foundation" | "Patterns") =>
        articles
            .filter((a) => a.section === section)
            .map((spec) =>
                Link({
                    callback: async () => {
                        navigateTo("/docs/" + spec.path);
                        if (isCompact) {
                            stateStore.setState({ sidebarOpen: false });
                        }
                    },
                    children: [spec.title],
                    attributes: {
                        class: "menu__item",
                        href: `/docs/${spec.path}`,
                        "data-variant": "sidebar",
                    },
                }),
            );

    const sidebar = div(
        {
            class: "menu",
            "data-variant": "sidebar",
        },
        span({ class: "menu__title" }, "Foundation"),
        div(
            { class: "menu", "data-variant": "nested" },
            ...getSidebarLinks("Foundation"),
        ),
        span({ class: "menu__title" }, "Patterns"),
        div(
            { class: "menu", "data-variant": "nested" },
            ...getSidebarLinks("Patterns"),
        ),
    );

    const openSidebar = () => {
        sidebar.toggleAttribute("data-closed", false);
        if (isCompact) {
            sidebar.toggleAttribute("data-open", false);
            sidebar.toggleAttribute("data-open-overlay", true);
        } else {
            sidebar.toggleAttribute("data-open-overlay", false);
            sidebar.toggleAttribute("data-open", true);
        }
    };

    const closeSidebar = () => {
        sidebar.toggleAttribute("data-open", false);
        sidebar.toggleAttribute("data-open-overlay", false);
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
