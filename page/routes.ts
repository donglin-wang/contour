import {root, scaffold} from "/page/root";

export default () => {
    document.body.replaceChildren(...scaffold);
    return root;
};
