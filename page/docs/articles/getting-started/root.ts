import { tags } from "/lib/tags";
import {
    CodeInline,
    ComponentPanel,
    CSSCodeBlock,
    H1,
    H2,
    HTMLCodeBlock,
    inline,
    P,
    Subheading,
} from "/page/docs/component";

const { button } = tags;

export default [
    H1("Getting Started"),
    Subheading(
        "Write your first Contour pattern from scratch - a button component with modifiers and a color variant - in plain CSS.",
    ),

    H2("File structure"),
    P(
        "There is no package to install and no CDN to link. Contour is a set of conventions you apply to your own CSS, so the first step is creating the file structure yourself. Contour organizes styles into three cascade layers and mirrors that structure on disk. A minimal setup looks like this:",
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
style/
  base/         /* Design tokens, resets, global defaults */
  pattern/      /* Base component styles */
  variant/      /* Modifications and alternate presentations */
            `),
        },
    }),
    P(
        ...inline`Every CSS file opens with ${CodeInline("@layer base")}, ${CodeInline("@layer pattern")}, or ${CodeInline("@layer variant")} so the browser knows where each rule belongs. The layer order is declared once at the top of your stylesheet entry point:`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
@layer base, pattern, variant;
            `),
        },
    }),
    P(
        ...inline`This single line guarantees that ${CodeInline("variant")} always beats ${CodeInline("pattern")}, and ${CodeInline("pattern")} always beats ${CodeInline("base")}, regardless of selector specificity or file order.`,
    ),

    H2("Define design tokens"),
    P(
        "Start in the base layer. Design tokens are CSS custom properties on the root element that the rest of your styles consume. You only need a few to get going:",
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* style/base/tokens.css */

@layer base {
    :root {
        --space-2: 0.5rem;
        --space-3: 0.75rem;
        --space-4: 1rem;
        --space-5: 1.5rem;

        --background: hsl(0 0% 100%);
        --background-muted: hsl(0 0% 96%);
        --border-color: hsl(0 0% 90%);
        --border-width-1: 1px;

        --text-color-base: hsl(0 0% 10%);
        --danger: hsl(354 70% 54%);
        --danger-muted: hsl(354 70% 46%);
        --danger-text: hsl(0 0% 100%);
    }
}
            `),
        },
    }),
    P(
        "Every value used later traces back to a token defined here. When your brand colors change or your spacing scale evolves, you update one file and every pattern that consumes these tokens updates with it.",
    ),

    H2("Write a pattern"),
    P(
        ...inline`A pattern is a self-contained component. Its CSS lives in the ${CodeInline("pattern")} layer. Each element in the pattern gets exactly one primary class name: the root uses the pattern name, and children use a ${CodeInline("<pattern>__<element>")} suffix.`,
    ),
    ComponentPanel({
        sources: {
            HTML: HTMLCodeBlock(button({ class: "trigger" }, "Click me")),
            CSS: CSSCodeBlock(`
/* style/pattern/trigger.css */

@layer pattern {
    .trigger {
        display: flex;
        width: fit-content;
        padding-inline: var(--space-4);
        padding-block: var(--space-3);
        background-color: var(--background);
        border-radius: 5px;
        border: var(--border-width-1) solid var(--border-color);
        cursor: pointer;
        color: var(--text-color-base);
    }

    .trigger:hover {
        background-color: var(--background-muted);
    }
}
            `),
        },
    }),
    P(
        "This is a complete, usable component. It consumes tokens from the base layer, has a clear hover state, and works in any framework - just apply the class to a button or anchor element.",
    ),

    H2("Add modifiers"),
    P(
        ...inline`Modifiers are small, composable adjustments prefixed with ${CodeInline("m-")}. They live in the ${CodeInline("variant")} layer so they always win over the base pattern. Each modifier should work independently and combine freely with other modifiers.`,
    ),
    ComponentPanel({
        sources: {
            HTML: HTMLCodeBlock(
                button({ class: "trigger m-ghost m-pill" }, "Click me"),
            ),
            CSS: CSSCodeBlock(`
/* style/variant/trigger/modifiers.css */

@layer variant {
    .trigger.m-ghost {
        background-color: transparent;
        border: none;
    }

    .trigger.m-ghost:hover {
        background-color: var(--background-muted);
    }

    .trigger.m-pill {
        border-radius: 999px;
        padding-inline: var(--space-5);
    }
}
            `),
        },
    }),
    P(
        ...inline`Because both modifiers are in the ${CodeInline("variant")} layer, they override the pattern's defaults without any specificity tricks. And because each modifier only touches the properties it cares about, ${CodeInline("m-ghost m-pill")} composes naturally - the ghost modifier removes the border and background while the pill modifier rounds the corners.`,
    ),

    H2("Add a variant"),
    P(
        ...inline`For named visual variations that go beyond a single adjustment, use ${CodeInline("data-variant")}. A variant can restyle multiple properties at once and define its own interactive states.`,
    ),
    ComponentPanel({
        sources: {
            HTML: HTMLCodeBlock(
                button(
                    { class: "trigger", "data-variant": "danger" },
                    "Delete",
                ),
            ),
            CSS: CSSCodeBlock(`
/* style/variant/trigger/colored.css */

@layer variant {
    .trigger[data-variant="danger"] {
        border: none;
        background-color: var(--danger);
        color: var(--danger-text);
    }

    .trigger[data-variant="danger"]:hover {
        background-color: var(--danger-muted);
    }
}
            `),
        },
    }),
    P(
        "Variants and modifiers can coexist on the same element. Since they live in the same layer, the cascade resolves them by specificity - and an attribute selector combined with a class naturally outweighs a class-only modifier, so the variant's color wins while the modifier's shape adjustments still apply.",
    ),
    ComponentPanel({
        sources: {
            HTML: HTMLCodeBlock(
                button(
                    { class: "trigger m-pill", "data-variant": "danger" },
                    "Delete",
                ),
            ),
        },
    }),

    H2("Summary"),
    P(
        "That is the full workflow. Define tokens in the base layer, write component styles in the pattern layer, and add modifiers and variants in the variant layer. Each concern has a clear home, specificity is managed structurally by layers rather than by convention, and everything is plain CSS that works in any browser without a build step.",
    ),
];
