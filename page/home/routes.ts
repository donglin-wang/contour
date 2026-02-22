import type { Route, Router } from "/lib/routing";
import homeStyle from "/page/home/css";
import { addStyle } from "/store/style";

const homeRoutes: Route[] = [
    {
        path: "/",
        handler: async (router: Router) => {
            const homeElement = await import("/page/home/root");
            await addStyle("home", homeStyle);
            return homeElement.default(router);
        },
    },
];

export default homeRoutes;
