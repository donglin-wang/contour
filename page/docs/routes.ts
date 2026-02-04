import { setCurrentStyle } from "/store/style";
import { tags } from "/lib/tags";
import Article from "/component/article";
import { House, PanelLeftClose, Sun } from "/component/symbol";
import { ThemeToggleTrigger } from "/page/docs/component";

type ArticleSpec = {
    path: string;
    title: string;
    importArticle: () => Promise<{ default: Element[] }>;
    importStyle?: () => Promise<{ default: string }>;
};

const { main, nav, div, button } = tags;

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
            class: "outline",
            "data-variant": "article-outline",
        },
        outlineItemAttributes: {
            class: "outline__item",
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
        path: "lorem",
        title: "Lorem",
        importArticle: () => import("/page/docs/articles/lorem"),
    },
    {
        path: "menu",
        title: "Menu",
        importArticle: () => import("/page/docs/articles/menu/root"),
        importStyle: () => import("/page/docs/articles/menu/style"),
    },
    {
        path: "tabs",
        title: "Tabs",
        importArticle: () => import("/page/docs/articles/tabs/root"),
        importStyle: () => import("/page/docs/articles/tabs/style"),
    },
    {
        path: "table",
        title: "Table",
        importArticle: () => import("/page/docs/articles/table/root"),
        importStyle: () => import("/page/docs/articles/table/style"),
    },
    {
        path: "button",
        title: "Trigger",
        importArticle: () => import("/page/docs/articles/trigger/root"),
        importStyle: () => import("/page/docs/articles/trigger/style"),
    },
    {
        path: "accordion",
        title: "Accordion",
        importArticle: () => import("/page/docs/articles/accordion/root"),
        importStyle: () => import("/page/docs/articles/accordion/style"),
    },
    {
        path: "notice",
        title: "Notice",
        importArticle: () => import("/page/docs/articles/notice/root"),
        importStyle: () => import("/page/docs/articles/notice/style"),
    },
    {
        path: "card",
        title: "Card",
        importArticle: () => import("/page/docs/articles/card/root"),
        importStyle: () => import("/page/docs/articles/card/style"),
    },
    {
        path: "marker",
        title: "Marker",
        importArticle: () => import("/page/docs/articles/marker/root"),
        importStyle: () => import("/page/docs/articles/marker/style"),
    },
    {
        path: "boundary",
        title: "Boundary",
        importArticle: () => import("/page/docs/articles/boundary/root"),
        importStyle: () => import("/page/docs/articles/boundary/style"),
    },
    {
        path: "breadcrumb",
        title: "Breadcrumb",
        importArticle: () => import("/page/docs/articles/breadcrumb/root"),
        importStyle: () => import("/page/docs/articles/breadcrumb/style"),
    },
    {
        path: "modal",
        title: "Modal",
        importArticle: () => import("/page/docs/articles/modal/root"),
        importStyle: () => import("/page/docs/articles/modal/style"),
    },
    {
        path: "bar",
        title: "Bar",
        importArticle: () => import("/page/docs/articles/bar/root"),
        importStyle: () => import("/page/docs/articles/bar/style"),
    },
];

const routeSegments = [
    {
        pattern: "docs",
        callback: (root) => root,
        children: articles.map((article) => ({
            pattern: article.path,
            callback: async (root: HTMLElement) => {
                const sharedStyle = await importSharedStyle();
                const articleModule = await article.importArticle();
                let articleStyle = "";
                if (article.importStyle) {
                    const articleStyleModule = await article.importStyle();
                    articleStyle = articleStyleModule.default;
                }
                await setCurrentStyle(article.path, sharedStyle, articleStyle);
                document.title = article.title;
                root.replaceChildren(createArticle(articleModule.default));
            },
            children: [],
        })),
    },
];

export default routeSegments;
