export type RouteHandler = (router: Router) => Promise<Element>;

export interface Route {
    path: string;
    handler: RouteHandler;
}

export class Router {
    private routes: Map<string, RouteHandler> = new Map();
    private container: Element;
    private currentCleanup?: () => void;

    constructor(container: Element) {
        this.container = container;
        window.addEventListener("popstate", () => this.handleRoute());
    }

    addRoute(route: Route): void {
        this.routes.set(route.path, route.handler);
    }

    async navigate(path: string): Promise<void> {
        window.history.pushState({}, "", path);
        await this.handleRoute();
    }

    private async handleRoute(): Promise<void> {
        const path = window.location.pathname;

        let handler = this.routes.get(path);

        if (!handler) {
            handler = this.routes.get("/") || this.routes.get("/home");
        }

        if (!handler) {
            console.error("No route handler found for:", path);
            return;
        }

        if (this.currentCleanup) {
            this.currentCleanup();
        }

        try {
            const element = await handler(this);
            this.container.replaceChildren(element);
        } catch (error) {
            console.error("Error loading route:", error);
            this.container.textContent = "Error loading page";
        }
    }

    start(): void {
        this.handleRoute();
    }

    setCleanup(cleanup: () => void): void {
        this.currentCleanup = cleanup;
    }
}
