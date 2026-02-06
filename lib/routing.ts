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
    private eventHandler;

    constructor() {
        this.eventHandler = () => this.loadPath();
        window.addEventListener("popstate", this.eventHandler);
    }

    destroy() {
        window.removeEventListener("popstate", this.eventHandler);
    }

    getDesiredSegments(): string[] {
        const segments = window.location.pathname.slice(1).split("/");
        if (segments[0] === "") {
            return [""];
        }
        if (segments[segments.length - 1] === "") {
            return segments;
        }
        return [...segments, ""];
    }

    async loadPath() {
        const segments = this.getDesiredSegments();
        let i = 0;
        let j = 0;
        let currentCandidates = this.routeSegments;
        let root = this.rootCallback();

        while (i < segments.length && j < currentCandidates.length) {
            let match = undefined;
            const segment = currentCandidates[j];

            if (typeof segment.pattern === "string") {
                if (segment.pattern !== segments[i]) {
                    j++;
                    continue;
                }
            } else {
                match = segments[i].match(segment.pattern);
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
            i === segments.length ||
            (i === segments.length - 1 && segments[i] === "");

        if (!routeMatch) {
            throw new Error("Route not found");
        }
    }

    async navigateTo(path): Promise<void> {
        window.history.pushState({}, "", "/" + path);
        await this.loadPath();
    }
}

export default Router;
