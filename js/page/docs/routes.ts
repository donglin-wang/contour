import { registerStyle } from "/js/lib/style";
import { tags } from "/js/lib/tags";

import type Article from "/js/components/article";

const { div } = tags;

type ArticleSpec = {
    path: string;
    title: string;
    importStyle: () => Promise<{default: string}>;
    importArticle: () => Promise<{createArticle: () => Article}>
}

const articles: ArticleSpec[] = [
    {
        path: "docs/introduction",
        title: "Introduction",
        importStyle: () => import("/js/page/docs/style"),
        importArticle: () => import("/js/page/docs/articles/introduction"),
    },
];

export default articles.map((article) => ({
    path: article.path,
    callback: () => {
        Promise.all([
            import("/js/page/docs/sidebar"),
            article.importArticle(),
            article.importStyle(),
        ]).then(async ([sidebarModule, articleModule, styleModule]) => {
            await registerStyle(styleModule.default);
            document.body.replaceChildren(
                div(
                    {
                        class: "container",
                        "data-variant": "contour-root",
                    },
                    sidebarModule.createSidebar(articles),
                    articleModule.createArticle()
                )
            );
        });
    },
}));
