import van from "/js/van.js";
import { highlightAll } from "/js/shj.js";
import {
    Article,
    H1,
    H2,
    P,
    Ul,
    Li,
    CodeInline,
    Section,
    registerStyle,
} from "/js/article.js";
import { ChevronRight, Play, ArrowUp, ArrowDown } from "/js/icon.js";
import { highlightHTML, highlightCSS } from "/js/highlight.js";

const { button, span, b, div, img, kbd, hr } = van.tags;

const menuVanillaStyle = registerStyle(/*css*/ `
@layer variant {
    .list[data-variant="menu"] {
        --list-item-padding-inline: var(--space-4);
        --list-item-padding-block: var(--space-4);
    }

    .list__item[data-variant="menu-item"] {
        --list-item-hover-background: var(--background-color-2);

        cursor: pointer;
        grid-template-columns: 1fr max-content;
    }

    .typography[data-variant="menu-title"] {
        display: block;
        padding-inline: var(--list-item-padding-inline);
        padding-block: var(--list-item-padding-block);
        font-weight: var(--font-bold);
        line-height: 1;
    }

    .typography[data-variant="menu-kbd"] {
        display: inline-block;
        font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo,
            Consolas, "DejaVu Sans Mono", monospace;
        color: var(--color-3);
    }

    .divider[data-variant="menu-divider"] {
        margin-block: var(--space-1);
        border-color: var(--background-color-3);
        border-style: solid;
        border-block-end: none;
    }

    .icon[data-variant="menu-chevron"] {
        width: var(--font-size-base);
        height: var(--font-size-base);
    }
}`);

const menuVanilla = Section(
    div(
        { class: "list", "data-variant": "menu" },
        b(
            {
                class: "typography",
                "data-variant": "menu-title",
            },
            "My Account"
        ),
        div(
            {
                class: "list__item",
                "data-variant": "menu-item",
            },
            span("Profile"),
            kbd(
                {
                    class: "typography",
                    "data-variant": "menu-kbd",
                },
                "⌘P"
            )
        ),
        div(
            {
                class: "list__item",
                "data-variant": "menu-item",
            },
            span("Billing"),
            kbd(
                {
                    class: "typography",
                    "data-variant": "menu-kbd",
                },
                "⌘B"
            )
        ),
        hr({ class: "divider", "data-variant": "menu-divider" }),
        b(
            {
                class: "typography",
                "data-variant": "menu-title",
            },
            "Workspace"
        ),
        div(
            {
                class: "list__item",
                "data-variant": "menu-item",
            },
            "Settings"
        ),
        div(
            {
                class: "list__item",
                "data-variant": "menu-item",
            },
            "Invite users"
        ),
        div(
            {
                class: "list__item",
                "data-variant": "menu-item",
            },
            span("View members"),
            ChevronRight("menu-chevron")
        )
    )
);

const accountSelectionStyle = registerStyle(/*css*/ `
@layer variant {
    .list[data-variant="account-selection"] {
        --list-item-padding-inline: var(--space-4);
        --list-item-padding-block: var(--space-4);
    }

    .list__item[data-variant="account-selection"] {
        --list-item-hover-background: var(--background-color-2);
        grid-template-columns: max-content max-content;
        grid-template-rows: min-content min-content;
        column-gap: var(--space-3);
        align-items: center;
        cursor: pointer;
        padding-block: var(--space-3);
    }

    .avatar[data-variant="account-selection"] {
        grid-column: 1 / 2;
        grid-row: 1 / span 2;
        width: var(--space-7);
        height: var(--space-7);
        border-radius: 999px;
    }

    .typography[data-variant="account-selection-primary"] {
        font-weight: var(--font-bold);
    }

    .typography[data-variant="account-selection-secondary"] {
        color: var(--color-3);
    }
}`);

const accountSelection = Section(
    div(
        { class: "list", "data-variant": "account-selection" },
        b(
            {
                class: "typography",
                "data-variant": "menu-title",
            },
            "Accounts"
        ),
        div(
            {
                class: "list__item",
                "data-variant": "account-selection",
            },
            img({
                class: "avatar",
                "data-variant": "account-selection",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
            }),
            b(
                {
                    class: "typography",
                    "data-variant": "account-selection-primary",
                },
                "User 1"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "account-selection-secondary",
                },
                "A typical linux user"
            )
        ),
        div(
            {
                class: "list__item",
                "data-variant": "account-selection",
            },
            img({
                class: "avatar",
                "data-variant": "account-selection",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
            }),
            b(
                {
                    class: "typography",
                    "data-variant": "account-selection-primary",
                },
                "User 2"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "account-selection-secondary",
                },
                "A typical linux user"
            )
        )
    )
);

const rankingStyle = registerStyle(/*css*/ `
@layer variant {
    .list__item[data-variant="ranking"] {
        grid-template-columns: min-content min-content 1fr min-content;
        grid-template-rows: min-content min-content;
        column-gap: var(--space-4);
        align-items: center;
    }

    .typography[data-variant="ranking-index"] {
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
        font-size: var(--font-size-3xl);
        font-variant-numeric: tabular-nums;
    }

    .typography[data-variant="ranking-primary"] {
        grid-row: 1 / span 1;
        font-weight: var(--font-bold);
    }

    .typography[data-variant="ranking-secondary"] {
        grid-row: 2 / span 1;
        color: var(--color-3);
        font-size: var(--font-size-s);
    }

    .avatar[data-variant="ranking-avatar"] {
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
        width: var(--space-7);
        height: var(--space-7);
        border-radius: 5px;
    }

    .trigger[data-variant="ranking-control"] {
        grid-row: 1 / span 2;
    }
}`);

const ranking = Section(
    div(
        {
            class: "list",
        },
        div(
            {
                class: "list__item",
                "data-variant": "ranking",
            },
            span(
                { class: "typography", "data-variant": "ranking-index" },
                "01"
            ),
            img({
                class: "avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
                "data-variant": "ranking-avatar",
            }),
            span(
                {
                    class: "typography",
                    "data-variant": "ranking-primary",
                },
                "Ellie Beilish"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "ranking-secondary",
                },
                "Bears of a fever"
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "ranking-control",
                },
                Play()
            )
        ),
        div(
            {
                class: "list__item",
                "data-variant": "ranking",
            },
            span(
                { class: "typography", "data-variant": "ranking-index" },
                "02"
            ),
            img({
                class: "avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
                "data-variant": "ranking-avatar",
            }),
            span(
                {
                    class: "typography",
                    "data-variant": "ranking-primary",
                },
                "Dio Lupa"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "ranking-secondary",
                },
                "Remaining Reason"
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "ranking-control",
                },
                Play()
            )
        ),
        div(
            {
                class: "list__item",
                "data-variant": "ranking",
            },
            span(
                { class: "typography", "data-variant": "ranking-index" },
                "03"
            ),
            img({
                class: "avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
                "data-variant": "ranking-avatar",
            }),
            span(
                {
                    class: "typography",
                    "data-variant": "ranking-primary",
                },
                "Sabrino Gardener"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "ranking-secondary",
                },
                "Cappuccino"
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "ranking-control",
                },
                Play()
            )
        )
    )
);

const commentStyle = registerStyle(/*css*/ `
@layer variant {
    .list__item[data-variant="comment"] {
        grid-template-columns: min-content 1fr min-content min-content;
        grid-template-rows: min-content min-content min-content;
        column-gap: var(--space-4);
        align-items: center;
        padding: var(--space-4);
    }

    .avatar[data-variant="comment-avatar"] {
        grid-column: 1 / 2;
        grid-row: 1 / span 2;
        width: var(--space-7);
        height: var(--space-7);
        border-radius: 5px;
    }

    .typography[data-variant="comment-primary"] {
        grid-column: 2 / span 1;
        grid-row: 1 / span 1;
        font-weight: var(--font-bold);
    }

    .typography[data-variant="comment-secondary"] {
        grid-column: 2 / span 1;
        grid-row: 2 / span 1;
        color: var(--color-3);
        font-size: var(--font-size-s);
    }

    .typography[data-variant="comment-content"] {
        grid-column: 2 / span 3;
        grid-row: 3 / span 1;
        margin-block-start: var(--space-5);
        line-height: var(--line-height-content);
    }

    .trigger[data-variant="comment-control"] {
        --icon-width: var(--space-5);
        --icon-height: var(--space-5);
        padding: var(--space-3);
        grid-row: 1 / span 2;
        border-radius: 5px;
        border: none;
    }
}`);

const comments = Section(
    div(
        {
            class: "list",
            "data-variant": "comment",
        },
        div(
            {
                class: "list__item",
                "data-variant": "comment",
            },
            img({
                class: "avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
                "data-variant": "comment-avatar",
            }),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-primary",
                },
                "u/SliceSliceBaby"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-secondary",
                },
                "Pizza lover"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-content",
                },
                `I respect everyone's opinion, but also pineapple on pizza is objectively delicious and if you disagree we can still be friends but I'll be praying for your taste buds.`
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "comment-control",
                },
                ArrowUp()
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "comment-control",
                },
                ArrowDown()
            )
        ),
        div(
            {
                class: "list__item",
                "data-variant": "comment",
            },
            img({
                class: "avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
                "data-variant": "comment-avatar",
            }),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-primary",
                },
                "u/NoSleepJustXP"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-secondary",
                },
                "Hardcore gamer"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-content",
                },
                `I've optimized my ramen preparation to 4 minutes 23 seconds so I don't miss queue times. This is what peak performance looks like.`
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "comment-control",
                },
                ArrowUp()
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "comment-control",
                },
                ArrowDown()
            )
        ),
        div(
            {
                class: "list__item",
                "data-variant": "comment",
            },
            img({
                class: "avatar",
                src: "/asset/image/linux.jpg",
                alt: "Linux penguin",
                "data-variant": "comment-avatar",
            }),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-primary",
                },
                "u/MintConditionMenace"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-secondary",
                },
                "Funko Pop addict"
            ),
            span(
                {
                    class: "typography",
                    "data-variant": "comment-content",
                },
                `Just got my 847th Funko Pop and my partner asked where we're gonna put the Christmas tree this year. Bold of them to assume the Funko shelf isn't the tree.`
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "comment-control",
                },
                ArrowUp()
            ),
            button(
                {
                    class: "trigger",
                    "data-variant": "comment-control",
                },
                ArrowDown()
            )
        ),
    )
);

const article = Article(
    H1("List"),
    P(
        `List is an abstraction over many other common UI patterns such as 
        menu, comment section, article preview, etc. List consists of the 
        following: `
    ),
    Ul(
        Li(
            CodeInline("list__item"),
            ` for the items within the list. It has `,
            CodeInline("display: grid"),
            ` by default`
        ),
        Li(
            CodeInline("list__section"),
            ` for organizing items within the list and elements within each item`
        )
    ),
    H2("Menu"),
    P(
        `Below is a vanilla menu with divider, section title, kbd, and chevron: `
    ),
    menuVanilla,
    highlightHTML(menuVanilla, true),
    highlightCSS(menuVanillaStyle),
    H2("Account selection"),
    P(
        `Below is a menu commonly used to switch between accounts that you own: `
    ),
    accountSelection,
    highlightHTML(accountSelection, true),
    highlightCSS(accountSelectionStyle),
    H2("Ranking"),
    P(
        `Below is a pattern that ranks the most popular song. You can adapt 
        it to be ranking of other things, such as football players or e-sport 
        leader board.`
    ),
    ranking,
    highlightHTML(ranking, true),
    highlightCSS(rankingStyle),
    H2("Comment section"),
    P(`You can customize list to be a comment section: `),
    comments
);

van.add(document.body, article);

highlightAll({
    hideLineNumbers: true,
});
