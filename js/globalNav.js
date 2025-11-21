import van from "/js/van.js";
import { createPanelLeftClose, createPanelLeftOpen } from "/js/icon.js";

const { div, nav, button, aside, li, strong, main } = van.tags;

class GlobalNav extends HTMLElement {
    menuItems = [
        {
            name: "Conventions",
            type: "title",
        },
        {
            name: "Overview",
            type: "item",
        },
        {
            name: "Rules",
            type: "item",
        },
        {
            name: "Components",
            type: "title",
        },
        {
            name: "Avatar",
            type: "item",
        },
        {
            name: "Badge",
            type: "item",
        },
        {
            name: "Button",
            type: "item",
        },
        {
            name: "Divider",
            type: "item",
        },
        {
            name: "Icon",
            type: "item",
        },
        {
            name: "Tooltip",
            type: "item",
        },
        {
            name: "Accordion",
            type: "item",
        },
        {
            name: "Bar",
            type: "item",
        },
        {
            name: "Breadcrumb",
            type: "item",
        },
        {
            name: "Card",
            type: "item",
        },
        {
            name: "Menu",
            type: "item",
        },
        {
            name: "Notice",
            type: "item",
        },
        {
            name: "Tab",
            type: "item",
        },
        {
            name: "Table",
            type: "item",
        },
    ];

    isSideNavOpen = van.state(true);

    constructor() {
        super();

        const panelLeftCloseIcon = createPanelLeftClose();
        const panelLeftOpenIcon = createPanelLeftOpen();

        const sideNavControl = button(
            {
                class: "button button--ghost",
                id: "side-menu__control",
            },
            () =>
                this.isSideNavOpen.val ? panelLeftCloseIcon : panelLeftOpenIcon
        );

        const topNav = nav(
            { class: "bar", id: "main-nav" },
            div({ class: "bar__section bar__section--start" }, sideNavControl)
        );

        const sideNavItems = [];

        for (const item of this.menuItems) {
            if (item.type == "title") {
                sideNavItems.push(
                    li({ class: "menu__title" }, strong(item.name))
                );
            } else if (item.type == "item") {
                sideNavItems.push(li({ class: "menu__item" }, item.name));
            }
        }

        const sideNav = aside(
            { class: "menu", id: "side-menu" },
            ...sideNavItems
        );

        sideNavControl.addEventListener("click", () => {
            this.isSideNavOpen.val = !this.isSideNavOpen.val;
            sideNav.style.display = this.isSideNavOpen.val ? "flex" : "none";
        });

        const mainContainer = main(
            { id: "main" },
            sideNav,
            document.getElementById("main__content").content
        );

        this.appendChild(topNav);
        this.appendChild(mainContainer);
    }
}

export default GlobalNav;
