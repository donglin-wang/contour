import { populate, tags } from "/lib/tags";
import type { Child, Attributes } from "/lib/tags";

export type ArticleSpec = {
    providedChildren?: Child[];
    hasOutline?: boolean;
    articleAttributes?: Attributes;
    outlineItemAttributes?: Attributes;
    outlineAttributes?: Attributes;
    articleRootAttributes?: Attributes;
};

const { div } = tags;

class Article extends HTMLElement {
    outlineAttributes: Attributes;
    outlineItemAttributes: Attributes;
    articleAttributes: Attributes;
    articleRootAttributes: Attributes;
    hasOutline: boolean;
    providedChildren: Child[];

    private outlineLookup: Record<string, Element> = {};

    constructor({
        providedChildren = [],
        hasOutline = false,
        articleAttributes = {},
        articleRootAttributes = {},
        outlineItemAttributes = {},
        outlineAttributes = {},
    }: ArticleSpec) {
        super();
        this.providedChildren = providedChildren;
        this.hasOutline = hasOutline;
        this.articleRootAttributes = articleRootAttributes;
        this.articleAttributes = articleAttributes;
        this.outlineAttributes = outlineAttributes;
        this.outlineItemAttributes = outlineItemAttributes;
    }

    connectedCallback() {
        const article = div(this.articleAttributes, ...this.providedChildren);

        const spec = this.populateHeadingIds(article);
        const { outline, lookup } = this.createOutline(spec);

        this.outlineLookup = lookup;

        populate(this, this.articleRootAttributes, article, outline);

        const options: IntersectionObserverInit = {
            threshold: [0],
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = (entry.target as HTMLElement).id;
                if (entry.isIntersecting) {
                    this.setActiveItem(id);
                }
            });
        }, options);

        spec.forEach(({ ref }) => {
            observer.observe(ref);
        });
    }

    setActiveItem(id: string) {
        for (const item of Object.values(this.outlineLookup)) {
            item.removeAttribute("aria-current");
        }

        const selected = this.outlineLookup[id];
        if (selected) {
            selected.setAttribute("aria-current", "true");
        }
    }

    createOutline(spec: { id: string; title: string }[]) {
        const lookup: Record<string, Element> = {};
        for (const { id, title } of spec) {
            lookup[id] = div(this.outlineItemAttributes, title);
        }

        const outline = div(this.outlineAttributes, ...Object.values(lookup));

        return { outline, lookup };
    }

    populateHeadingIds(article: HTMLElement) {
        const spec: { id: string; title: string; ref: Element }[] = [];
        const headings = article.querySelectorAll("h1, h2, h3, h4, h5, h6");
        headings.forEach((element, i) => {
            element.id = `heading-${i}`;
            spec.push({
                id: element.id,
                title: element.textContent,
                ref: element,
            });
        });
        return spec;
    }
}

customElements.define("contour-article", Article);

export default Article;
