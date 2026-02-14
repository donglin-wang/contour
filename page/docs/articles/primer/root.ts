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

const { div, button } = tags;

export default [
    H1("CSS Primer"),
    Subheading(
        "A brief introduction to the CSS features that Contour relies on: custom properties, cascade layers, and data attribute selectors.",
    ),

    H2("Custom properties and inheritance"),
    P(
        ...inline`CSS custom properties (also called CSS variables) are declared with a double-hyphen prefix and read with the ${CodeInline("var()")} function. When a custom property is set on an element, every descendant inherits that value unless it is explicitly overridden closer to the consuming element.`,
    ),
    CSSCodeBlock(
`.parent {
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
}`,
    ),
    P(
        ...inline`A common misconception is that assigning one custom property to another creates a live reference. It does not. If you write ${CodeInline("--B: var(--A)")} on an element, ${CodeInline("--B")} receives the resolved value of ${CodeInline("--A")} at that point in the cascade. If ${CodeInline("--A")} is later changed on a descendant, ${CodeInline("--B")} does not update with it. Each property resolves independently, so a custom property assignment is a one-time value copy, not a binding.`,
    ),
    CSSCodeBlock(
`.root {
    --A: blue;
    --B: var(--A); /* --B resolves to blue */
}

.root .child {
    --A: red;
    /* --A is now red on this element,
       but --B is still blue.
       --B was resolved when set on .root
       and is inherited as a plain value. */
}`,
    ),

    H2("Cascade layers"),
    P(
        ...inline`The ${CodeInline("@layer")} rule lets you group CSS declarations into named layers and control the order in which they compete during the cascade. Layers declared earlier have lower precedence than layers declared later. For example, if you declare ${CodeInline("@layer base, pattern, variant")}, a rule in the ${CodeInline("variant")} layer beats a rule in the ${CodeInline("pattern")} layer regardless of selector specificity.`,
    ),
    CSSCodeBlock(
`@layer base, pattern, variant;

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
}`,
    ),
    P(
        "This makes it safe for multiple developers to contribute styles to different layers without worrying about specificity conflicts. A variant author does not need to know the exact selectors used in the pattern layer — the layer order guarantees the variant wins.",
    ),
    P(
        "However, layer precedence only applies when two declarations actually conflict — that is, when the same property on the same element is set by rules in different layers. Custom properties follow normal inheritance rules. If a parent sets a custom property in a higher layer and a child sets the same custom property in a lower layer, the child's value still wins on that child element, because the two declarations target different elements and therefore do not conflict. In short, the higher precedence given to a layer does not overpower overrides during inheritance.",
    ),
    CSSCodeBlock(
`@layer pattern, variant;

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

/*
 * Even though variant is the higher layer,
 * .child's --color is blue.
 * The two declarations target different elements,
 * so they do not conflict. Normal inheritance
 * applies: the child's own value wins.
 */`,
    ),

    H2("Data attribute selectors"),
    P(
        ...inline`Data attributes are custom HTML attributes prefixed with ${CodeInline("data-")}. CSS can target them with attribute selectors such as ${CodeInline('[data-variant="icon"]')}. Contour uses data attributes extensively to select component variants without adding extra class names.`,
    ),
    HTMLCodeBlock(
        button({ class: "trigger", "data-variant": "icon" }, "Click me"),
    ),
    CSSCodeBlock(
`.trigger[data-variant="icon"] {
    padding: var(--space-2);
    border-radius: var(--radius-full);
}`,
    ),
    P(
        ...inline`Attribute selectors support several matching modes. ${CodeInline('[data-variant="icon"]')} matches the exact value. ${CodeInline('[data-variant~="icon"]')} matches when the value is a space-separated list containing the word. ${CodeInline("[data-open]")} matches when the attribute is present regardless of its value.`,
    ),
    CSSCodeBlock(
`/* Exact match */
[data-variant="icon"] {
    /* Matches <div data-variant="icon"> */
}

/* Space-separated word match */
[data-variant~="icon"] {
    /* Matches <div data-variant="icon large"> */
}

/* Presence match */
[data-open] {
    /* Matches <div data-open> or <div data-open="true"> */
}`,
    ),
    P(
        ...inline`HTML does not prevent an element from having duplicate attributes with the same name, but the behavior is well-defined: the parser keeps only the first occurrence and silently discards the rest. For example, if an element is written as ${CodeInline('<div data-variant="a" data-variant="b">')}, the browser treats it as ${CodeInline('<div data-variant="a">')}. The second attribute is ignored entirely — it does not merge, override, or produce an error. CSS selectors will only ever see the first value.`,
    ),
    HTMLCodeBlock(
        div({ "data-variant": "a" }),
    ),
];
