import van from "/js/van.js";

const { div } = van.tags;

/**
 * @param {string} html
 */
export function formatHTML(html) {
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

/**
 * @param {string} cssString
 */
export const formatCSS = (cssString) => {
    cssString = cssString.trim();
    const indent = "    ";
    let result = "";
    let level = 0;

    let newLine = false;
    let inStatement = true;
    for (const char of cssString) {
        const isWhiteSpace = char.trim() === "";

        if (isWhiteSpace && !inStatement) {
            continue;
        }

        inStatement = true;

        if (char === "{") {
            result = result.concat(char);
            newLine = true;
            inStatement = false;
            level += 1;
            continue;
        } else if (char === ";") {
            result = result.concat(char);
            newLine = true;
            inStatement = false;
            continue;
        }

        if (newLine) {
            if (char !== "}") {
                newLine = false;
            } else {
                level -= 1;
                inStatement = false;
            }
            result = result.concat("\n");
            for (let i = 0; i < level; i++) {
                result = result.concat(indent);
            }
        }

        result = result.concat(char);
    }

    return result;
};

export const highlightHTML = (element, usesInner = false) =>
    div(
        {
            class: "shj-lang-html",
        },
        formatHTML(usesInner ? element.innerHTML : element.outerHTML)
    );

export const highlightCSS = (styleText) =>
    div(
        {
            class: "shj-lang-css",
        },
        formatCSS(styleText)
    );
