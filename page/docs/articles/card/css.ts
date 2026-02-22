import connect from "/style/variant/card/connect.css?inline";
import post from "/style/variant/card/post.css?inline";
import product from "/style/variant/card/product.css?inline";
import icon from "/style/variant/trigger/icon.css?inline";
import triggerModifiers from "/style/variant/trigger/modifiers.css?inline";

const containerStyle = /*css*/ `
@layer variant {
    .container[data-variant="card-display"] {
        max-width: 24rem;
    }
}`;

export default containerStyle +
    post +
    icon +
    triggerModifiers +
    product +
    connect;
