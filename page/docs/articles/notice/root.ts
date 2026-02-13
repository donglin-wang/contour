import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";

import { tags } from "/lib/tags";
import { CircleCheck, X } from "/component/symbol";
import actionSegmentedStyle from "/style/variant/notice/actionSegmented.css?inline";
import controlStyle from "/style/variant/notice/control.css?inline";
import tieredStyle from "/style/variant/notice/tiered.css?inline";

const { div, button, span, img } = tags;

const notices: Record<
    string,
    { element: HTMLElement; style?: string; title?: string }
> = {
    simple: {
        element: div(
            { class: "notice" },
            CircleCheck({ class: "symbol m-large" }),
            "Successfully uploaded",
            button({ class: "trigger m-ghost", "data-variant": "icon" }, X()),
        ),
    },
    tiered: {
        element: div(
            { class: "notice", "data-variant": "tiered" },
            div(
                { class: "notice__symbol", "data-variant": "tiered" },
                CircleCheck({ class: "symbol m-x-large m-success" }),
            ),
            div(
                { class: "notice__section", "data-variant": "tiered" },
                span(
                    { class: "text", "data-variant": "notice-primary" },
                    "Success",
                ),
                span(
                    { class: "text", "data-variant": "notice-secondary" },
                    "You have successfully uploaded your file",
                ),
            ),
            div(
                { class: "notice__close", "data-variant": "tiered" },
                button(
                    { class: "trigger m-ghost", "data-variant": "icon" },
                    X(),
                ),
            ),
        ),
        style: tieredStyle,
        title: "Tiered",
    },
    tieredControl: {
        element: div(
            { class: "notice", "data-variant": "tiered" },
            div(
                { class: "notice__symbol", "data-variant": "tiered" },
                CircleCheck({ class: "symbol m-x-large m-success" }),
            ),
            div(
                { class: "notice__section", "data-variant": "tiered" },
                span(
                    { class: "text", "data-variant": "notice-primary" },
                    "Success",
                ),
                span(
                    { class: "text", "data-variant": "notice-secondary" },
                    "You have successfully uploaded your file",
                ),
                div(
                    {
                        class: "notice__section",
                        "data-variant": "tiered-control",
                    },
                    button({ class: "trigger m-tight" }, "Accept"),
                    button({ class: "trigger m-tight" }, "Decline"),
                ),
            ),
            div(
                { class: "notice__close", "data-variant": "tiered" },
                button(
                    { class: "trigger m-ghost", "data-variant": "icon" },
                    X(),
                ),
            ),
        ),
        style: controlStyle,
        title: "Tiered with control",
    },
    actionSegmented: {
        element: div(
            { class: "notice", "data-variant": "action-segmented" },
            div(
                {
                    class: "notice__section",
                    "data-variant": "action-segmented",
                },
                img({
                    class: "media",
                    "data-variant": "notice-avatar",
                    src: "/asset/image/linux.jpg",
                    alt: "Linux penguin",
                }),
            ),
            div(
                {
                    class: "notice__section",
                    "data-variant": "action-segmented",
                },
                span(
                    { class: "text", "data-variant": "notice-primary" },
                    "Linux user",
                ),
                span(
                    { class: "text", "data-variant": "notice-secondary" },
                    "You should stop using Windows",
                ),
            ),
            div(
                {
                    class: "notice__section",
                    "data-variant": "action-segmented-control",
                },
                button(
                    {
                        class: "trigger",
                        "data-variant": "notice-segmented-action",
                    },
                    "Reply",
                ),
            ),
        ),
        style: actionSegmentedStyle,
        title: "Action segmented",
    },
    actionSegmentedMultiple: {
        element: div(
            { class: "notice", "data-variant": "action-segmented" },
            div(
                {
                    class: "notice__section",
                    "data-variant": "action-segmented",
                },
                img({
                    class: "media",
                    "data-variant": "notice-avatar",
                    src: "/asset/image/linux.jpg",
                    alt: "Linux penguin",
                }),
            ),
            div(
                {
                    class: "notice__section",
                    "data-variant": "action-segmented",
                },
                span(
                    { class: "text", "data-variant": "notice-primary" },
                    "Linux user",
                ),
                span(
                    { class: "text", "data-variant": "notice-secondary" },
                    "You should stop using Windows",
                ),
            ),
            div(
                {
                    class: "notice__section",
                    "data-variant": "action-segmented-control",
                },
                button(
                    {
                        class: "trigger",
                        "data-variant": "notice-segmented-action",
                    },
                    "Reply",
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "notice-segmented-action",
                    },
                    "Don't allow",
                ),
            ),
        ),
        style: actionSegmentedStyle,
        title: "Action segmented with multiple buttons",
    },
};

const articleElements = [H1("Notice")];

Object.values(notices).forEach(({ element, style, title }) => {
    if (title) {
        articleElements.push(H2(title));
    }
    const sources: any = {
        HTML: HTMLCodeBlock(element),
    };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    articleElements.push(
        ComponentPanel({
            display: ComponentDisplay(element),
            sources: sources,
        }),
    );
});

export default articleElements;
