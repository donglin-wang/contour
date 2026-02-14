import {
    ComponentDisplay,
    ComponentPanel,
    H1,
    H2,
    Subheading,
    P,
    Ul,
    Li,
    CodeInline,
    inline,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import modalStyle from "/style/pattern/modal.css?inline";
import { X } from "/component/symbol";
import { tags } from "/lib/tags";
import responsiveStyle from "/style/variant/modal/responsive.css?inline";
import headerFooterStyle from "/style/variant/modal/headerFooter.css?inline";
import corneredStyle from "/style/variant/modal/cornered.css?inline";
import outerScrollStyle from "/style/variant/modal/outerScroll.css?inline";
import innerScrollStyle from "/style/variant/modal/innerScroll.css?inline";

const { dialog, button, p, div, b } = tags;

const registerBehaviour = (
    openTrigger: HTMLElement,
    closeTrigger: HTMLElement,
    modal: HTMLElement,
) => {
    if (modal instanceof HTMLDialogElement) {
        openTrigger.addEventListener("click", () => modal.showModal());
        closeTrigger.addEventListener("click", () => modal.close());
    } else {
        openTrigger.addEventListener("click", () => {
            modal.toggleAttribute("data-closed", false);
            modal.toggleAttribute("data-open", true);
        });
        closeTrigger.addEventListener("click", () => {
            modal.toggleAttribute("data-open", false);
            modal.toggleAttribute("data-closed", true);
        });
    }
};

const defaultOpen = button({ class: "trigger" }, "Open");
const defaultClose = button({ class: "trigger m-tight" }, "Close");
const defaultModal = dialog(
    {
        class: "modal",
    },
    div(
        {
            class: "modal__dialog",
        },
        div(
            {
                class: "modal__section",
            },
            b({ class: "text m-bold" }, "Congratulations"),
            p({ class: "text" }, "You have successfully opened the modal"),
            defaultClose,
        ),
    ),
);

registerBehaviour(defaultOpen, defaultClose, defaultModal);

const controlledOpen = button({ class: "trigger" }, "Open");
const controlledClose = button({ class: "trigger m-tight" }, "Close");
const controlledModal = div(
    {
        class: "modal",
        "data-closed": "",
    },
    div(
        { class: "modal__dialog" },
        div(
            {
                class: "modal__section",
            },
            b({ class: "text m-bold" }, "Congratulations"),
            p({ class: "text" }, "You have successfully opened the modal"),
            controlledClose,
        ),
    ),
);

registerBehaviour(controlledOpen, controlledClose, controlledModal);

const responsiveOpen = button({ class: "trigger" }, "Open");
const responsiveClose = button({ class: "trigger m-tight" }, "Close");
const responsiveModal = dialog(
    { class: "modal" },
    div(
        { class: "modal__dialog", "data-variant": "responsive" },
        div(
            {
                class: "modal__section",
            },
            b({ class: "text m-bold" }, "Congratulations"),
            p({ class: "text" }, "You have successfully opened the modal"),
            responsiveClose,
        ),
    ),
);

registerBehaviour(responsiveOpen, responsiveClose, responsiveModal);

const headerFooterOpen = button({ class: "trigger" }, "Open");
const headerFooterClose = button({ class: "trigger m-tight" }, "Close");
const headerFooter = dialog(
    { class: "modal" },
    div(
        {
            class: "modal__dialog",
            "data-variant": "sectioned",
        },
        div(
            {
                class: "modal__section",
                "data-variant": "sectioned-header",
            },
            b(
                {
                    class: "text m-bold",
                    "data-variant": "sectioned-modal-title",
                },
                "Congratulations",
            ),
        ),
        div(
            {
                class: "modal__section",
                "data-variant": "sectioned-body",
            },
            p({ class: "text" }, "You have successfully opened the modal"),
        ),
        div(
            {
                class: "modal__section",
                "data-variant": "sectioned-footer",
            },
            headerFooterClose,
        ),
    ),
);

registerBehaviour(headerFooterOpen, headerFooterClose, headerFooter);

const corneredOpen = button({ class: "trigger" }, "Open");
const corneredClose = button(
    {
        class: "trigger m-ghost",
        "data-variant": "icon",
    },
    X(),
);
const corneredModal = dialog(
    { class: "modal" },
    div(
        {
            class: "modal__dialog",
            "data-variant": "cornered",
        },
        div(
            {
                class: "modal__section",
            },
            b({ class: "text m-bold" }, "Congratulations"),
            p({ class: "text" }, "You have successfully opened the modal"),
            div(
                { class: "modal__close", "data-variant": "cornered" },
                corneredClose,
            ),
        ),
    ),
);

registerBehaviour(corneredOpen, corneredClose, corneredModal);

const longOpen = button({ class: "trigger" }, "Open");
const longClose = button({ class: "trigger m-tight" }, "Close");
const longModal = dialog(
    { class: "modal", "data-variant": "outer-scroll" },
    div(
        {
            class: "modal__dialog",
            "data-variant": "outer-scroll",
        },
        div(
            {
                class: "modal__section",
            },
            b({ class: "text m-bold" }, "Congratulations"),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            longClose,
        ),
    ),
);

registerBehaviour(longOpen, longClose, longModal);

const innerScrollOpen = button({ class: "trigger" }, "Open");
const innerScrollClose = button({ class: "trigger m-tight" }, "Close");
const innerModal = dialog(
    { class: "modal", "data-variant": "inner-scroll" },
    div(
        {
            class: "modal__dialog",
            "data-variant": "inner-scroll",
        },
        b({ class: "text m-bold" }, "Congratulations"),
        div(
            {
                class: "modal__section",
                "data-variant": "inner-scroll",
            },
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            ),
        ),
        innerScrollClose,
    ),
);

registerBehaviour(innerScrollOpen, innerScrollClose, innerModal);

const modalPanel = (
    open: HTMLElement,
    modal: HTMLElement,
    style?: string,
) => {
    const sources: any = { HTML: HTMLCodeBlock(modal) };
    if (style) {
        sources.CSS = CSSCodeBlock(style);
    }
    return [
        modal,
        ComponentPanel({
            display: ComponentDisplay(open),
            sources,
        }),
    ];
};

export default [
    H1("Modal"),
    Subheading(
        "A dialog overlay that focuses user attention on a single task or message, blocking interaction with the page behind it."
    ),
    H2("Base style"),
    P(
        "The base modal is a fixed, full-screen flex overlay with a semi-transparent backdrop. The dialog box inside is a bordered, rounded block with padding."
    ),
    Ul(
        Li(
            ...inline`The pattern supports both the native ${CodeInline("dialog")} element and a controlled ${CodeInline("div")} with ${CodeInline("data-open")}/${CodeInline("data-closed")} attributes. Focus trapping is only automatic with the native ${CodeInline("dialog")}.`
        ),
        Li(
            "Avoid using the modal for non-blocking messages or lightweight confirmations. For these situations, use a notice instead."
        )
    ),
    ...modalPanel(defaultOpen, defaultModal, modalStyle),
    H2("Controlled"),
    P(
        ...inline`A non-native modal using a ${CodeInline("div")} instead of ${CodeInline("dialog")}. Visibility is toggled via ${CodeInline("data-open")} and ${CodeInline("data-closed")} attributes rather than the native showModal API.`
    ),
    ...modalPanel(controlledOpen, controlledModal),
    H2("Responsive"),
    P(
        "Constrains the dialog to a max-width while allowing it to flex with the viewport."
    ),
    ...modalPanel(responsiveOpen, responsiveModal, responsiveStyle),
    H2("Header footer"),
    P(
        "Divides the dialog into distinct header, body, and footer sections separated by borders."
    ),
    ...modalPanel(headerFooterOpen, headerFooter, headerFooterStyle),
    H2("Cornered"),
    P(
        "Places an absolutely positioned close button in the top-right corner of the dialog."
    ),
    ...modalPanel(corneredOpen, corneredModal, corneredStyle),
    H2("Outer scroll"),
    P(
        "When content overflows, the entire overlay scrolls, keeping the dialog at natural height."
    ),
    ...modalPanel(longOpen, longModal, outerScrollStyle),
    H2("Inner scroll"),
    P(
        "Constrains the dialog to the viewport height and scrolls only the content section, keeping the title and actions fixed."
    ),
    ...modalPanel(innerScrollOpen, innerModal, innerScrollStyle),
] as HTMLElement[];
