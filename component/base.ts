abstract class Component extends HTMLElement {
    private initialized: boolean = false;

    constructor() {
        super();
    }

    initializeOnce() {
        if (this.initialized) {
            return;
        }
        this.initialize();
        this.initialized = true;
    }

    initialize(): void {}

    connectedCallback() {
        this.initializeOnce();
    }
}

export default Component;
