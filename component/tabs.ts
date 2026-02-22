import type { Attributes, Child } from "/lib/tags";
import { populate, tags } from "/lib/tags";

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

export default function Tabs({
    rootAttributes = {},
    tabSpecs = [],
    indicatorAttributes,
    callback,
}: TabsSpec) {
    const root = div();
    const tabs: HTMLElement[] = [];
    const tabPositions: number[] = [];
    const tabWidths: number[] = [];
    let indicator: HTMLElement | undefined;
    let activeIndex: number = 0;

    populate(root, rootAttributes);

    if (indicatorAttributes && tabSpecs.length !== 0) {
        indicator = div(indicatorAttributes);
        root.appendChild(indicator);
    }

    function setActiveTab(index: number) {
        activeIndex = index;
        for (const tab of tabs) {
            tab.removeAttribute("aria-selected");
        }

        tabs[index].setAttribute("aria-selected", "true");

        if (indicator) {
            moveIndicator(index);
        }

        if (callback) {
            callback(index);
        }
    }

    function moveIndicator(index: number) {
        if (!indicator) return;
        indicator.style.left = `${tabPositions[index]}px`;
        indicator.style.width = `${tabWidths[index]}px`;
    }

    function resetPositionWidth() {
        tabPositions.length = 0;
        tabWidths.length = 0;

        for (const tab of tabs) {
            const rootLeft = root.getBoundingClientRect().left;
            const tabRect = tab.getBoundingClientRect();
            tabPositions.push(tabRect.left - rootLeft);
            tabWidths.push(tabRect.width);
        }
    }

    function insertTab(tabSpec: TabSpec) {
        const tab = div(tabSpec.attributes, ...tabSpec.body);
        root.appendChild(tab);
        tabs.push(tab);

        const index = tabs.length - 1;
        tab.addEventListener("click", () => setActiveTab(index));

        resetPositionWidth();

        if (tabs.length === 1) {
            setActiveTab(0);
        } else if (tabSpec.selected) {
            setActiveTab(index);
        }
    }

    function deleteTab(index: number) {
        if (index === tabs.length - 1 && index - 1 >= 0 && index === activeIndex) {
            setActiveTab(index - 1);
        } else if (index === 0 && index + 1 < tabs.length) {
            setActiveTab(index + 1);
        }

        root.removeChild(tabs[index]);
        tabs.splice(index, 1);
        resetPositionWidth();
    }

    const observer = new ResizeObserver(() => {
        resetPositionWidth();

        const selected = tabs.findIndex(
            (tab) => tab.getAttribute("aria-selected") === "true",
        );
        if (selected !== -1 && indicator) {
            moveIndicator(selected);
        }
    });
    observer.observe(root);

    for (const tabSpec of tabSpecs) {
        insertTab(tabSpec);
    }

    return { root, insertTab, deleteTab, setActiveTab };
}
