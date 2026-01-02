import { registerStyle } from "/js/lib/style";
import { tags } from "/js/lib/tags";

type StyleModule = {
    default: string;
};

type ArticleModule = {
    createArticle: () => HTMLElement;
};

type SideBarModule = {
    createSidebar: (items: { path: string; title: string }[]) => HTMLElement;
};

const { div } = tags;

const sidebarPath = "/js/page/docs/sidebar";

const articles = [
    {
        path: "docs/introduction",
        title: "Introduction",
        stylePath: "/js/page/docs/style",
        articlePath: "/js/page/docs/articles/introduction",
    },
];

export default articles.map((article) => ({
    path: article.path,
    callback: () => {
        Promise.all([
            import(sidebarPath),
            import(article.articlePath),
            import(article.stylePath),
        ]).then(async (modules) => {
            const [sidebarModule, articleModule, styleModule] = modules as [
                SideBarModule,
                ArticleModule,
                StyleModule
            ];

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
