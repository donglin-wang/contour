import van from "/js/van/van";
import { X } from "/js/symbol";

import type { ValidChildDomValue } from "/js/van/van";

const { div, button } = van.tags;

export type TabChildSpec = {
    selected?: boolean;
    body: ValidChildDomValue[];
};

export type TabSpec = {
    childSpecs: TabChildSpec[];
    variant?: string;
    itemVariant?: string;
    itemClass?: string;
    indicatorVariant?: string;
    callback?: (index: number) => void;
};

const registerTab = (
    root: HTMLElement,
    tab: HTMLElement,
    callback?: () => void
) => {
    root.appendChild(tab);

    let indicator: HTMLElement | null = null;
    for (const child of root.children) {
        if (child.classList.contains("mutex__indicator")) {
            indicator = child as HTMLElement;
        }
    }

    tab.addEventListener("click", () => {
        const siblings = root.children;
        for (const sibling of siblings) {
            if (sibling.getAttribute("aria-selected") !== null) {
                sibling.toggleAttribute("aria-selected");
                break;
            }
        }

        tab.setAttribute("aria-selected", "");

        if (indicator !== null) {
            const mutexRect = root.getBoundingClientRect();
            const itemRect = tab.getBoundingClientRect();

            indicator.style.left = `${itemRect.left - mutexRect.left}px`;
            indicator.style.width = `${itemRect.width}px`;
        }

        callback();
    });
};

class Tabs extends HTMLElement implements TabSpec {
    childSpecs: TabChildSpec[];
    variant?: string;
    itemVariant?: string;
    itemClass?: string;
    indicatorVariant?: string;
    callback?: (index: number) => void;

    constructor({
        childSpecs,
        variant,
        itemVariant,
        itemClass,
        indicatorVariant,
        callback,
    }: TabSpec) {
        super();
        this.childSpecs = childSpecs;
        this.variant = variant;
        this.itemVariant = itemVariant;
        this.itemClass = itemClass;
        this.indicatorVariant = indicatorVariant;
        this.callback = callback;
    }

    connectedCallback() {
        const root = div({
            class: "mutex",
            "data-variant": this.variant,
        });

        const indicator = div({
            class: "mutex__indicator",
            "data-variant": this.indicatorVariant,
        });

        const tabs = this.childSpecs.map((spec) =>
            div(
                {
                    class: this.itemClass ?? "mutex__item",
                    "data-variant": this.itemVariant ?? "",
                    ...(spec.selected ? { "aria-selected": "" } : {}),
                },
                ...spec.body
            )
        );

        if (
            this.indicatorVariant !== null &&
            this.indicatorVariant !== undefined
        ) {
            root.appendChild(indicator);
        }

        for (let i = 0; i < this.childSpecs.length; i++) {
            registerTab(root, tabs[i], () => this.callback(i));
        }

        this.appendChild(root);

        // The indicator's width can only be calculated after the tabs'
        // widths are calculated by the browsers rendering engine
        indicator.style.width = `${tabs[0].getBoundingClientRect().width}px`
    }
}

customElements.define("contour-tabs", Tabs);

export { Tabs };
