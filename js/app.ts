import { initializeRouter } from "/js/store/router";
import docRoutes from "/js/page/docs/routes";
import homeRoutes from "/js/page/home/routes";

const routes = [
    ...docRoutes,
    ...homeRoutes,
]

initializeRouter(routes);
