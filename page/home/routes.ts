import homeStyle from "/page/home/css";
import { setCurrentStyle } from "/store/style";

import type { Route, Router } from "/lib/routing";

const homeRoutes: Route[] = [
    {
        path: "/",
        handler: async (router: Router) => {
            const homeElement = await import("/page/home/root");
            await setCurrentStyle("home", homeStyle);
            document.title = "Home";
            return homeElement.default(router);
        },
    },
];

export default homeRoutes;
