import van from "/js/van.js";
import { formatHTML } from "/js/beautify.js";

const { div } = van.tags;

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
        styleText
    );

export const registerStyle = (styleText) => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styleText);
    document.adoptedStyleSheets.push(sheet);
    return styleText;
};
