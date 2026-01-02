import outlineStyle from "/js/style/pattern/outline.css?inline";
import articleStyle from "/js/style/variant/article.css?inline";

export default /*css*/`
/* Article */
${articleStyle}

/* Article outline */
${outlineStyle}

/* Article & sidebar scaffold */
@layer variant {
    .container[data-variant="article-root"] {
        display: flex;
        gap: 2rem;
        position: relative;
        height: 100vh;
        overflow-y: auto;
        gap: var(--space-8);
        margin-inline: auto;
    }
    .container[data-variant="article-alt"] {
        max-width: 40rem;
        padding-inline: var(--space-4);
    }

    .outline[data-variant="article-outline"] {
        flex: 0 0 18rem;
        position: sticky;
        top: 0;
    }

    @media (width <= 80rem) {
        .outline {
            display: none;
        }
    }

    .container[data-variant="contour-root"] {
        display: flex;
    }

    .list[data-variant="contour-menu"] {
        width: 18rem;
        border: none;
        border-radius: 0;
        padding: var(--space-4);
         border-inline-end: 1px solid var(--background-color-3);
    }

    .list__item[data-variant="contour-menu"] {
        text-decoration: none;
        color: var(--color-1);
        border-radius: 5px;
        cursor: pointer;
        --list-item-hover-background: var(--background-color-2);
       
    }

    @media (width <= 64rem) {
        .list[data-variant="contour-menu"] {
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
`