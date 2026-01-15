import { setCurrentStyle } from "/store/style";
import { tags } from "/lib/tags";
import Article from "/component/article";

type ArticleSpec = {
    path: string;
    title: string;
    importArticle: () => Promise<{ default: Element[] }>;
    importStyle?: () => Promise<{ default: string }>;
};

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
    }).root;

const importSharedStyle = () =>
    Promise.all([
        import("/page/docs/style.css?inline"),
        import("/style/variant/highlight.css?inline"),
        import("/style/variant/article.css?inline"),
    ]).then(
        ([docStyleModule, highlightStyleModule, articleStyleModule]) =>
            docStyleModule.default +
            highlightStyleModule.default +
            articleStyleModule.default
    );

const articles: ArticleSpec[] = [
    {
        path: "docs/lorem",
        title: "Lorem",
        importArticle: () => import("/page/docs/articles/lorem"),
    },
    {
        path: "docs/menu",
        title: "Menu",
        importArticle: () => import("/page/docs/articles/menu/root"),
        importStyle: () => import("/page/docs/articles/menu/style"),
    },
    {
        path: "docs/tabs",
        title: "Tabs",
        importArticle: () => import("/page/docs/articles/tabs/root"),
        importStyle: () => import("/page/docs/articles/tabs/style"),
    },
    {
        path: "docs/table",
        title: "Table",
        importArticle: () => import("/page/docs/articles/table/root"),
        importStyle: () => import("/page/docs/articles/table/style"),
    },
    {
        path: "docs/button",
        title: "Trigger",
        importArticle: () => import("/page/docs/articles/trigger/root"),
        importStyle: () => import("/page/docs/articles/trigger/style"),
    },
    {
        path: "docs/accordion",
        title: "Accordion",
        importArticle: () => import("/page/docs/articles/accordion/root"),
        importStyle: () => import("/page/docs/articles/accordion/style"),
    },
    {
        path: "docs/notice",
        title: "Notice",
        importArticle: () => import("/page/docs/articles/notice/root"),
        importStyle: () => import("/page/docs/articles/notice/style"),
    },
];

export default articles.map((article) => ({
    path: article.path,
    callback: () => {
        Promise.all([
            import("/page/docs/sidebar"),
            importSharedStyle(),
            article.importArticle(),
            article.importStyle ? article.importStyle() : { default: "" },
        ]).then(
            async ([
                sidebarModule,
                sharedStyle,
                articleModule,
                articleStyle,
            ]) => {
                await setCurrentStyle(
                    article.path,
                    sharedStyle,
                    articleStyle.default
                );
                document.title = article.title;
                document.body.replaceChildren(
                    main(
                        {
                            class: "container",
                            "data-variant": "main",
                        },
                        sidebarModule.createSidebar(articles),
                        createArticle(articleModule.default)
                    )
                );
            }
        );
    },
}));
