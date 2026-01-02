import Router from "/js/lib/routing";
import type { Route } from "/js/lib/routing";

let routerInstance: Router | null = null;

export function initializeRouter(routes: Route[]): Router {
    if (routerInstance) {
        console.warn("Router already initialized");
        return routerInstance;
    }
    routerInstance = new Router(routes);
    return routerInstance;
}

export function getRouter(): Router {
    if (!routerInstance) {
        throw new Error(
            "Router not initialized. Call initializeRouter() first."
        );
    }
    return routerInstance;
}
