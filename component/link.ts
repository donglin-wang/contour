import type { Attributes, Child } from "/lib/tags";
import { tags } from "/lib/tags";

export type LinkSpec = {
    callback?: () => Promise<void>;
    attributes: Attributes;
    children: Child[];
};

const { a } = tags;

export const Link = ({
    callback,
    attributes = {},
    children = [],
}: LinkSpec) => {
    const root = a(attributes, ...children);

    if (callback) {
        root.addEventListener("click", async (event) => {
            event.preventDefault();
            await callback();
        });
    }

    return root;
};
