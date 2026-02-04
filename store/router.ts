import Router from "/lib/routing";
import type { RouterSpec } from "/lib/routing";

let routerInstance: Router | null = null;

export const getRouter = () => {
    if (!routerInstance) {
        routerInstance = new Router();
    }
    return routerInstance;
}

export const initializeRouter = (spec: RouterSpec) => {
    if (!routerInstance) {
        routerInstance = new Router();
    }
    routerInstance.routeSegments = spec.routeSegments;
    routerInstance.rootCallback = spec.rootCallback;
    return routerInstance;
}
