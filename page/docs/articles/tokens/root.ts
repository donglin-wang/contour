import {
    H1,
    H2,
    H3,
    P,
    Subheading,
    CodeInline,
    inline,
    CSSCodeBlock,
    ComponentPanel,
} from "/page/docs/component";

export default [
    H1("Tokens & Resets"),
    Subheading(
        "The base layer defines the design tokens and resets that every pattern and variant builds on.",
    ),

    H2("Overview"),
    P(
        ...inline`Everything in this layer lives under ${CodeInline("@layer base")} and is scoped to ${CodeInline(":root")} or ${CodeInline("body")}. The file structure groups tokens by concern:`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
base/
  sizes.css              /* Spacing scale and content measures */
  border.css             /* Border radii and widths */
  shadow.css             /* Elevation scale */
  color/
    theme.css            /* Semantic colors, backgrounds, borders */
    text.css             /* Text colors */
    code.css             /* Syntax highlighting tokens */
  text/
    sizes.css            /* Font sizes for titles and prose */
    weight.css           /* Font weight scale */
    composition.css      /* Line heights */
  reset/
    base.css             /* Box model and body margin */
    text.css             /* Base font family and color */
    theme.css            /* Body background color */
            `),
        },
    }),

    H2("Sizes"),
    P(
        ...inline`${CodeInline("sizes.css")} defines a spacing scale derived from a single base unit and a set of content measures for controlling line length.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* sizes.css */

@layer base {
    :root {
        --space: 0.25rem;
        --space-1: calc(var(--space) * 1);     /* 0.25rem */
        --space-2: calc(var(--space) * 2);     /* 0.5rem  */
        --space-3: calc(var(--space) * 3);     /* 0.75rem */
        --space-4: calc(var(--space) * 4);     /* 1rem    */
        --space-5: calc(var(--space) * 6);     /* 1.5rem  */
        --space-6: calc(var(--space) * 8);     /* 2rem    */
        --space-7: calc(var(--space) * 12);    /* 3rem    */
        --space-8: calc(var(--space) * 16);    /* 4rem    */
        --space-9: calc(var(--space) * 24);    /* 6rem    */
        --space-10: calc(var(--space) * 32);   /* 8rem    */

        --space-prose: 1.2em;

        --measure-1: 15ch;
        --measure-2: 30ch;
        --measure-3: 45ch;
        --measure-4: 60ch;
        --measure-5: 75ch;
    }
}
            `),
        },
    }),
    P(
        ...inline`Every spacing token is a multiple of ${CodeInline("--space")}. Changing the base value rescales every token proportionally. The ${CodeInline("--measure")} tokens are character-based widths used to constrain text content for readability.`,
    ),

    H2("Borders & shadows"),
    P(
        ...inline`${CodeInline("border.css")} provides border radii and widths. ${CodeInline("shadow.css")} provides an elevation scale from subtle to prominent.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* border.css */

@layer base {
    :root {
        --border-radius-1: 0.25rem;
        --border-radius-2: 0.5rem;
        --border-width-1: 1px;
        --border-width-2: 2px;
    }
}
            `),
        },
    }),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* shadow.css */

@layer base {
    :root {
        --shadow-1: 0 1px rgb(0 0 0 / 0.05);
        --shadow-2: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        --shadow-3: 0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);
        --shadow-4: 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
        --shadow-5: 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1);
        --shadow-6: 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
        --shadow-7: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }
}
            `),
        },
    }),

    H2("Color"),
    P(
        "Color tokens are split across three files by concern: theme colors, text colors, and syntax highlighting. Theme and text colors support dark mode by overriding the same custom properties on a themed body element.",
    ),

    H3("Theme"),
    P(
        ...inline`${CodeInline("color/theme.css")} defines semantic colors for status, backgrounds, and borders. Each semantic color has a base value, a muted variant for hover states, and a text color for contrast. Dark mode overrides the background and border tokens.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* color/theme.css */

@layer base {
    :root {
        --danger: hsl(354.25, 70.46%, 53.53%);
        --danger-muted: hsl(354.25, 70.46%, 45.53%);
        --danger-text: hsl(0deg 0% 100%);

        --success: hsl(152.18, 68.75%, 31.37%);
        --success-muted: hsl(152.18, 68.75%, 26.37%);
        --success-text: hsl(0deg 0% 100%);

        --info: hsl(190.04, 89.72%, 49.61%);
        --info-muted: hsl(190.04, 89.72%, 44.61%);
        --info-text: hsl(0deg 0% 10%);

        --warning: hsl(45, 100%, 51.37%);
        --warning-muted: hsl(45, 100%, 46.37%);
        --warning-text: hsl(0deg 0% 10%);

        --background: hsl(0deg 0% 100%);
        --background-muted: hsl(0deg, 0%, 96%);
        --background-inverted: hsl(0deg 0% 10%);
        --background-muted-inverted: hsl(0deg 0% 20%);

        --border-color: hsl(0deg, 0%, 90%);
    }

    body[data-theme="dark"] {
        color-scheme: dark;

        --background: hsl(0deg 0% 10%);
        --background-muted: hsl(0deg 0% 20%);
        --background-inverted: hsl(0deg 0% 100%);
        --background-muted-inverted: hsl(0deg, 0%, 96%);

        --border-color: hsl(0deg 0% 30%);
    }
}
            `),
        },
    }),

    H3("Text"),
    P(
        ...inline`${CodeInline("color/text.css")} provides three levels of text emphasis - base, prose, and muted - each with an inverted counterpart. Dark mode swaps the values so the same token names work in both themes.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* color/text.css */

@layer base {
    :root {
        --text-color-base: hsl(0deg 0% 10%);
        --text-color-prose: hsl(0deg 0% 20%);
        --text-color-muted: hsl(0deg 0% 40%);

        --text-color-base-inverted: hsl(0deg 0% 100%);
        --text-color-prose-inverted: hsl(0deg, 0%, 96%);
        --text-color-muted-inverted: hsl(0, 0%, 70%);
    }

    body[data-theme="dark"] {
        --text-color-base: hsl(0deg 0% 100%);
        --text-color-prose: hsl(0deg, 0%, 96%);
        --text-color-muted: hsl(0, 0%, 70%);

        --text-color-base-inverted: hsl(0deg 0% 10%);
        --text-color-prose-inverted: hsl(0deg 0% 20%);
        --text-color-muted-inverted: hsl(0deg 0% 40%);
    }
}
            `),
        },
    }),

    H3("Code"),
    P(
        ...inline`${CodeInline("color/code.css")} defines syntax highlighting tokens for code blocks. Each token maps to a grammatical role - keywords, strings, functions, and so on. Dark mode provides an alternate palette.`,
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* color/code.css */

@layer base {
    :root {
        --code-token-cmnt: #6e7781;
        --code-token-kwd: #cf222e;
        --code-token-str: #0a3069;
        --code-token-func: #8250df;
        --code-token-type: #0550ae;
        --code-token-num: #0550ae;
        --code-token-class: #953800;
        /* ... and more */
    }

    body[data-theme="dark"] {
        --code-token-cmnt: #8b949e;
        --code-token-kwd: #ff7b72;
        --code-token-str: #a5d6ff;
        --code-token-func: #d2a8ff;
        --code-token-type: #79c0ff;
        --code-token-num: #79c0ff;
        --code-token-class: #ffa657;
        /* ... */
    }
}
            `),
        },
    }),

    H2("Text"),
    P(
        "Typography tokens are split into three files covering size, weight, and line height.",
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* text/sizes.css */

@layer base {
    :root {
        --font-size-base: 1rem;

        --font-size-title-1: clamp(3rem, 2.55rem + 1.5vw, 3.75rem);
        --font-size-title-2: 2.25rem;
        --font-size-title-3: 1.75rem;
        --font-size-title-4: 1.25rem;

        --font-size-prose-base: 1rem;
        --font-size-prose-large: 1.25rem;
        --font-size-prose-small: 0.875rem;
    }
}
            `),
        },
    }),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* text/weight.css */

@layer base {
    :root {
        --font-thin: 100;
        --font-extralight: 200;
        --font-light: 300;
        --font-normal: 400;
        --font-medium: 500;
        --font-semibold: 600;
        --font-bold: 700;
        --font-extrabold: 800;
        --font-black: 900;
    }
}
            `),
        },
    }),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* text/composition.css */

@layer base {
    :root {
        --line-height-sparse: 2;
        --line-height-prose: 1.75;
        --line-height-heading: 1.2;
    }
}
            `),
        },
    }),

    H2("Resets"),
    P(
        "The reset files establish minimal global defaults. They set the box model, remove default body margin, apply the base font and text color, and set the body background.",
    ),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* reset/base.css */

@layer base {
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }
}
            `),
        },
    }),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* reset/text.css */

@layer base {
    body {
        font-family: "InterVariable", sans-serif;
        color: var(--text-color-base, initial);
    }
}
            `),
        },
    }),
    ComponentPanel({
        sources: {
            CSS: CSSCodeBlock(`
/* reset/theme.css */

@layer base {
    body {
        background-color: var(--background-color, initial);
    }
}
            `),
        },
    }),
    P(
        "These resets consume the tokens defined above, so the base font color and background are already driven by the design system. Patterns and variants never need to re-declare these defaults.",
    ),
];
