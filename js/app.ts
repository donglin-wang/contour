import Router from "/js/router";
import { tags } from "/js/tags";
import { registerStyle } from "/js/article";

import type { Route } from "./router";

export type PageSpec = {
    path: string;
    title: string;
    body: Promise<HTMLElement>;
    includeSideNav?: boolean;
    excludedFromSideNav?: boolean;
};

const { div, a } = tags;

registerStyle(/*css*/ `
@layer variant {
    .container[data-variant="contour-root"] {
        display: flex;
    }

    .list[data-variant="contour-menu"] {
        width: 20rem;
        border: none;
        border-radius: 0;
        padding: var(--space-4);
    }

    .list__item[data-variant="contour-menu"] {
        text-decoration: none;
        color: var(--color-1);
        border-radius: 5px;
        cursor: pointer;
        --list-item-hover-background: var(--background-color-2);
    }
}`);

const pageSpecs: PageSpec[] = [
    {
        path: "introduction",
        title: "Introduction",
        body: import("/js/docs/introduction").then(
            (exported) => exported.default
        ),
        includeSideNav: true,
    },
    {
        path: "list",
        title: "List",
        body: import("/js/docs/list").then((exported) => exported.default),
        includeSideNav: true,
    },
    {
        path: "trigger",
        title: "Trigger",
        body: import("/js/docs/trigger").then((exported) => exported.default),
        includeSideNav: true,
    },
    {
        path: "mutex",
        title: "Mutex",
        body: import("/js/docs/mutex").then((exported) => exported.default),
        includeSideNav: true,
    },
    {
        path: "table",
        title: "Table",
        body: import("/js/docs/table").then((exported) => exported.default),
        includeSideNav: true,
    },
    {
        path: "",
        title: "Contour",
        body: import("/js/home").then((exported) => exported.default),
        excludedFromSideNav: true,
    },
];

const sidenav = div(
    {
        class: "list",
        "data-variant": "contour-menu",
    },
    ...pageSpecs.map((spec) =>
        spec.excludedFromSideNav
            ? null
            : a(
                  {
                      class: "list__item",
                      href: `/${spec.path}`,
                      "data-variant": "contour-menu",
                  },
                  spec.title
              )
    )
);

const routes: Route[] = pageSpecs.map((spec) => ({
    path: spec.path,
    callback: () => {
        document.title = spec.title;
        spec.body.then((root) => {
            if (spec.includeSideNav) {
                document.body.replaceChildren(
                    div(
                        {
                            class: "container",
                            "data-variant": "contour-root",
                        },
                        sidenav,
                        root
                    )
                );
            } else {
                document.body.replaceChildren(root);
            }
        });
    },
}));

const router = new Router(routes);
