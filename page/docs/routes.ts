import { registerStyle } from "/lib/style";
import { tags } from "/lib/tags";
import Article from "/component/article";

const { main } = tags;

const createArticle = (articleContent: Element[]) =>
    new Article({
        providedChildren: articleContent,
        articleAttributes: {
            class: "container",
            "data-variant": "article-content",
        },
        articleRootAttributes: {
            class: "container",
            "data-variant": "article",
        },
        hasOutline: true,
        outlineAttributes: {
            class: "outline",
            "data-variant": "article-outline",
        },
        outlineItemAttributes: {
            class: "outline__item",
        },
    });

type ArticleSpec = {
    path: string;
    title: string;
    importArticle: () => Promise<{ default: Element[] }>;
};

const articles: ArticleSpec[] = [
    {
        path: "docs/lorem",
        title: "Lorem",
        importArticle: () => import("/page/docs/articles/lorem"),
    },
    {
        path: "docs/menu",
        title: "Menu",
        importArticle: () => import("/page/docs/articles/menu"),
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
                    createArticle(articleModule.default),
                )
            );
        });
    },
}));
