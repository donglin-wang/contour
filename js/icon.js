class IconBase extends HTMLElement {
    static get observedAttributes() {
        return ['stroke-width', 'fill'];
    }
    attributeChangedCallback() {
        this.render();
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render()
    }
    render() {
        const strokeWidth = this.getAttribute('stroke-width') || '1';
        const fill = this.getAttribute('fill') || 'currentColor';
        this.shadowRoot.innerHTML = /* html */`
            <style>
                :host {
                    display: inline-block;
                    height: 1em;
                    width: 1em;
                }
                .icon {
                    height: 100%;
                    width: 100%;
                }
            </style>
            ${this.getSVG(strokeWidth, fill)}
        `
    }
}

class IconExclamationSquareFill extends IconBase {
    getSVG(strokeWidth, fill) {
        return /* html */`
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}"  viewBox="0 0 16 16" class="icon">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
        `
    }
}

class IconAlarm extends IconBase {
    getSVG(strokeWidth, fill) {
        return /* html */`
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path
                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
            </svg>
        `
    }
}

class IconX extends IconBase {
    getSVG(strokeWidth, fill) {
        return /* html */`
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        `
    }
}

class IconPlus extends IconBase {
    getSVG(strokeWidth, fill) {
        return /* html */`
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
        `
    }
}

class IconCheck extends IconBase {
    getSVG(strokeWidth, fill) {
        return /* html */`
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
            </svg>
        `
    }
}

class IconChevronRight extends IconBase {
    getSVG(strokeWidth, fill) {
        return /* html */`
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
        `
    }
}

customElements.define('icon-exclamation-square-fill', IconExclamationSquareFill);
customElements.define('icon-alarm', IconAlarm);
customElements.define('icon-x', IconX);
customElements.define('icon-plus', IconPlus);
customElements.define('icon-check', IconCheck);
customElements.define('icon-chevron-right', IconChevronRight)
