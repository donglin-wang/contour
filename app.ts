import { initializeRouter } from "/store/router";
import { initializeStyleRegistry } from "/store/style";
import docRoutes from "/page/docs/routes";
import homeRoutes from "/page/home/routes";

const routes = [
    ...docRoutes,
    ...homeRoutes,
]

initializeRouter(routes);
initializeStyleRegistry();
