import { Router } from "/lib/routing";
import {
    createScaffold,
    createHomeButton,
    createSidebar,
    createSidebarToggle,
} from "/page/component";
import homeRoutes from "/page/home/routes";
import docRoutes from "/page/docs/routes";
import { articles } from "/page/docs/routes";
import { tags } from "/lib/tags";

const { div } = tags;

const root = div({
    class: "container",
    "data-for": "contour-root",
});

const router = new Router(root);

for (const route of [...homeRoutes, ...docRoutes]) {
    router.addRoute(route);
}

const navigateTo = (path: string) => router.navigate(path);

document.body.replaceChildren(
    ...createScaffold(
        createSidebar(articles, navigateTo),
        createSidebarToggle(),
        createHomeButton(navigateTo),
        root,
    ),
);

router.start();
