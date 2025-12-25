import van from "/js/van/van";
import type { ValidChildDomValue } from "/js/van/van";

const { article, section, h1, h2, p, ul, ol, li, code } = van.tags;

export const Article = (...children: ValidChildDomValue[]) => {
    return article(
        {
            class: "container",
            "data-variant": "article",
        },
        ...children
    );
};

export const Section = (...children: ValidChildDomValue[]) =>
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

export const P = (...children: ValidChildDomValue[]) =>
    p(
        {
            class: "typography",
            "data-variant": "p",
        },
        ...children
    );

export const Ul = (...children: ValidChildDomValue[]) =>
    ul(
        {
            class: "typography",
            "data-variant": "list",
        },
        ...children
    );

export const Ol = (...children: ValidChildDomValue[]) =>
    ol(
        {
            class: "typography",
            "data-variant": "list",
        },
        ...children
    );

export const Li = (...children: ValidChildDomValue[]) =>
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
