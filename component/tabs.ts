import { tags } from "/lib/tags";

import type { Attributes, Child } from "/lib/tags";

const { div } = tags;

export type TabSpec = {
    selected?: boolean;
    body: Child[];
    attributes: Attributes;
};

export type TabsSpec = {
    rootAttributes: Attributes;
    tabSpecs: TabSpec[];
    indicatorAttributes?: Attributes;
    callback?: (index: number) => number;
};

class Tabs {
    root: HTMLElement;
    rootAttributes: Attributes;
    tabSpecs: TabSpec[];
    tabAttributes: Attributes;
    indicatorAttributes?: Attributes;
    callback?: (index: number) => number;

    private indicator: HTMLElement;
    private tabPositions: number[];
    private tabWidths: number[];

    constructor({
        rootAttributes = {},
        tabSpecs = [],
        indicatorAttributes,
        callback,
    }: TabsSpec) {
        this.root = div(rootAttributes);
        this.callback = callback;
        this.indicatorAttributes = indicatorAttributes;
        this.tabPositions = [];
        this.tabWidths = [];

        for (const tabSpec of tabSpecs) {
            this.insertTab(tabSpec);
        }

        if (indicatorAttributes) {
            this.indicator = div(indicatorAttributes);
        }
    }

    setActiveTab(index: number) {
        for (const tab of this.root.children) {
            tab.removeAttribute("aria-selected");
        }

        this.root.children[index].setAttribute("aria-selected", "true");
        if (this.indicator) {
            this.moveIndicator(index);
        }

        if (this.callback) {
            this.callback(index);
        }
    }

    moveIndicator(index: number) {
        this.indicator.style.left = `${this.tabPositions[index]}px`;
        this.indicator.style.width = `${this.tabWidths[index]}px`;
    }

    insertTab(tabSpec: TabSpec) {
        const tab = div(tabSpec.attributes, ...tabSpec.body);
        this.root.appendChild(tab);

        const index = this.root.children.length - 1;
        tab.addEventListener("click", () => this.setActiveTab(index));

        const rootLeft = this.root.getBoundingClientRect().left;
        const tabRect = tab.getBoundingClientRect();
        this.tabPositions.push(tabRect.left - rootLeft);
        this.tabWidths.push(tabRect.width);

        if (tabSpec.selected) {
            this.setActiveTab(index);
        }
    }

    deleteTab(index: number) {
        if (index === this.root.children.length - 1 && index - 1 >= 0) {
            this.setActiveTab(index - 1);
        } else if (index === 0 && index + 1 < this.root.children.length) {
            this.setActiveTab(index + 1);
        }

        this.root.removeChild(this.root.childNodes[index]);
        this.tabPositions.splice(index, 1);
        this.tabWidths.splice(index, 1);
    }
}

export { Tabs };
