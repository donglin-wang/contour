import { tags } from "/lib/tags";
import { Link } from "/component/link";
import { getRouter } from "/store/router";

const router = getRouter();

const { div } = tags;

export const createSidebar = (articles: { path: string; title: string }[]) =>
    div(
        {
            class: "menu",
            "data-variant": "sidebar",
            "data-open": null,
        },
        ...articles.map((spec) =>
            Link({
                callback: async () => {
                    await router.navigateTo("docs/" + spec.path);
                },
                children: [spec.title],
                attributes: {
                    class: "menu__item",
                    href: `/docs/${spec.path}`,
                    "data-variant": "sidebar",
                },
            })
        )
    );
