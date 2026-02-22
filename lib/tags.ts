export type Primitive = string | number | boolean | bigint;

export type Child = Primitive | Element;

export type Attributes = Record<string, Primitive>;

export type TagFunc<ElementType> = (
    first?: Attributes | Child,
    ...rest: Child[]
) => ElementType;

export type HTMLTags = {
    [K in keyof HTMLElementTagNameMap]: TagFunc<HTMLElementTagNameMap[K]>;
};

export type SVGTags = {
    [K in keyof SVGElementTagNameMap]: TagFunc<SVGElementTagNameMap[K]>;
};

const buildHTMLElement = <T extends keyof HTMLElementTagNameMap>(
    name: T,
    first?: Attributes | Child,
    ...rest: Child[]
) => {
    const element = document.createElement<T>(name);

    populate(element, first, ...rest);

    return element;
};

const buildSVGElement = <T extends keyof SVGElementTagNameMap>(
    name: T,
    first?: Attributes | Child,
    ...rest: Child[]
) => {
    const element = document.createElementNS<T>(
        "http://www.w3.org/2000/svg",
        name,
    );

    populate(element, first, ...rest);

    return element;
};

export const populate = (
    root: Element | ShadowRoot,
    first?: Attributes | Child,
    ...rest: Child[]
) => {
    let children: Child[];

    if (
        first !== null &&
        first !== undefined &&
        typeof first === "object" &&
        !(first instanceof Element) &&
        !(root instanceof ShadowRoot)
    ) {
        Object.entries(first).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                root.setAttribute(key, value.toString());
            } else {
                root.toggleAttribute(key, true);
            }
        });
        children = rest;
    } else {
        children = first !== undefined ? [first as Child, ...rest] : rest;
    }

    children.forEach((child) => {
        if (child instanceof Element) {
            root.appendChild(child);
        } else if (child !== undefined && child !== null) {
            root.appendChild(new Text(child.toString()));
        }
    });
};

export const tags = new Proxy({} as HTMLTags, {
    get(_, prop: keyof HTMLElementTagNameMap) {
        return (first: Attributes | Child, ...children: Child[]) =>
            buildHTMLElement(prop, first, ...children);
    },
});

export const svgTags = new Proxy({} as SVGTags, {
    get(_, prop: keyof SVGElementTagNameMap) {
        return (first: Attributes | Child, ...children: Child[]) =>
            buildSVGElement(prop, first, ...children);
    },
});
