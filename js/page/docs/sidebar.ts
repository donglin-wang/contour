import { tags } from "/js/lib/tags";

const { div, a } = tags;

export const createSidebar = (articles: {path: string, title: string}[]) => div(
    {
        class: "list",
        "data-variant": "contour-menu",
    },
    ...articles.map((spec) =>
        a(
            {
                class: "list__item",
                href: `/${spec.path}`,
                "data-variant": "contour-menu",
            },
            spec.title
        )
    )
);
