import { registerStyle } from "/lib/style";
import { tags } from "/lib/tags";

import type Article from "/component/article";

const { main } = tags;

type ArticleSpec = {
    path: string;
    title: string;
    importArticle: () => Promise<{createArticle: () => Article}>
}

const articles: ArticleSpec[] = [
    {
        path: "docs/lorem",
        title: "Lorem",
        importArticle: () => import("/page/docs/articles/lorem"),
    },
];

export default articles.map((article) => ({
    path: article.path,
    callback: () => {
        Promise.all([
            import("/page/docs/sidebar"),
            import("/page/docs/style"),
            article.importArticle(),
        ]).then(async ([sidebarModule, styleModule, articleModule]) => {
            await registerStyle(styleModule.default);
            document.body.replaceChildren(
                main(
                    {
                        class: "container",
                        "data-variant": "main",
                    },
                    sidebarModule.createSidebar(articles),
                    articleModule.createArticle()
                )
            );
        });
    },
}));
