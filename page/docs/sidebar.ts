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
        },
        ...articles.map((spec) =>
            Link({
                callback: () => {
                    router.navigateTo(spec.path);
                },
                children: [spec.title],
                attributes: {
                    class: "menu__item",
                    href: `/${spec.path}`,
                    "data-variant": "sidebar",
                },
            })
        )
    );
