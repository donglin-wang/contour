export type Route = {
    path: string;
    callback: (param?: string) => void;
};

class Router {
    routes: Route[];

    constructor(routes) {
        this.routes = routes;
        this.loadInitialRoute();
        window.addEventListener("popstate", () => {
            this.loadInitialRoute();
        });
    }

    getCurrentURL() {
        const path = window.location.pathname;
        return path;
    }

    matchUrlToRoute(urlSegs: string[]) {
        const matchedRoute = this.routes.find(
            (route) => route.path === urlSegs.join("/")
        );
        return matchedRoute;
    }

    loadInitialRoute() {
        const pathnameSplit = window.location.pathname.split("/");
        const pathSegs = pathnameSplit.length > 1 ? pathnameSplit.slice(1) : "";

        this.loadRoute(...pathSegs);
    }

    loadRoute(...urlSegs) {
        const matchedRoute = this.matchUrlToRoute(urlSegs);
        if (!matchedRoute) {
            throw new Error("Route not found");
        }
        matchedRoute.callback();
    }

    navigateTo(path) {
        window.history.pushState({}, "", path);
        this.loadRoute(path);
    }
}

export default Router;
