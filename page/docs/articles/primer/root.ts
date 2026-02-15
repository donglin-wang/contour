import {
    H1,
    H2,
    P,
    Subheading,
    CodeInline,
    inline,
    CSSCodeBlock,
    HTMLCodeBlock,
    ComponentPanel,
} from "/page/docs/component";
import { tags } from "/lib/tags";

const { button } = tags;

export default [
    H1("Primer"),
    Subheading(
        "A brief introduction to the CSS features that Contour relies on: custom properties, cascade layers, and data attribute selectors.",
    ),

    H2("Custom properties and inheritance"),
    P(
        ...inline`CSS custom properties (also called CSS variables) are declared with a double-hyphen prefix and read with the ${CodeInline("var()")} function. When a custom property is set on an element, every descendant inherits that value unless it is explicitly overridden.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
.parent {
    --color: blue;
}

.child {
    /* Inherits --color: blue from .parent */
    color: var(--color);
}

.child-override {
    --color: red;
    /* Overrides the inherited value */
    color: var(--color); /* red */
}
            `),
        },
    }),
    P(
        ...inline`A common misconception is that assigning one custom property to another creates a live reference. It does not. If you write ${CodeInline("--B: var(--A)")} on an element, ${CodeInline("--B")} receives the resolved value of ${CodeInline("--A")} at that point in the cascade. If ${CodeInline("--A")} is later changed on a descendant, ${CodeInline("--B")} does not update with it. Each property resolves independently, so a custom property assignment is a one-time value copy, not a binding.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
.root {
    --A: blue;
    --B: var(--A); /* --B resolves to blue */
}

.root .child {
    --A: red;
    /* --A is now red on this element,
       but --B is still blue.
       --B was resolved when set on .root
       and is inherited as a plain value. */
}
            `),
        },
    }),

    H2("Cascade layers"),
    P(
        ...inline`The ${CodeInline("@layer")} rule lets you group CSS declarations into named layers and control the order in which they compete during the cascade. Layers declared earlier have lower precedence than layers declared later. For example, if you declare ${CodeInline("@layer base, pattern, variant")}, a rule in the ${CodeInline("variant")} layer beats a rule in the ${CodeInline("pattern")} layer regardless of selector specificity.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
@layer base, pattern, variant;

@layer base {
    .button {
        color: black;
    }
}

@layer pattern {
    .button {
        color: gray; /* Beats base */
    }
}

@layer variant {
    .button {
        color: red; /* Beats pattern and base */
    }
}
            `),
        },
    }),
    P(
        "This ensures that any rules specified in the pattern layer can be overritten by the variant layer, reusing shared styles while allowing developers to customize without worrying about specificity escalation.",
    ),
    P(
        "However, layer precedence only applies when two declarations actually conflict - that is, when the same property on the same element is set by rules in different layers. Custom properties follow normal inheritance rules. If a parent sets a custom property in a higher layer and a child sets the same custom property in a lower layer, the child's value still wins on that child element, because the two declarations target different elements and therefore do not conflict. In short, the higher precedence given to a layer is not inherited.",
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/*
 * Even though variant is the higher layer,
 * .child's --color is blue.
 * The two declarations target different elements,
 * so they do not conflict. Normal inheritance
 * applies: the child's own value wins.
 */

@layer base, pattern, variant;

@layer variant {
    .parent {
        --color: red;
    }
}

@layer pattern {
    .child {
        --color: blue;
    }
}
            `),
        },
    }),

    H2("Data attribute selectors"),
    P(
        ...inline`Data attributes are custom HTML attributes prefixed with ${CodeInline("data-")}. CSS can target them with attribute selectors such as ${CodeInline('[data-variant="icon"]')}. Contour uses data attributes extensively to select component variants without adding extra class names.`,
    ),
    ComponentPanel({
        sources: {
            HTML: HTMLCodeBlock(
                button(
                    { class: "trigger", "data-variant": "icon" },
                    "Click me",
                ),
            ),
            CSS: CSSCodeBlock(`
.trigger[data-variant="icon"] {
    padding: var(--space-2);
    border-radius: var(--radius-full);
}
            `),
        },
    }),
    P(
        ...inline`Attribute selectors support several matching modes. ${CodeInline('[data-variant="icon"]')} matches the exact value. ${CodeInline('[data-variant^="warning"]')} matches when the value starts with the given prefix. ${CodeInline("[data-open]")} matches when the attribute is present regardless of its value.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* Exact match */
[data-variant="icon"] {
    /* Matches <div data-variant="icon"> */
}

/* Prefix match */
[data-variant^="warning"] {
    /* Matches <div data-variant="warning">
       and <div data-variant="warning-header"> */
}

/* Presence match */
[data-open] {
    /* Matches <div data-open> or <div data-open="true"> */
}
            `),
        },
    }),
    P(
        ...inline`HTML does not prevent an element from having duplicate attributes with the same name, but the behavior is well-defined: the parser keeps only the first occurrence and silently discards the rest. For example, if an element is written as ${CodeInline('<div data-variant="a" data-variant="b">')}, the browser treats it as ${CodeInline('<div data-variant="a">')}. The second attribute is ignored entirely - it does not merge, override, or produce an error. CSS selectors will only ever see the first value.`,
    ),
];
