import van from "/js/van.js";
import { registerStyle } from "/js/article.js";
import { ContourLogo } from "/js/symbol.js";
import { highlightCSS } from "/js/highlight.js";

const { div, h2, button } = van.tags;

const contourDisplayStyle = registerStyle(/*css*/ `
@layer {
    .mutex[data-variant="tab-indicated"] {
        --mutex-item-color: var(--color-3);
        --mutex-item-hover-color: var(--color-1);
        --mutex-item-active-color: var(--color-1);
        --mutex-padding-block: var(--space-1);
        --mutex-padding-inline: var(--space-1);
    
        background: var(--background-color-2);
        border-radius: 3px;
        overflow-x: auto
    }

    .mutex__indicator[data-variant="tab-indicated"] {
        --mutex-indicator-background: var(--background-color-1);
        --mutex-indicator-border-radius: 3px;
        --mutex-indicator-box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
        height: calc(100% - 2 * var( --mutex-padding-block));
        transition: left 0.2s ease, width 0.2s ease;
        position: absolute;
        left: var(--mutex-padding-inline);
    }

    .mutex__item[data-variant="tab-indicated"][aria-selected] {
        color: var(--color-1);
    }
}`);

const contourDisplay = div(
    {
        class: "mutex",
        "data-variant": "tab-indicated",
    },
    div({
        class: "mutex__indicator",
        "data-variant": "tab-indicated",
    }),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-indicated",
            "aria-selected": null,
        },
        "Inverse"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-indicated",
        },
        "Directional"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-indicated",
        },
        "Digital"
    ),
    div(
        {
            class: "mutex__item",
            "data-variant": "tab-indicated",
        },
        "Blueprint"
    )
);

const hero = div(
    {
        class: "container",
        "data-variant": "contour-hero",
    },
    ContourLogo("contour-logo"),
    h2(
        {
            class: "typography",
            "data-variant": "contour-slogan",
        },
        "helps you write scalable CSS"
    ),
    div(
        {
            class: "container",
            "data-variant": "contour-hero-control",
        },
        button(
            {
                class: "trigger",
                "data-variant": "inverse",
            },
            "Get started"
        )
    ),
    div(
        {
            class: "container",
            "data-variant": "contour-display",
        },
        contourDisplay
    )
);

van.add(document.body, hero);

for (const indicator of document.getElementsByClassName("mutex__indicator")) {
    const parent = indicator.parentElement;
    const firstItem = parent.getElementsByClassName("mutex__item").item(0);
    indicator.style.width = `${firstItem.getBoundingClientRect().width}px`;
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
