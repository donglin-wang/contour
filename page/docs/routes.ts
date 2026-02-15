import { setCurrentStyle } from "/store/style";
import Article from "/component/article";
import type { Route } from "/lib/routing";

type ArticleSection = "Foundation" | "Patterns";

type ArticleSpec = {
    path: string;
    title: string;
    section: ArticleSection;
    importArticle: () => Promise<{ default: Element[] }>;
    importStyle?: () => Promise<{ default: string }>;
};

const createArticle = (articleContent: Element[]) =>
    new Article({
        providedChildren: articleContent,
        articleAttributes: {
            class: "container",
            "data-variant": "article-prose",
        },
        articleRootAttributes: {
            class: "container",
            "data-variant": "article",
        },
        hasOutline: true,
        outlineAttributes: {
            class: "menu",
            "data-for": "article-outline",
        },
        outlineItemAttributes: {
            class: "menu__item",
            "data-for": "article-outline",
        },
    }).root;

const importSharedStyle = () =>
    Promise.all([
        import("/page/docs/css"),
        import("/style/variant/text/code.css?inline"),
        import("/style/variant/text/prose.css?inline"),
    ]).then(
        ([docStyleModule, highlightStyleModule, articleStyleModule]) =>
            docStyleModule.default +
            highlightStyleModule.default +
            articleStyleModule.default,
    );

export const articles: ArticleSpec[] = [
    {
        path: "menu",
        title: "Menu",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/menu/root"),
        importStyle: () => import("/page/docs/articles/menu/css"),
    },
    {
        path: "tabs",
        title: "Tabs",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/tabs/root"),
        importStyle: () => import("/page/docs/articles/tabs/css"),
    },
    {
        path: "table",
        title: "Table",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/table/root"),
        importStyle: () => import("/page/docs/articles/table/css"),
    },
    {
        path: "button",
        title: "Trigger",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/trigger/root"),
        importStyle: () => import("/page/docs/articles/trigger/css"),
    },
    {
        path: "accordion",
        title: "Accordion",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/accordion/root"),
        importStyle: () => import("/page/docs/articles/accordion/css"),
    },
    {
        path: "notice",
        title: "Notice",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/notice/root"),
        importStyle: () => import("/page/docs/articles/notice/css"),
    },
    {
        path: "card",
        title: "Card",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/card/root"),
        importStyle: () => import("/page/docs/articles/card/css"),
    },
    {
        path: "marker",
        title: "Marker",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/marker/root"),
        importStyle: () => import("/page/docs/articles/marker/css"),
    },
    {
        path: "boundary",
        title: "Boundary",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/boundary/root"),
        importStyle: () => import("/page/docs/articles/boundary/css"),
    },
    {
        path: "breadcrumb",
        title: "Breadcrumb",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/breadcrumb/root"),
        importStyle: () => import("/page/docs/articles/breadcrumb/css"),
    },
    {
        path: "modal",
        title: "Modal",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/modal/root"),
        importStyle: () => import("/page/docs/articles/modal/css"),
    },
    {
        path: "bar",
        title: "Bar",
        section: "Patterns",
        importArticle: () => import("/page/docs/articles/bar/root"),
        importStyle: () => import("/page/docs/articles/bar/css"),
    },
    {
        path: "overview",
        title: "Overview",
        section: "Foundation",
        importArticle: () =>
            import("/page/docs/articles/overview/root"),
    },
    {
        path: "getting-started",
        title: "Getting Started",
        section: "Foundation",
        importArticle: () =>
            import("/page/docs/articles/getting-started/root"),
    },
    {
        path: "convention",
        title: "Conventions",
        section: "Foundation",
        importArticle: () =>
            import("/page/docs/articles/convention/root"),
    },
    {
        path: "primer",
        title: "Primer",
        section: "Foundation",
        importArticle: () =>
            import("/page/docs/articles/primer/root"),
    },
];

const docRoutes: Route[] = articles.map((article) => ({
    path: `/docs/${article.path}`,
    handler: async () => {
        const sharedStyle = await importSharedStyle();
        const articleModule = await article.importArticle();
        let articleStyle = "";
        if (article.importStyle) {
            const articleStyleModule = await article.importStyle();
            articleStyle = articleStyleModule.default;
        }
        await setCurrentStyle(article.path, sharedStyle, articleStyle);
        document.title = article.title;
        return createArticle(articleModule.default);
    },
}));

export default docRoutes;
