import { X } from "/component/symbol";
import { tags } from "/lib/tags";
import { H1 } from "/page/docs/component";

const { dialog, button, p, div, b } = tags;

const registerBehaviour = (
    openTrigger: HTMLElement,
    closeTrigger: HTMLElement,
    modal: HTMLElement
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
            b({ class: "text m-bold" }, "Congratulation"),
            p({ class: "text" }, "You have successfuly opened the modal"),
            defaultClose
        )
    )
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
            b({ class: "text m-bold" }, "Congragulation"),
            p({ class: "text" }, "You have successfully opened the modal"),
            controlledClose
        )
    )
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
            b({ class: "text m-bold" }, "Congragulation"),
            p({ class: "text" }, "You have successfully opened the modal"),
            responsiveClose
        )
    )
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
                "Congragulation"
            )
        ),
        div(
            {
                class: "modal__section",
                "data-variant": "sectioned-body",
            },
            "You have successfully opened the modal"
        ),
        div(
            {
                class: "modal__section",
                "data-variant": "sectioned-footer",
            },
            headerFooterClose
        )
    )
);

registerBehaviour(headerFooterOpen, headerFooterClose, headerFooter);

const corneredOpen = button({ class: "trigger" }, "Open");
const corneredClose = button(
    {
        class: "trigger m-ghost",
        "data-variant": "icon",
    },
    X()
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
            b({ class: "text m-bold" }, "Congragulation"),
            p({ class: "text" }, "You have successfully opened the modal"),
            div(
                { class: "modal__close", "data-variant": "cornered" },
                corneredClose
            )
        )
    )
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
            b({ class: "text m-bold" }, "Congratulation"),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            longClose
        )
    )
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
        b({ class: "text m-bold" }, "Congratulation"),
        div(
            {
                class: "modal__section",
                "data-variant": "inner-scroll",
            },
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            ),
            p(
                { class: "text" },
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            )
        ),
        innerScrollClose
    )
);

registerBehaviour(innerScrollOpen, innerScrollClose, innerModal);

export default [
    H1("Modal"),
    defaultOpen,
    defaultModal,
    controlledOpen,
    controlledModal,
    responsiveOpen,
    responsiveModal,
    headerFooterOpen,
    headerFooter,
    corneredOpen,
    corneredModal,
    longOpen,
    longModal,
    innerScrollOpen,
    innerModal,
];
