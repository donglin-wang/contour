import { tags } from "/js/tags";
import { registerStyle } from "/js/article";
import { ContourLogo } from "/js/symbol";
import { highlightCSS } from "/js/highlight";
import { Tabs } from "/js/components/tabs";

const { div, h2, a } = tags;

registerStyle(/*css*/ `
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

const displayButton = a(
    {
        class: "trigger",
        "data-variant": "inverse",
        href: "/introduction",
    },
    "Get started"
);

const inverseStyle = highlightCSS(/*css*/ `
@layer {
    .trigger[data-variant="inverse"] {
        --trigger-background: var(--color-1);
        --trigger-hover-background: var(--color-2);
        color: var(--background-color-1);
    }
}`);

const digitalStyle = highlightCSS(/*css*/ `
@layer {
    .trigger[data-variant="digital"] {
        border-radius: 0;
        border: 2px solid black;
        position: relative;
        --button-background: var(--background-color-1);
    }

    .trigger[data-variant="digital"]::after {
        content: "";
        position: absolute;
        top: 8px;
        left: 8px;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            circle,
            var(--color-1) 30%,
            transparent 30%
        );
        background-size: 2px 2px;
        z-index: -1;
    }
}`);

const blueprintStyle = highlightCSS(/*css*/ `
@layer {
    .trigger[data-variant="blueprint"] {
        --button-border-width: 1px;
        border: var(--button-border-width) dashed black;
        border-radius: 0;
        position: relative;
        z-index: 1;
    }

    .trigger[data-variant="blueprint"]::after,
    .trigger[data-variant="blueprint"]::before {
        --button-marker-size: 1rem;

        height: calc(
            100% + var(--button-marker-size) + var(--button-border-width)
        );
        width: var(--button-marker-size);
        background-size: var(--button-marker-size) var(--button-marker-size);
        background: url(/asset/image/plus.svg) no-repeat bottom,
            url(/asset/image/plus.svg) no-repeat top;
        content: "";
        position: absolute;
    }

    .trigger[data-variant="blueprint"]::before {
        left: calc(
            -1 * (var(--button-marker-size) + var(--button-border-width)) / 2
        );
    }

    .trigger[data-variant="blueprint"]::after {
        right: calc(
            -1 * (var(--button-marker-size) + var(--button-border-width)) / 2
        );
    }
}`);

const displayStyles = [inverseStyle, digitalStyle, blueprintStyle];

const displayVariants = ["inverse", "digital", "blueprint"];

const displayCode = div(inverseStyle);

const contourDisplay = new Tabs({
    childSpecs: [
        ...displayVariants.map((value, index) => {
            return {
                selected: index === 0,
                body: [value],
            };
        }),
    ],
    variant: "tab-indicated",
    itemVariant: "tab-indicated",
    indicatorVariant: "tab-indicated",
    callback: (index) => {
        displayButton.setAttribute("data-variant", displayVariants[index]);
        displayCode.removeChild(displayCode.children[0]);
        displayCode.appendChild(displayStyles[index]);
    },
});

export default div(
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
        "is a reference for implementing component systems"
    ),
    div(
        {
            class: "container",
            "data-variant": "contour-hero-control",
        },
        displayButton
    ),
    div(
        {
            class: "container",
            "data-variant": "contour-display",
        },
        contourDisplay,
        displayCode
    )
);
