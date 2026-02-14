import {
    H1,
    H2,
    P,
    Ul,
    Li,
    Subheading,
    CodeInline,
    inline,
    CSSCodeBlock,
    HTMLCodeBlock,
} from "/page/docs/component";
import { tags } from "/lib/tags";

const { div, span, button } = tags;

export default [
    H1("Naming Conventions"),
    Subheading(
        "The rules Contour follows for class names, modifier classes, and data attributes to keep markup predictable and selectors conflict-free.",
    ),

    H2("One primary class per element"),
    P(
        ...inline`Every element carries exactly one primary class name that identifies what it is. Zero or more modifier classes prefixed with ${CodeInline("m-")} may follow. An element must never have two primary class names, because each primary class belongs to a different pattern with its own layout assumptions — combining them on a single element creates ambiguity about which pattern owns the element.`,
    ),
    HTMLCodeBlock(
        div({ class: "menu m-dense" }),
    ),
    CSSCodeBlock(
`/* Valid — one primary class with modifiers */
.menu { }
.menu.m-dense { }
.menu.m-dense.m-dark { }

/* Invalid — two primary class names on one element */
.menu.card { }     /* Which pattern owns this element? */`,
    ),
    P(
        "Modifiers are always additive adjustments to the primary class. They must not appear on their own without a primary class, and they must not change the fundamental identity of the element.",
    ),
    HTMLCodeBlock(
        button({ class: "trigger m-ghost" }, "Click"),
    ),
    CSSCodeBlock(
`/* Valid — modifier refines the primary class */
.trigger.m-ghost {
    background: transparent;
}

/* Invalid — modifier without a primary class */
.m-ghost {
    /* What element is this styling? */
}`,
    ),

    H2("Class name structure"),
    P(
        ...inline`Primary class names follow a ${CodeInline("<pattern>__<element>")} convention, where the part before the double underscore is the pattern name and the part after identifies a specific child element within that pattern. The ${CodeInline("__<element>")} suffix is optional — the root of a pattern uses the pattern name alone.`,
    ),
    HTMLCodeBlock(
        div(
            { class: "menu" },
            div(
                { class: "menu__item" },
                span({ class: "text" }, "Settings"),
            ),
        ),
    ),
    CSSCodeBlock(
`/* Pattern root */
.menu { }

/* Child elements scoped to the pattern */
.menu__item { }
.menu__title { }
.menu__divider { }`,
    ),
    P(
        ...inline`A child class like ${CodeInline("menu__item")} can only appear inside an element that has the ${CodeInline("menu")} class. Child classes are never used as standalone components because their styles assume the layout context provided by the parent pattern. Nesting a child class outside its parent will produce broken or meaningless results.`,
    ),
    HTMLCodeBlock(
        div(
            { class: "menu" },
            div({ class: "menu__item" }, "First"),
            div({ class: "menu__item" }, "Second"),
        ),
    ),
    CSSCodeBlock(
`/* Valid — menu__item lives inside .menu */
.menu {
    display: flex;
    flex-direction: column;
}

.menu__item {
    /* Relies on .menu's flex column layout */
    padding-inline: var(--space-4);
}

/* Invalid — menu__item used standalone */
/* <div class="menu__item">Orphan</div>
   This element has no parent pattern
   providing the expected layout context. */`,
    ),

    H2("Data attributes"),
    P(
        ...inline`Contour uses two data attributes for styling: ${CodeInline("data-variant")} and ${CodeInline("data-for")}. An element should have at most one of these. ${CodeInline("data-variant")} selects a named visual variation of a pattern. ${CodeInline("data-for")} establishes a semantic role or relationship, typically used for layout containers and display regions.`,
    ),
    HTMLCodeBlock(
        div(
            { class: "menu", "data-variant": "nested" },
            div({ class: "menu__item" }, "Nested item"),
        ),
    ),
    CSSCodeBlock(
`/* data-variant targets a visual variation */
.menu[data-variant="nested"] {
    padding-inline-start: var(--space-4);
}

/* data-for targets a semantic role */
.container[data-for="display"] {
    border: var(--border-width-1) solid var(--border-color);
}`,
    ),
    P(
        ...inline`Other data attributes such as ${CodeInline("data-open")} or ${CodeInline("data-closed")} are reserved for element state. Avoid introducing new data attributes for concerns that can be expressed as a variant or a modifier. For example, instead of adding ${CodeInline("data-size")} or ${CodeInline("data-color")}, create a new variant or use an ${CodeInline("m-")} modifier class.`,
    ),
    CSSCodeBlock(
`/* Preferred — use a modifier for a simple adjustment */
.trigger.m-small { }

/* Preferred — use a variant for a named variation */
.trigger[data-variant="icon"] { }

/* Avoid — inventing new data attributes for styling */
.trigger[data-size="small"] { }
.trigger[data-color="danger"] { }`,
    ),
];
