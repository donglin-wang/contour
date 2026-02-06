import colored from "/style/variant/trigger/colored.css?inline";
import articleControl from "/style/variant/trigger/articleControl.css?inline";
import modifiers from "/style/variant/trigger/modifiers.css?inline";
import preview from "/style/variant/trigger/preview.css?inline";
import icon from "/style/variant/trigger/icon.css?inline";
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
