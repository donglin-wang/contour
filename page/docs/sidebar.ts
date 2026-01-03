import { tags } from "/lib/tags";

const { div, a } = tags;

export const createSidebar = (articles: {path: string, title: string}[]) => div(
    {
        class: "menu",
        "data-variant": "sidebar",
    },
    ...articles.map((spec) =>
        a(
            {
                class: "menu__item",
                href: `/${spec.path}`,
                "data-variant": "sidebar",
            },
            spec.title
        )
    )
);
