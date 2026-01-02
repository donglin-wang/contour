import { tags } from "/js/lib/tags";
import { formatCSS, formatHTML } from "/js/lib/highlight/format";
import { tokenize } from "/js/lib/highlight/tokenize";

const { div, span } = tags;

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
        ...children
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
        ...children
    );
};
