type Listener<T> = (state: T) => void;

class StateStore<T> {
    private state: T;
    private listeners: Set<Listener<T>> = new Set();

    constructor(initialState: T) {
        this.state = initialState;
    }

    getState(): T {
        return this.state;
    }

    setState(newState: Partial<T>): void {
        this.state = { ...this.state, ...newState };
        this.notify();
    }

    subscribe(listener: Listener<T>): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    private notify(): void {
        this.listeners.forEach((listener) => listener(this.state));
    }
}

const COMPACT_BREAKPOINT = 800;

export interface AppState {
    sidebarOpen: boolean;
    compactViewport: boolean;
}

export const stateStore = new StateStore<AppState>({
    sidebarOpen: false,
    compactViewport:
        document.documentElement.clientWidth <= COMPACT_BREAKPOINT,
});

const observer = new ResizeObserver((entries) => {
    const width = entries[0].contentRect.width;
    const wasCompact = stateStore.getState().compactViewport;
    const isNowCompact = width <= COMPACT_BREAKPOINT;
    if (wasCompact !== isNowCompact) {
        stateStore.setState({ compactViewport: isNowCompact });
    }
    if (!wasCompact && isNowCompact && stateStore.getState().sidebarOpen) {
        stateStore.setState({ sidebarOpen: false });
    }
});
observer.observe(document.documentElement);
