import van from "/js/van.js";

const { article, section, h1, h2, p, ul, ol, li, code } = van.tags;

export const Article = (...children) => {
    return article(
        {
            class: "container",
            "data-variant": "article",
        },
        ...children
    );
};

export const Section = (...children) =>
    section(
        {
            class: "container",
            "data-variant": "article-section",
        },
        ...children
    );

export const H1 = (text) =>
    h1(
        {
            class: "typography",
            "data-variant": "h1",
        },
        text
    );

export const H2 = (text) =>
    h2(
        {
            class: "typography",
            "data-variant": "h2",
        },
        text
    );

export const P = (...children) =>
    p(
        {
            class: "typography",
            "data-variant": "p",
        },
        ...children
    );

export const Ul = (...children) =>
    ul(
        {
            class: "typography",
            "data-variant": "list",
        },
        ...children
    );

export const Ol = (...children) =>
    ol(
        {
            class: "typography",
            "data-variant": "list",
        },
        ...children
    );

export const Li = (...children) =>
    li(
        {
            class: "typography",
            "data-variant": "list-item",
        },
        ...children
    );

export const CodeInline = (text) =>
    code(
        {
            class: "typography",
            "data-variant": "inline-code",
        },
        text
    );

export const registerStyle = (styleText) => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styleText);
    document.adoptedStyleSheets.push(sheet);
    return styleText;
};
