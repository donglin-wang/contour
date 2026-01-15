import { ComponentDisplay, ComponentPanel, H1 } from "/page/docs/component";

import { tags } from "/lib/tags";
import { CircleCheck, X } from "/component/symbol";

const { div, button, span, img } = tags;

export default [
    H1("Notice"),
    ComponentPanel({
        display: ComponentDisplay(
            div(
                { class: "notice" },
                CircleCheck(),
                "Successfully uploaded",
                button({ class: "trigger", "data-variant": "icon-ghost" }, X())
            )
        ),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            div(
                { class: "notice", "data-variant": "tiered" },
                div(
                    { class: "notice__symbol", "data-variant": "tiered" },
                    CircleCheck({ class: "symbol m-x-large m-success" })
                ),
                div(
                    { class: "notice__section", "data-variant": "tiered" },
                    span(
                        { class: "text", "data-variant": "notice-primary" },
                        "Success"
                    ),
                    span(
                        { class: "text", "data-variant": "notice-secondary" },
                        "You have successfully uploaded your file"
                    )
                ),
                div(
                    { class: "notice__close", "data-variant": "tiered" },
                    button(
                        { class: "trigger", "data-variant": "icon-ghost" },
                        X()
                    )
                )
            )
        ),
    }),
    ComponentPanel({
        display: ComponentDisplay(
            div(
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
                    })
                ),
                div(
                    {
                        class: "notice__section",
                        "data-variant": "action-segmented",
                    },
                    span(
                        { class: "text", "data-variant": "notice-primary" },
                        "Linux user"
                    ),
                    span(
                        { class: "text", "data-variant": "notice-secondary" },
                        "You should stop using Windows"
                    )
                ),
                button(
                    {
                        class: "trigger",
                        "data-variant": "notice-segmented-action",
                    },
                    "Reply"
                )
            )
        ),
    }),
];
