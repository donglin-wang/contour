import { tags } from "/lib/tags";
import type { Child, Attributes } from "/lib/tags";

export type ArticleSpec = {
    providedChildren?: Child[];
    hasOutline?: boolean;
    articleAttributes?: Attributes;
    outlineItemAttributes?: Attributes;
    outlineAttributes?: Attributes;
    articleRootAttributes?: Attributes;
};

const { a, div, article } = tags;

class Article {
    root: HTMLElement;
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
        this.providedChildren = providedChildren;
        this.hasOutline = hasOutline;
        this.articleRootAttributes = articleRootAttributes;
        this.articleAttributes = articleAttributes;
        this.outlineAttributes = outlineAttributes;
        this.outlineItemAttributes = outlineItemAttributes;

        const articleContent = div(this.articleAttributes, ...this.providedChildren);

        const spec = this.populateHeadingIds(articleContent);
        const { outline, lookup } = this.createOutline(spec);

        this.outlineLookup = lookup;

        this.root = article(this.articleRootAttributes, articleContent, outline);

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
            const link = a({ ...this.outlineItemAttributes, href: `#${id}` }, title);
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.getElementById(id);
                if (target) {
                    const offset = 60;
                    const top = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                    history.pushState(null, "", `#${id}`);
                }
            });
            lookup[id] = link;
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

export default Article;
