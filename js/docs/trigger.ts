import van from "/js/van/van.js";
import {
    Article,
    H1,
    H2,
    P,
    Ul,
    Li,
    CodeInline,
    registerStyle,
} from "/js/article.js";
import { ChevronRight, Play } from "/js/symbol.js";
import { highlightHTML, highlightCSS } from "/js/highlight.js";

const { button, span, b, div, a, input } = van.tags;

const buttonBasic = div(
    { class: "container", "data-variant": "button-display" },
    button({ class: "trigger" }, "Button"),
    a(
        {
            class: "trigger",
            href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            target: "_blank",
        },
        "Anchor"
    ),
    input({ class: "trigger", type: "submit" }, "Submit"),
    input({ class: "trigger", type: "reset" }, "Reset")
);

const buttonColordVariables = registerStyle(/*css*/ `
@layer base {
    :root {
        --danger-1: hsl(354.25, 70.46%, 53.53%);
        --danger-2: hsl(354.25, 70.46%, 45.53%);
        --danger-content: hsl(0deg 0% 100%);

        --success-1: hsl(152.18, 68.75%, 31.37%);
        --success-2: hsl(152.18, 68.75%, 26.37%);
        --success-content: hsl(0deg 0% 100%);

        --info-1: hsl(190.04, 89.72%, 49.61%);
        --info-2: hsl(190.04, 89.72%, 44.61%);
        --info-content: hsl(0deg 0% 10%);

        --warning-1: hsl(45, 100%, 51.37%);
        --warning-2: hsl(45, 100%, 46.37%);
        --warning-content: hsl(0deg 0% 10%);
    }
}`);

const buttonColoredStyle = registerStyle(/*css*/ `
@layer variant {
    .trigger[data-variant="danger"] {
        --trigger-background: var(--danger-1);
        --trigger-hover-background: var(--danger-2);
        --trigger-border-block: none;
        --trigger-border-inline: none;
        color: var(--danger-content);
    }

    .trigger[data-variant="success"] {
        --trigger-background: var(--success-1);
        --trigger-hover-background: var(--success-2);
        --trigger-border-block: none;
        --trigger-border-inline: none;
        color: var(--success-content);
    }

    .trigger[data-variant="info"] {
        --trigger-background: var(--info-1);
        --trigger-hover-background: var(--info-2);
        --trigger-border-block: none;
        --trigger-border-inline: none;
        color: var(--info-content);
    }

    .trigger[data-variant="warning"] {
        --trigger-background: var(--warning-1);
        --trigger-hover-background: var(--warning-2);
        --trigger-border-block: none;
        --trigger-border-inline: none;
        color: var(--warning-content);
    }
}`);

const buttonModifierStyle = registerStyle(/*css*/ `
@layer variant {
    .trigger.is-pill {
        border-radius: 999px;
        padding-inline: var(--space-5);
    }

    .trigger.is-ghost {
        --trigger-background: transparent;
        --trigger-hover-background: var(--background-color-2);
        border: none;
    }

    .trigger.is-full {
        width: 100%;
    }
}`);

const modifiedButtons = div(
    { class: "container", "data-variant": "button-display" },
    button(
        {
            class: "trigger is-pill",
        },
        "Pill"
    ),
    button(
        {
            class: "trigger is-ghost",
        },
        "Ghost"
    ),
    button(
        {
            class: "trigger is-pill is-ghost",
        },
        "Pill ghost"
    )
);

const fullButtons = div(
    { class: "container", "data-variant": "button-display-col" },
    button(
        {
            class: "trigger is-full",
        },
        "Full width"
    ),
    button(
        {
            class: "trigger is-full is-pill",
        },
        "Full pill"
    ),
    button(
        {
            class: "trigger is-full is-ghost",
        },
        "Full ghost"
    ),
    button(
        {
            class: "trigger is-full is-pill is-ghost",
        },
        "Full pill ghost"
    )
);

const articleControlStyle = registerStyle(/*css*/ `
@layer variant {
    .trigger[data-variant="article-control-next"],
    .trigger[data-variant="article-control-prev"] {
        flex: 1;
        max-width: 50%;
        padding-inline: var(--space-4);
        padding-block: var(--space-4);   
    }

    .trigger[data-variant="article-control-prev"] {
        flex-direction: row-reverse;
    }

    .trigger__section[data-variant="article-control"] {
        flex-direction: column;
        gap: var(--space-1);
        align-items: start;
    }

    .typography[data-variant="article-control-primary"] {
        font-size: var(--font-size-base);
        font-weight: bold;
    }

    .typography[data-variant="article-control-secondary"] {
        font-size: var(--font-size-s);
        font-weight: var(--font-extralight);
        color: var(--color-2);
    }

    .symbol[data-variant="article-control-chevron-next"],
    .symbol[data-variant="article-control-chevron-prev"] {
        width: var(--space-5);
        height: var(--space-5);
        color: var(--color-3);
    }

    .symbol[data-variant="article-control-chevron-next"] {
        margin-inline-start: auto;
    }

    .symbol[data-variant="article-control-chevron-prev"] {
        margin-inline-end: auto;
        transform: rotate(-180deg);
    }
}`);

const ArticleControl = (variantSuffix, title) =>
    button(
        {
            class: "trigger",
            "data-variant": `article-control-${variantSuffix}`,
        },
        span(
            {
                class: "trigger__section",
                "data-variant": "article-control",
            },
            b(
                {
                    class: "typography",
                    "data-variant": "article-control-primary",
                },
                title
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "article-control-secondary",
                },
                variantSuffix === "prev" ? "Previous" : "Next"
            )
        ),
        ChevronRight(`article-control-chevron-${variantSuffix}`)
    );

const articleControls = div(
    { class: "container", "data-variant": "button-display" },
    ArticleControl("prev", "Notice"),
    ArticleControl("next", "Typography")
);

const article = Article(
    H1("Trigger"),
    P("Button can be used on: "),
    Ul(
        Li(CodeInline("<a>")),
        Li(CodeInline("<button>")),
        Li(CodeInline('<input type="submit">')),
        Li(CodeInline('<input type="reset">'))
    ),
    P("It may contain elements with the following classes: "),
    Ul(
        Li(
            CodeInline("trigger__section"),
            " to organize and customize elements. It can be nested."
        ),
        Li(
            CodeInline("trigger--symbol"),
            " to reference symbols"
        )
    ),
    P(
        'Notice how, if you right click on the "Anchor" button, it shows an option to open the link in a new tab'
    ),
    buttonBasic,
    highlightHTML(buttonBasic, true),
    H2("Colored variants"),
    div(
        { class: "container", "data-variant": "button-display" },
        button({ class: "trigger", "data-variant": "danger" }, "Danger"),
        button({ class: "trigger", "data-variant": "success" }, "Success"),
        button({ class: "trigger", "data-variant": "info" }, "Info"),
        button({ class: "trigger", "data-variant": "warning" }, "Warning")
    ),
    P(
        "To keep the base style minimal, Contour does not define any color other than basic background and foreground. Let's start by creating the variables necessary for our buttons: "
    ),
    highlightCSS(buttonColordVariables),
    P(
        "Then, create the variants. Note that, in the example below, ",
        CodeInline("background"),
        " was set using ",
        CodeInline("--trigger-background"),
        " variable. However, the color is set using the ",
        CodeInline("color"),
        " property directly. This is because both the normal and hover state share the same color, but not the same background."
    ),
    highlightCSS(buttonColoredStyle),
    H2("Modifiers"),
    P(
        "You can apply one or more modifiers to your button as long as it does not conflict with properties defined in the variant or other modifiers. Keep in mind that any new modifier needs to widely applicable across variants and composable with other modifiers."
    ),
    modifiedButtons,
    highlightHTML(modifiedButtons, true),
    fullButtons,
    highlightHTML(fullButtons, true),
    highlightCSS(buttonModifierStyle),
    H2("Article controls"),
    P(
        "Below are two buttons commonly found in documentations. Let's implement them: "
    ),
    articleControls,
    highlightHTML(articleControls, true),
    highlightCSS(articleControlStyle)
);

van.add(document.body, article);
