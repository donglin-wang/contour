import { tags } from "/lib/tags";

import type { Child } from "/lib/tags";

const { h1, h2, p, ul, ol, li, code, div, hr } = tags;

export const H1 = (text: string) =>
    h1(
        {
            class: "text",
            "data-variant": "h1",
        },
        text
    );

export const H2 = (text: string) =>
    h2(
        {
            class: "text",
            "data-variant": "h2",
        },
        text
    );

export const P = (...children: Child[]) =>
    p(
        {
            class: "text",
            "data-variant": "p",
        },
        ...children
    );

export const Ul = (...children: Child[]) =>
    ul(
        {
            class: "text",
            "data-variant": "list",
        },
        ...children
    );

export const Ol = (...children: Child[]) =>
    ol(
        {
            class: "text",
            "data-variant": "list",
        },
        ...children
    );

export const Li = (...children: Child[]) =>
    li(
        {
            class: "text",
            "data-variant": "list-item",
        },
        ...children
    );

export const CodeInline = (text: string) =>
    code(
        {
            class: "text",
            "data-variant": "inline-code",
        },
        text
    );

export const ComponentDisplay = (child: Element) =>
    div(
        {
            class: "container",
            "data-variant": "component-display",
        },
        child
    );

export const ComponentPanel = ({
    display,
    sources = {},
}: {
    display: Element;
    sources?: Record<string, Element>;
}) => {
    const codeBlocks = [];
    const numSources = Object.keys(sources).length;
    Object.entries(sources).forEach(([key, value], index) => {
        codeBlocks.push(
            div(
                {
                    class: "container",
                    "data-variant": "code-block",
                },
                div(
                    {
                        class: "container",
                        "data-variant": "code-block-header",
                    },
                    key
                ),
                hr({
                    class: "boundary",
                    "data-variant": "component-panel-boundary",
                }),
                value
            )
        );
        if (index < numSources - 1) {
            codeBlocks.push(
                hr({
                    class: "boundary",
                    "data-variant": "component-panel-boundary",
                })
            );
        }
    });

    return div(
        {
            class: "container",
            "data-variant": "component-panel",
        },
        display,
        hr({
            class: "boundary",
            "data-variant": "component-panel-boundary",
        }),
        ...codeBlocks
    );
};

export const inline = (strings: TemplateStringsArray, ...args: Child[]) => {
    const children: Child[] = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] !== "") {
            children.push(strings[i]);
        }

        if (i >= args.length) {
            continue;
        }

        if (args[i] instanceof Element) {
            children.push(args[i]);
        } else {
            children.push(args[i].toString());
        }
    }
    return children;
};
