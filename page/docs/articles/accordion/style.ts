import inlineEnd from "/style/variant/accordion/inlineEndIndicator.css?inline";
import enclosed from "/style/variant/accordion/enclosed.css?inline";
import character from "/style/variant/accordion/character.css?inline";
import alternative from "/style/variant/accordion/alternativeIndicator.css?inline";
import icon from "/style/variant/trigger/icon.css?inline";
import modifiers from "/style/variant/trigger/modifiers.css?inline";

const containerStyle = /*css*/ `
@layer variant {
    .accordion[data-variant="accordion-display"] {
        flex: 1;
        padding: var(--space-5);
    }
}`;

export default containerStyle +
    inlineEnd +
    enclosed +
    character +
    alternative +
    icon +
    modifiers;
