import { tags } from "/lib/tags";
import { formatCSS, formatHTML } from "/lib/highlight/format";
import { tokenize } from "/lib/highlight/tokenize";

const { div, span, hr } = tags;

export const HTMLCodeBlock = (element: HTMLElement, usesInner = false) => {
    const children = [];

    tokenize(
        formatHTML(usesInner ? element.innerHTML : element.outerHTML),
        "html",
        (str, type) => {
            if (str) {
                children.push(
                    span(
                        {
                            class: "text",
                            "data-variant": `token-${type}`,
                        },
                        str
                    )
                );
            } else {
                children.push(str);
            }
        }
    );

    return div(
        {
            class: "container",
            "data-variant": "code-block",
        },
        div(
            {
                class: "container",
                "data-variant": "code-block-header",
            },
            "HTML"
        ),
        hr({
            class: "boundary",
            "data-variant": "component-panel-boundary",
        }),
        div(
            {
                class: "container",
                "data-variant": "code-block-content",
            },
            ...children
        )
    );
};

export const CSSCodeBlock = (styleText: string) => {
    const children = [];

    tokenize(formatCSS(styleText), "css", (str, type) => {
        if (str) {
            children.push(
                span(
                    {
                        class: "text",
                        "data-variant": `token-${type}`,
                    },
                    str
                )
            );
        } else {
            children.push(str);
        }
    });

    return div(
        {
            class: "container",
            "data-variant": "code-block",
        },
        div(
            {
                class: "container",
                "data-variant": "code-block-header",
            },
            "CSS"
        ),
        hr({
            class: "boundary",
            "data-variant": "component-panel-boundary",
        }),
        div(
            {
                class: "container",
                "data-variant": "code-block-content",
            },
            ...children
        )
    );
};
