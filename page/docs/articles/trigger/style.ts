import colored from "/page/docs/articles/trigger/style/colored.css?inline";
import articleControl from "/page/docs/articles/trigger/style/articleControl.css?inline";
import modifiers from "/page/docs/articles/trigger/style/modifiers.css?inline";
import preview from "/page/docs/articles/trigger/style/preview.css?inline";
import icon from "/page/docs/articles/trigger/style/icon.css?inline";
import iconModifiers from "/style/variant/symbol/modifiers.css?inline";

const containerStyle = /*css*/ `
@layer variant {
    .container[data-variant="button-display"] {
        display: flex;
        gap: var(--space-3);
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-inline: var(--space-3);
    }
}`;

export default containerStyle +
    colored +
    articleControl +
    modifiers +
    preview +
    icon +
    iconModifiers;
