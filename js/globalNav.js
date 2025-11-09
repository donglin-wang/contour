import van from "./van.js";

const { div, nav, button, aside, li, strong } = van.tags;
const { rect, path, svg } = van.tags("http://www.w3.org/2000/svg");

class GlobalNav extends HTMLElement {
    menuItems = [
        {
            name: "Elements",
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
            name: "Composites",
            type: "title",
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

        const panelCloseIcon = svg(
            {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                class: "icon",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
            },
            rect({ width: "18", height: "18", x: "3", y: "3", rx: "2" }),
            path({ d: "M9 3v18" }),
            path({ d: "m16 15-3-3 3-3" })
        );

        const panelOpenIcon = svg(
            {
                xmlns: "http://www.w3.org/2000/svg",
                class: "icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
            },
            rect({ width: "18", height: "18", x: "3", y: "3", rx: "2" }),
            path({ d: "M15 3v18" }),
            path({ d: "m8 9 3 3-3 3" })
        );

        const sideNavControl = button(
            {
                class: "button button--ghost",
                id: "side-menu__control",
            },
            () => this.isSideNavOpen.val ? panelCloseIcon : panelOpenIcon
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

        this.appendChild(topNav);
        this.appendChild(sideNav);
    }
}

customElements.define("global-nav", GlobalNav);
