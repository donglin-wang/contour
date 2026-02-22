import {
    CodeInline,
    H1,
    H2,
    inline,
    Li,
    P,
    Subheading,
    Ul,
} from "/page/docs/component";

export default [
    H1("Overview"),
    Subheading(
        "A naming convention and a set of references for building scalable styling systems with pure CSS - no build step, no framework coupling, and no dependencies.",
    ),

    H2("Why?"),
    P(
        "In the current CSS landscape, two extremes dominate. On one end, component-based libraries like Bootstrap and Bulma provide semantic classes with baked-in assumptions. Many offer CSS variables and theming APIs for customization, but the core of these libraries remains opaque and difficult to extend. For teams whose design systems outgrow these pre-built styles, customization becomes a fight against specificity and internal implementation details. In addition, users are always at the mercy of upstream maintainers to preserve backward compatibility.",
    ),
    P(
        "On the other end, Tailwind offers flexibility on par with vanilla CSS and encourages fast iteration in a component-driven workflow. However, to express a design system and build reusable semantic variations, teams must fall back on techniques that essentially recreate vanilla CSS authoring:",
    ),
    Ul(
        Li(
            ...inline`Using ${CodeInline("@apply")} rules to package utilities into semantic classes`,
        ),
        Li("Using JavaScript tools like CVA to manage utility combinations"),
    ),
    P(
        "These approaches handle specificity well and encourage colocation of style and markup, which feels natural for developers working against a deadline. But they also mean that styling inevitably bleeds into framework and application logic. This is an acceptable tradeoff for teams committed to a single framework. For organizations that need a styling system to work across multiple frameworks and technologies simultaneously, a framework-independent approach is needed.",
    ),
    P(
        "Contour sits between these two extremes. It provides a naming convention and a set of references that demonstrate how a scalable styling system can be built with pure CSS - no build step, no framework coupling, and no dependencies.",
    ),

    H2("Goals"),
    Ul(
        Li(
            "No amount of tooling will solve behavioral issues. Contour focuses on guiding developer behavior through convention rather than enforcement. Its naming rules, layer boundaries, and data attribute patterns are designed so that multiple developers can contribute styles concurrently without specificity conflicts or accidental overrides.",
        ),
        Li(
            "You only load what you use. Each token file, pattern, and variant is a standalone CSS file that can be included or omitted independently. Resets are kept to a bare minimum so they never interfere with styles outside of Contour.",
        ),
        Li(
            "No dependencies, no build step. Every file is valid CSS that works directly in a modern browser. There is no preprocessor, no runtime, and no framework binding between your styles and the page.",
        ),
    ),

    H2("Non-goals"),
    Ul(
        Li(
            ...inline`${"Contour does not optimize for shipping styles as fast as possible. It prioritizes methodical organization of styles - clear layer boundaries, predictable naming, and explicit separation of concerns - over rapid prototyping."}`,
        ),
        Li(
            ...inline`${"There is no package to install and no CDN to link. You set up the file structure yourself, write your own tokens, and fully own every line of CSS. Contour provides the conventions and references, not the code."}`,
        ),
        Li(
            ...inline`${"Contour assumes fluency with CSS. Concepts like cascade layers, custom property inheritance, and attribute selectors are foundational to how it works, and the documentation does not teach them from first principles."}`,
        ),
    ),
];
