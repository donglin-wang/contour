import Router from "./router";

import type { Routes, RouteSpec } from "./router";


const routeSpecs: RouteSpec[] = [
    {
        path: "introduction",
        title: "Introduction",
        body: import("/js/docs/introduction").then((exported) => exported.default)
    },
    {
        path: 
    }
]


const routes: Routes = [
    {
        path: "introduction",
        callback: () => {
            import("/js/docs/introduction").then(({root}) => document.body.replaceChildren(wrapArticle(root)))
        }
    },
    {
        path: "list",
        callback: () => {
            import("/js/docs/list").then(({root}) => document.body.replaceChildren(wrapArticle(root)))
        }
    },
    {
        path: "mutex",
        callback: () => {
            import("/js/docs/mutex").then(({root}) => {document.body.replaceChildren(wrapArticle(root)); registerMutexBehavior()})
        }
    },
    {
        path: "table",
        callback: () => {
            import("/js/docs/table").then(({root}) => document.body.replaceChildren(wrapArticle(root)))
        }
    },
    {
        path: "",
        callback: () => {
            document.body.replaceChildren(hero)
        }
    }
]
