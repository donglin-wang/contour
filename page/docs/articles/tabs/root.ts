import {
    H1,
    H2,
    ComponentDisplay,
    ComponentPanel,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { Tabs } from "/component/tabs";

import defaultStyle from "/style/pattern/tabs.css?inline";
import underscoredStyle from "/page/docs/articles/tabs/style/underscored.css?inline";
import backdropStyle from "/page/docs/articles/tabs/style/backdrop.css?inline";
import enclosedStyle from "/page/docs/articles/tabs/style/enclosed.css?inline";
import outlinedStyle from "/page/docs/articles/tabs/style/outlined.css?inline";

const defaultTabs = new Tabs({
    rootAttributes: { class: "tabs" },
    tabSpecs: [
        {
            attributes: {
                class: "tab",
            },
            body: ["Tab 1"],
            selected: true,
        },
        {
            attributes: {
                class: "tab",
            },
            body: ["Tab 2"],
        },
        {
            attributes: {
                class: "tab",
            },
            body: ["Tab 3"],
        },
    ],
}).root;

const underscored = new Tabs({
    rootAttributes: { class: "tabs", "data-variant": "underscored" },
    tabSpecs: [
        {
            attributes: { class: "tab", "data-variant": "underscored" },
            body: ["Tab 1"],
            selected: true,
        },
        {
            attributes: { class: "tab", "data-variant": "underscored" },
            body: ["Tab 2"],
        },
        {
            attributes: { class: "tab", "data-variant": "underscored" },
            body: ["Tab 3"],
        },
    ],
}).root;

const backdrop = new Tabs({
    rootAttributes: { class: "tabs", "data-variant": "backdrop" },
    tabSpecs: [
        {
            attributes: { class: "tab", "data-variant": "backdrop" },
            body: ["Tab 1"],
            selected: true,
        },
        {
            attributes: { class: "tab", "data-variant": "backdrop" },
            body: ["Tab 2"],
        },
        {
            attributes: { class: "tab", "data-variant": "backdrop" },
            body: ["Tab 3"],
        },
    ],
}).root;

const enclosed = new Tabs({
    rootAttributes: { class: "tabs", "data-variant": "enclosed" },
    tabSpecs: [
        {
            attributes: { class: "tab", "data-variant": "enclosed" },
            body: ["Tab 1"],
            selected: true,
        },
        {
            attributes: { class: "tab", "data-variant": "enclosed" },
            body: ["Tab 2"],
        },
        {
            attributes: { class: "tab", "data-variant": "enclosed" },
            body: ["Tab 3"],
        },
    ],
}).root;


const outlined = new Tabs({
    rootAttributes: { class: "tabs", "data-variant": "outlined" },
    tabSpecs: [
        {
            attributes: { class: "tab", "data-variant": "outlined" },
            body: ["Tab 1"],
            selected: true,
        },
        {
            attributes: { class: "tab", "data-variant": "outlined" },
            body: ["Tab 2"],
        },
        {
            attributes: { class: "tab", "data-variant": "outlined" },
            body: ["Tab 3"],
        },
    ],
}).root;

export default [
    H1("Tabs"),
    ComponentPanel({
        display: ComponentDisplay(defaultTabs),
        sources: {
            HTML: HTMLCodeBlock(defaultTabs),
            CSS: CSSCodeBlock(defaultStyle),
        },
    }),
    H2("Underscored"),
    ComponentPanel({
        display: ComponentDisplay(underscored),
        sources: {
            HTML: HTMLCodeBlock(underscored),
            CSS: CSSCodeBlock(underscoredStyle),
        },
    }),
    H2("Backdrop"),
    ComponentPanel({
        display: ComponentDisplay(backdrop),
        sources: {
            HTML: HTMLCodeBlock(backdrop),
            CSS: CSSCodeBlock(backdropStyle),
        },
    }),
    H2("Enclosed"),
    ComponentPanel({
        display: ComponentDisplay(enclosed),
        sources: {
            HTML: HTMLCodeBlock(enclosed),
            CSS: CSSCodeBlock(enclosedStyle),
        },
    }),
    H2("Outlined"),
    ComponentPanel({
        display: ComponentDisplay(outlined),
        sources: {
            HTML: HTMLCodeBlock(outlined),
            CSS: CSSCodeBlock(outlinedStyle),
        },
    }),
];
