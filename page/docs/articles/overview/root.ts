import { tags } from "/lib/tags";
import { H1, H2, H3, P, Ul, Li } from "/page/docs/component";

const { div } = tags;

export default [
    H1("Overview"),
    P(`The Contour CSS library follows a structured and scalable naming
convention system that organizes styles into three primary layers:
Base, Pattern, and Variant. This hierarchical approach ensures
consistency, maintainability, and clarity across the entire design
system.`),

    H2("Benefits of This System"),

    H3("Predictable"),
    P(`Consistent naming makes the codebase easy to navigate and
understand. When developers encounter a class name like .menu__item
or a variant like data-variant="indented", they can immediately
understand the purpose and location of the corresponding styles.
This reduces cognitive load and onboarding time for new team
members.`),

    H3("Scalable"),
    P(`New variants are added without modifying existing patterns. The
separation between pattern and variant layers means you can
introduce new component variations by simply creating new CSS files
in the appropriate variant/[component]/ subdirectory. There's no
risk of breaking existing styles or introducing cascading issues
when adding features.`),

    H3("Maintainable"),
    P(`Clear separation of concerns and explicit layer structure make
debugging and refactoring straightforward. Each CSS file has a
single responsibility: either defining the component structure
(pattern) or applying a specific variation (variant). When a bug
occurs, you know exactly where to look based on whether it's
structural or variant-related.`),

    H3("Flexible"),
    P(`Data attributes allow combining multiple modifiers within a single
variation context. The m- prefix modifier system enables stacking
multiple adjustments on a single component without explosion of
class combinations. Additionally, the @layer system ensures
modifiers and variants compose predictably without specificity
conflicts.`),

    H3("Semantic"),
    P(`HTML remains clean and meaningful with a single primary class name
per element. Rather than littering HTML with dozens of utility or
modifier classes, elements carry semantic meaning through their BEM
class names, with style variations applied through data attributes
and modifier prefixes. This makes the markup easier to read and
maintain.`),

    H3("Performance"),
    P(`CSS layers control cascade without specificity wars. By using
@layer directives, you establish a predictable cascade order
(base → pattern → variant) without relying on specificity tricks
or !important. This results in:`),
    Ul(
        Li(
            "Smaller compiled CSS (no repeated selectors trying to override each other)",
        ),
        Li("Faster browser rendering (simpler cascade resolution)"),
        Li("Easier debugging (no mystery specificity conflicts)"),
        Li("Better maintainability (rules apply in predictable order)"),
    ),

    H3("Consistency Across Components"),
    P(`The standardized structure creates consistency across your entire
design system. Every component follows the same pattern: one base
pattern file, organized variations in dedicated files. This
consistency makes it easier for new components to be added with
confidence that they'll integrate seamlessly with existing styles.`),

    H3("Reduced CSS Duplication"),
    P(`Design tokens (CSS custom properties) ensure values are defined
once and reused everywhere. Rather than duplicating spacing values,
colors, or typography across multiple files, you define them once
in the base layer and reference them throughout. This makes theme
changes and design updates simple and error-free.`),

    H3("Framework Agnostic"),
    P(`This naming convention doesn't depend on any specific JavaScript
framework or build tool. Whether you're using vanilla JavaScript,
React, Vue, or any other technology, the CSS works the same way.
The structure is purely CSS-based, making it portable and
long-lasting.`),
];
