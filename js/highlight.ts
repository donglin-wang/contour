import van from "/js/van/van";

import { tokenize } from "/js/parser/tokenize";

const { div, span } = van.tags;


export function formatHTML(html: string) {
    var tab = "    ";
    var result = "";
    var indent = "";

    html.split(/>\s*</).forEach(function (element) {
        if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
        }

        result += indent + "<" + element + ">\r\n";

        if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
            indent += tab;
        }
    });

    return result.substring(1, result.length - 3);
}

export const formatCSS = (cssString: string) => {
    cssString = cssString.trim();

    const indent = "    ";
    let result = "";
    let level = 0;
    let inStatement = false;
    let isFirstChar = false;

    for (const char of cssString) {
        if (char.trim() === "" && !inStatement) {
            continue;
        }

        isFirstChar = inStatement === false;
        inStatement = true;

        if (char === "{" || char === ";") {
            level += char === "{" ? 1 : 0;
            inStatement = false;
        } else if (char === "}") {
            level -= 1;
            inStatement = false;
        }

        if (isFirstChar) {
            for (let i = 0; i < level; i++) {
                result += indent;
            }
        }

        result += char;

        if (char === "{" || char === ";") {
            result += "\n";
        } else if (char === "}") {
            result += "\n\n";
        }
    }

    return result.trim();
};

export const highlightHTML = (element: HTMLElement, usesInner = false) => {
    const children = [];

    tokenize(
        formatHTML(usesInner ? element.innerHTML : element.outerHTML),
        "html",
        (str, type) => {
            if (str) {
                children.push(
                    span(
                        {
                            class: "typography",
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

export const highlightCSS = (styleText: string) => {
    const children = [];

    tokenize(
        formatCSS(styleText),
        "css",
        (str, type) => {
            if (str) {
                children.push(
                    span(
                        {
                            class: "typography",
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
