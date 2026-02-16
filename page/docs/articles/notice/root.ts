import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";

import { tags } from "/lib/tags";
import { CircleCheck, X } from "/component/symbol";
import { tiered, base, actionSegmented } from "/page/docs/articles/notice/css";

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
        style: base.style
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
        style: tiered.style,
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
        style: actionSegmented.style,
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
        style: actionSegmented.style,
        title: "Action segmented with multiple buttons",
    },
};

const panel = (key: string) => {
    const { element, style } = notices[key];
    const sources: any = { HTML: HTMLCodeBlock(element) };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    return ComponentPanel({
        display: ComponentDisplay(element),
        sources,
    });
};

export default [
    H1("Notice"),
    Subheading(
        "A brief, non-modal message used to surface feedback, alerts, or status updates."
    ),
    H2("Base style"),
    P(
        "The base notice is a bordered, rounded flex row with centered alignment and a max-width constraint. A close button is pushed to the inline-end with auto margin."
    ),
    Ul(
        Li(
            "The notice does not auto-dismiss. Add your own timeout or animation logic if it should disappear after a delay."
        ),
        Li(
            "Avoid using the notice for long-form content or multi-step flows. Use a dialog or dedicated page instead."
        )
    ),
    panel("simple"),
    H2("Tiered"),
    P(
        "A two-line layout with a large icon, a bold primary label, and a muted secondary description stacked in a column."
    ),
    panel("tiered"),
    H2("Tiered with control"),
    P(
        "Extends the tiered layout with inline action buttons below the description. Reuses the tiered styles."
    ),
    panel("tieredControl"),
    H2("Action segmented"),
    P(
        "Splits the notice into content and action zones separated by a vertical border. Action buttons stack vertically and stretch to fill the trailing segment."
    ),
    panel("actionSegmented"),
    H2("Action segmented with multiple buttons"),
    P(
        "Same segmented layout with more than one action button, separated by horizontal borders. Reuses the action segmented styles."
    ),
    panel("actionSegmentedMultiple"),
];
