import Component from "./base";
import { tags, populate } from "/lib/tags";

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

class Tabs extends Component {
    root: HTMLElement;
    rootAttributes: Attributes;
    tabSpecs: TabSpec[];
    indicatorAttributes?: Attributes;
    callback?: (index: number) => number;

    private tabs: HTMLElement[] = [];
    private tabPositions: number[] = [];
    private tabWidths: number[] = [];
    private indicator?: HTMLElement;

    constructor({
        rootAttributes = {},
        tabSpecs = [],
        indicatorAttributes,
        callback,
    }: TabsSpec) {
        super();
        this.rootAttributes = rootAttributes;
        this.tabSpecs = tabSpecs;
        this.indicatorAttributes = indicatorAttributes;
        this.callback = callback;
    }

    initialize(): void {
        populate(this, this.rootAttributes);

        if (this.indicatorAttributes && this.tabSpecs.length !== 0) {
            this.indicator = div(this.indicatorAttributes);
            this.appendChild(this.indicator);
        }

        for (const tabSpec of this.tabSpecs) {
            this.insertTab(tabSpec);
        }
    }

    setActiveTab(index: number) {
        for (const tab of this.tabs) {
            tab.removeAttribute("aria-selected");
        }

        this.tabs[index].setAttribute("aria-selected", "true");

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
        this.appendChild(tab);
        this.tabs.push(tab);

        const index = this.tabs.length - 1;
        tab.addEventListener("click", () => this.setActiveTab(index));

        this.resetPositionWidth();
        
        if (tabSpec.selected) {
            this.setActiveTab(index);
        }
    }

    deleteTab(index: number) {
        if (index === this.tabs.length - 1 && index - 1 >= 0) {
            this.setActiveTab(index - 1);
        } else if (index === 0 && index + 1 < this.tabs.length) {
            this.setActiveTab(index + 1);
        }

        this.removeChild(this.tabs[index]);
        this.tabs.splice(index, 1);
        this.resetPositionWidth();
    }

    resetPositionWidth() {
        this.tabPositions = [];
        this.tabWidths = []

        for (const tab of this.tabs) {
            const rootLeft = this.getBoundingClientRect().left;
            const tabRect = tab.getBoundingClientRect();
            this.tabPositions.push(tabRect.left - rootLeft);
            this.tabWidths.push(tabRect.width);
        }
    }
}

customElements.define("contour-tabs", Tabs);

export default Tabs;
