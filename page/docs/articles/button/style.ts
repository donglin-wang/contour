import colored from "/page/docs/articles/button/style/colored.css?inline";
import articleControl from "/page/docs/articles/button/style/articleControl.css?inline";
import pillGhost from "/page/docs/articles/button/style/pillGhost.css?inline";
import preview from "/page/docs/articles/button/style/preview.css?inline";

const containerStyle = /*css*/ `
@layer variant {
    .container[data-variant="button-display"] {
        display: flex;
        gap: var(--space-3);
        width: 100%;
        justify-content: center;
        padding-inline: var(--space-3);
    }
}`;

export default containerStyle + colored + articleControl + pillGhost + preview;
