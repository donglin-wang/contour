import { initializeRouter } from "/store/router";
import { initializeStyleRegistry } from "/store/style";
import rootCallback from "/page/routes";
import homeRoutes from "/page/home/routes";
import docRoutes from "/page/docs/routes";

const router = initializeRouter({
    routeSegments: [...homeRoutes, ...docRoutes],
    rootCallback: rootCallback,
});

await router.loadPath();
initializeStyleRegistry();
