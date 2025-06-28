class Display extends HTMLElement {
    static get observedAttributes() {
        return ["css-source", "html-source"];
    }

    constructor() {
        super();

        const cssSource = this.getAttribute("css-source");
        const htmlSource = this.getAttribute("html-source");

        this.innerHTML = /* html */`
            <style>
                .tab__content {
                    display: none;
                }
                .active {
                    background-color: purple;
                    display: flex;
                }
            </style>
            <div class="display">
                <div class="display__content">
                    <slot name="display__content"></slot>
                </div>
                <div class="display__source">
                    <div class="tab__control">
                        <div class="tab__item">HTML</div>
                        <div class="tab__item">CSS</div>
                    </div>
                    <div class="tab__content">
                        <pre data-src="${htmlSource}"></pre>
                    </div>
                    <div class="tab__content" id="display__css">
                        <pre data-src="${cssSource}"></pre>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        this.controls = this.querySelectorAll(".tab__item");
        this.contents = this.querySelectorAll(".tab__content");

        this.controls.forEach((control, i) => {
            control.addEventListener("click", () => this.activateTab(i));
        });
    }

    activateTab(index) {
        this.controls.forEach((control, i) => {
            control.classList.toggle("active", i === index);
        });

        this.contents.forEach((content, i) => {
            content.classList.toggle("active", i === index);
        });
    }
}

customElements.define("display-component", Display);
