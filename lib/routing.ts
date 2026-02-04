export type RouteSegment = {
    pattern: string | RegExp;
    children: RouteSegment[];
    callback: (
        root: HTMLElement,
        match?: RegExpMatchArray,
    ) => Promise<HTMLElement | void>;
};

export type RouterSpec = {
    routeSegments: RouteSegment[];
    rootCallback?: () => HTMLElement;
};

class Router {
    routeSegments: RouteSegment[] = [];
    rootCallback: () => HTMLElement = () => document.body;

    constructor() {
        window.addEventListener("popstate", async () => {
            this.loadPath();
        });
    }

    async loadPath() {
        const desiredPath = (window.location.pathname + "/")
            .split("/")
            .slice(1);
        let i = 0;
        let j = 0;
        let currentCandidates = this.routeSegments;
        let root = this.rootCallback();

        while (i < desiredPath.length && j < currentCandidates.length) {
            let match = undefined;
            const segment = currentCandidates[j];

            if (typeof segment.pattern === "string") {
                if (segment.pattern !== desiredPath[i]) {
                    j++;
                    continue;
                }
            } else {
                match = desiredPath[i].match(segment.pattern);
                if (!match) {
                    j++;
                    continue;
                }
            }
            const newRoot = await segment.callback(root, match);
            root = newRoot ? newRoot : root;
            currentCandidates = segment.children;
            i++;
            j = 0;
        }

        const routeMatch =
            desiredPath.length === i ||
            (desiredPath.length === i + 1 && desiredPath[i] === "");

        console.log(desiredPath.length, i)

        if (!routeMatch) {
            throw new Error("Route not found");
        }
    }

    navigateTo(path) {
        window.history.pushState({}, "", "/" + path);
        this.loadPath();
    }
}

export default Router;
