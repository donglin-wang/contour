class IconBase extends HTMLElement {
  static get observedAttributes() {
    return ["stroke-width", "fill", "background-color"];
  }
  attributeChangedCallback() {
    this.render();
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    const strokeWidth = this.getAttribute("stroke-width") || "1";
    const fill = this.getAttribute("fill") || "currentColor";
    const backgroundColor = this.getAttribute("background-color") || "white";
    this.shadowRoot.innerHTML = /* html */ `
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
            ${this.getSVG(strokeWidth, fill, backgroundColor)}
        `;
  }
}

class IconExclamationSquareFill extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" viewBox="0 0 16 16" class="icon">
                <path d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0ZM8 4C8.535 4 8.954 4.462 8.9 4.995L8.55 8.502C8.53824 8.63977 8.4752 8.76811 8.37336 8.86164C8.27151 8.95516 8.13827 9.00705 8 9.00705C7.86173 9.00705 7.72849 8.95516 7.62664 8.86164C7.5248 8.76811 7.46176 8.63977 7.45 8.502L7.1 4.995C7.08743 4.86923 7.10134 4.74223 7.14084 4.62217C7.18035 4.5021 7.24456 4.39165 7.32934 4.29791C7.41413 4.20418 7.51761 4.12924 7.63312 4.07793C7.74863 4.02662 7.87361 4.00007 8 4ZM8.002 10C8.26722 10 8.52157 10.1054 8.70911 10.2929C8.89664 10.4804 9.002 10.7348 9.002 11C9.002 11.2652 8.89664 11.5196 8.70911 11.7071C8.52157 11.8946 8.26722 12 8.002 12C7.73678 12 7.48243 11.8946 7.29489 11.7071C7.10736 11.5196 7.002 11.2652 7.002 11C7.002 10.7348 7.10736 10.4804 7.29489 10.2929C7.48243 10.1054 7.73678 10 8.002 10Z" fill="${fill}"/>
                <path d="M8 4C8.535 4 8.954 4.462 8.9 4.995L8.55 8.502C8.53824 8.63977 8.4752 8.76811 8.37336 8.86164C8.27151 8.95516 8.13827 9.00705 8 9.00705C7.86173 9.00705 7.72849 8.95516 7.62664 8.86164C7.5248 8.76811 7.46176 8.63977 7.45 8.502L7.1 4.995C7.08743 4.86923 7.10134 4.74223 7.14084 4.62217C7.18035 4.5021 7.24456 4.39165 7.32934 4.29791C7.41413 4.20418 7.51761 4.12924 7.63312 4.07793C7.74863 4.02662 7.87361 4.00007 8 4Z" fill="${backgroundColor}"/>
                <path d="M8.002 10C8.26722 10 8.52157 10.1054 8.70911 10.2929C8.89664 10.4804 9.002 10.7348 9.002 11C9.002 11.2652 8.89664 11.5196 8.70911 11.7071C8.52157 11.8946 8.26722 12 8.002 12C7.73678 12 7.48243 11.8946 7.29489 11.7071C7.10736 11.5196 7.002 11.2652 7.002 11C7.002 10.7348 7.10736 10.4804 7.29489 10.2929C7.48243 10.1054 7.73678 10 8.002 10Z" fill="${backgroundColor}"/>
            </svg>
        `;
  }
}

class IconAlarm extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                <path
                    d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
            </svg>
        `;
  }
}

class IconX extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        `;
  }
}

class IconPlus extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
            </svg>
        `;
  }
}

class IconCheck extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
            </svg>
        `;
  }
}

class IconChevronRight extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
        `;
  }
}

class IconChevronDown extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
        `;
  }
}

class IconChevronUp extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
            </svg>
        `;
  }
}

class IconBackpack extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"/>
            </svg>
        `;
  }
}

class IconGit extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" viewBox="0 0 16 16" class="icon">
                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457"/>
            </svg>
        `;
  }
}

class IconCopy extends IconBase {
  getSVG(strokeWidth, fill, backgroundColor) {
    return /* html */ `
            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="${strokeWidth}" fill="${fill}" class="icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
            </svg>
        `;
  }
}

customElements.define(
  "icon-exclamation-square-fill",
  IconExclamationSquareFill,
);
customElements.define("icon-alarm", IconAlarm);
customElements.define("icon-x", IconX);
customElements.define("icon-plus", IconPlus);
customElements.define("icon-check", IconCheck);
customElements.define("icon-chevron-right", IconChevronRight);
customElements.define("icon-chevron-down", IconChevronDown);
customElements.define("icon-chevron-up", IconChevronUp);
customElements.define("icon-backpack", IconBackpack);
customElements.define("icon-git", IconGit);
customElements.define("icon-copy", IconCopy);
