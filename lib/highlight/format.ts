const isSelfClosing = (element: string) =>
    element.startsWith("input") ||
    element.startsWith("hr") ||
    element.startsWith("img");

export function formatHTML(html: string) {
    const tab = "    ";
    let result = "";
    let indent = "";

    html.split(/>\s*</).forEach((element) => {
        if (element.match(/^\/\w/)) {
            indent = indent.substring(tab.length);
        }

        result += `${indent}<${element}>\r\n`;

        if (element.match(/^<?\w[^>]*[^/]$/) && !isSelfClosing(element)) {
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
            if (result.slice(-3) === "\n\n}") {
                result = `${result.slice(0, -2)}}`;
            }
            result += "\n\n";
        }
    }

    return result.trim();
};
