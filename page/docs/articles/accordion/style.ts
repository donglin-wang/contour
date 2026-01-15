import inlineEnd from "/page/docs/articles/accordion/style/inlineEndIndicator.css?inline";
import enclosed from "/page/docs/articles/accordion/style/enclosed.css?inline";
import character from "/page/docs/articles/accordion/style/character.css?inline";
import alternative from "/page/docs/articles/accordion/style/alternativeIndicator.css?inline";
import icon from "/page/docs/articles/trigger/style/icon.css?inline";
import modifiers from "/style/variant/trigger/modifiers.css?inline";

const containerStyle = /*css*/`
@layer variant {
    .accordion[data-variant="accordion-display"] {
        flex: 1;
        padding: var(--space-5);
    }
}`;
console.log(alternative);

export default containerStyle + inlineEnd + enclosed + character + alternative + icon + modifiers;