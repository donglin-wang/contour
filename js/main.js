import GlobalNav from "/js/globalNav.js";
import * as icon from "/js/icon.js";

customElements.define("global-nav", GlobalNav);

function toElementName(str) {
    const iconName = str
        .replace("create", "")
        .replace(/([A-Z])/g, "-$1")
        .replace(/^-/, "")
        .toLowerCase();
    return `icon-${iconName}`;
}

for (const [key, createElement] of Object.entries(icon)) {
    customElements.define(
        toElementName(key),
        class extends HTMLElement {
            constructor() {
                super();
                this.classList.add("icon");
                this.appendChild(createElement());
            }
        }
    );
}
