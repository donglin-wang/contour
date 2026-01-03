import outlineStyle from "/style/pattern/outline.css?inline";
import menuStyle from "/style/pattern/menu.css?inline";
import articleStyle from "/style/variant/article.css?inline";

export default /*css*/ `
/* Article */
${articleStyle}

/* Article outline */
${outlineStyle}

/* Menu (sidebar) */
${menuStyle}

/* Article & sidebar scaffold */
@layer variant {
    .container[data-variant="main"] {
        width: 100%;
        display: flex;
    }

    .menu[data-variant="sidebar"] {
        height: 100vh;
        flex: 0 0 18rem;
        border-inline-end: 1px solid var(--background-color-3);
        overflow-y: auto;
        position: sticky;
        top: 0;
        padding: var(--space-4);
    }

    .menu__item[data-variant="sidebar"] {
        border-radius: 5px;
        padding: var(--space-3);
    }

    .container[data-variant="article"] {
        display: flex;
        flex: 1;
        gap: 2rem;
    }

    .container[data-variant="article-content"] {
        flex: 1;
        max-width: 40rem;
        margin-inline: auto;
        padding: var(--space-4);
    }

    .outline[data-variant="article-outline"] {
        --article-outline-width: 18rem;
        position: sticky;
        top: 0;
        flex: 0 0 var(--article-outline-width);
        max-height: 100vh;
        overflow-y: auto;
    }

    @media (width <= 64rem) {
        .menu[data-variant="sidebar"] {
            display: none;
        }
    }

    @media (width <= 80rem) {
        .outline {
            display: none;
        }
    }
}

/* Code highlight */
@layer variant {
    :root {
        --token-cmnt: #6e7781;
        --token-deleted: #cf222e;
        --token-err: #cf222e;
        --token-kwd: #cf222e;
        --token-class: #953800;
        --token-type: #0550ae;
        --token-oper: #0550ae;
        --token-num: #0550ae;
        --token-section: #0550ae;
        --token-var: #0550ae;
        --token-bool: #0550ae;
        --token-insert: #0a3069;
        --token-str: #0a3069;
        --token-func: #8250df;
    }

    .typography[data-variant="token-cmnt"] {
        color: var(--token-cmnt);
    }

    .typography[data-variant="token-deleted"] {
        color: var(--token-deleted);
    }

    .typography[data-variant="token-err"] {
        color: var(--token-err);
    }

    .typography[data-variant="token-kwd"] {
        color: var(--token-kwd);
    }

    .typography[data-variant="token-class"] {
        color: var(--token-class);
    }

    .typography[data-variant="token-type"] {
        color: var(--token-type);
    }

    .typography[data-variant="token-oper"] {
        color: var(--token-oper);
    }

    .typography[data-variant="token-num"] {
        color: var(--token-num);
    }

    .typography[data-variant="token-section"] {
        color: var(--token-section);
    }

    .typography[data-variant="token-var"] {
        color: var(--token-var);
    }

    .typography[data-variant="token-bool"] {
        color: var(--token-bool);
    }

    .typography[data-variant="token-insert"] {
        color: var(--token-insert);
    }

    .typography[data-variant="token-str"] {
        color: var(--token-str);
    }

    .typography[data-variant="token-func"] {
        color: var(--token-func);
    }
}
`;
