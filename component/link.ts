import { tags } from "/lib/tags";

import type { Child, Attributes } from "/lib/tags";

export type LinkSpec = {
    callback?: () => void;
    attributes: Attributes;
    children: Child[];
};

const { a } = tags;

export const Link = ({
    callback = null,
    attributes = {},
    children = [],
}: LinkSpec) => {
    const root = a(attributes, ...children);

    if (callback) {
        root.addEventListener("click", (event) => {
            event.preventDefault();
            callback();
        });
    }

    return root;
};
