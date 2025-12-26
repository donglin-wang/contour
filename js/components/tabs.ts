import van from "/js/van/van";
import { X } from "/js/symbol";

import type { ValidChildDomValue } from "/js/van/van";

const { div, button } = van.tags;

export type TabChildSpec = {
    selected?: boolean;
    body: ValidChildDomValue[];
};

export type TabSpec = {
    children: TabChildSpec[];
    variant?: string;
    itemVariant?: string;
    itemClass?: string;
    indicatorVariant?: string;
};

export type ClosableTabSpec = TabSpec & {
    closeVariant?: string;
    closeClass?: string;
};

export const createTabs = ({
    children,
    variant,
    itemVariant,
    itemClass,
    indicatorVariant,
}: TabSpec) => {
    const tabs = children.map((spec) =>
        div(
            {
                class: itemClass ?? "mutex__item",
                "data-variant": itemVariant,
                ...(spec.selected ? { "aria-selected": "" } : {}),
            },
            ...spec.body
        )
    );

    const root = div(
        {
            class: "mutex",
            "data-variant": variant,
        },
        ...tabs
    );

    for (const tab of tabs) {
        registerTab(root, tab);
    }

    if (indicatorVariant !== null && indicatorVariant !== undefined) {
        root.appendChild(
            div({
                class: "mutex__indicator",
                "data-variant": indicatorVariant,
                style: `width: ${tabs[0].getBoundingClientRect().width}px`,
            })
        );
    }

    const addChild = (spec: TabChildSpec) => {
        const tab = div(
            {
                class: itemClass ?? "mutex__item",
                "data-variant": itemVariant,
            },
            ...spec.body
        );

        registerTab(root, tab);
    };

    return {
        addChild: addChild,
        root: root,
    };
};

export const createClosableTabs = ({
    children,
    variant,
    itemVariant,
    itemClass,
    closeVariant,
    closeClass,
    indicatorVariant,
}: ClosableTabSpec) => {
    const root = div({
        class: "mutex",
        "data-variant": variant,
    });

    const tabs = [];

    for (const spec of children) {
        const close = button(
            {
                class: closeClass ?? "trigger",
                "data-variant": closeVariant,
            },
            X()
        );

        const tab = div(
            {
                class: itemClass ?? "mutex__item",
                "data-variant": itemVariant,
                ...(spec.selected ? { "aria-selected": "" } : {}),
            },
            ...spec.body
        );

        tabs.push(tab);

        registerClosableTab(root, tab, close);
    }

    if (indicatorVariant !== null && indicatorVariant !== undefined) {
        root.appendChild(
            div({
                class: "mutex__indicator",
                "data-variant": indicatorVariant,
                style: `width: ${tabs[0].getBoundingClientRect().width}px`,
            })
        );
    }

    return root;
};

const registerClosableTab = (
    root: HTMLElement,
    tab: HTMLElement,
    close: HTMLElement
) => {
    tab.appendChild(close);

    close.addEventListener("click", () => {
        root.removeChild(tab);
    });

    registerTab(root, tab);
};

const registerTab = (root: HTMLElement, tab: HTMLElement) => {
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
    });
};

export const registerMutexHandler = () => {
    for (const indicator of document.getElementsByClassName(
        "mutex__indicator"
    )) {
        const parent = indicator.parentElement;
        const firstItem = parent.getElementsByClassName("mutex__item").item(0);
        (indicator as HTMLElement).style.width = `${
            firstItem.getBoundingClientRect().width
        }px`;
    }

    for (const mutexItem of document.getElementsByClassName("mutex__item")) {
        mutexItem.addEventListener("click", () => {
            const parent = mutexItem.parentElement;
            const siblings = parent.children;

            let indicator = null;
            for (const sibling of siblings) {
                if (sibling.getAttribute("aria-selected") !== null) {
                    sibling.toggleAttribute("aria-selected");
                }

                if (sibling.classList.contains("mutex__indicator")) {
                    indicator = sibling;
                }
            }

            mutexItem.setAttribute("aria-selected", "");

            if (indicator !== null) {
                const mutexRect = parent.getBoundingClientRect();
                const itemRect = mutexItem.getBoundingClientRect();
                const left = itemRect.left - mutexRect.left;
                const width = itemRect.width;

                indicator.style.left = `${left}px`;
                indicator.style.width = `${width}px`;
            }
        });
    }
};
