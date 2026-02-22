import { tags } from "/lib/tags";

const { h1, h2, h3, h4, h5, h6 } = tags;

export default [
    h1({ class: "text", "data-variant": "heading-1" }, "Heading 1"),
    h2({ class: "text", "data-variant": "heading-2" }, "Heading 2"),
    h3({ class: "text", "data-variant": "heading-3" }, "Heading 3"),
    h4({ class: "text", "data-variant": "heading-4" }, "Heading 4"),
    h5({ class: "text", "data-variant": "heading-5" }, "Heading 5"),
    h6({ class: "text", "data-variant": "heading-6" }, "Heading 6"),
];
