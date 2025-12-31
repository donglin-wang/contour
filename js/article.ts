import { tags } from "/js/tags";
import type { Child } from "/js/tags"; 

const { article, section, h1, h2, p, ul, ol, li, code } = tags;

export const Article = (...children: Child[]) => {
    return article(
        {
            class: "container",
            "data-variant": "article",
        },
        ...children
    );
};

export const Section = (...children: Child[]) =>
    section(
        {
            class: "container",
            "data-variant": "article-section",
        },
        ...children
    );

export const H1 = (text: string) =>
    h1(
        {
            class: "typography",
            "data-variant": "h1",
        },
        text
    );

export const H2 = (text: string) =>
    h2(
        {
            class: "typography",
            "data-variant": "h2",
        },
        text
    );

export const P = (...children: Child[]) =>
    p(
        {
            class: "typography",
            "data-variant": "p",
        },
        ...children
    );

export const Ul = (...children: Child[]) =>
    ul(
        {
            class: "typography",
            "data-variant": "list",
        },
        ...children
    );

export const Ol = (...children: Child[]) =>
    ol(
        {
            class: "typography",
            "data-variant": "list",
        },
        ...children
    );

export const Li = (...children: Child[]) =>
    li(
        {
            class: "typography",
            "data-variant": "list-item",
        },
        ...children
    );

export const CodeInline = (text: string) =>
    code(
        {
            class: "typography",
            "data-variant": "inline-code",
        },
        text
    );

export const registerStyle = (styleText: string) => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(styleText);
    document.adoptedStyleSheets.push(sheet);
    return styleText;
};
