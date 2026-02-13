import {
    H1,
    H2,
    P,
    Ul,
    Li,
    Subheading,
    CodeInline,
    inline,
} from "/page/docs/component";

export default [
    H1("Overview"),
    Subheading("Contour is a set of conventions for \
organizing CSS that helps teams document their \
design systems, build component libraries, and \
scale concurrent development without tooling \
dependencies or specificity conflicts."),

    H2("A CSS-native design system"),
    P("Contour uses plain CSS custom properties and \
layers to express your design tokens and component \
styles. Colors, spacing scales, typography, shadows, \
and borders are all defined as standard custom \
properties in the base layer, making your entire \
design system readable and editable without leaving \
CSS. There is no proprietary configuration format, \
no token compiler, and no theme object to learn. \
Your design decisions live where they belong: in \
stylesheets that any browser can interpret directly."),

    H2("No runtime, no build step"),
    P("Every Contour stylesheet is valid CSS that works \
in any modern browser as-is. There is no JavaScript \
runtime generating class names, no preprocessor \
transforming your source files, and no \
framework-specific binding to adopt. This means your \
styles are fully transferable. They work the same \
way whether your project uses React, Vue, a \
server-rendered template, or a static HTML file. If \
you move to a different stack tomorrow, your styles \
come with you unchanged."),

    H2("Scaling with layers and data attributes"),
    P("Large teams working in the same codebase \
inevitably run into specificity conflicts. One \
developer's override silently breaks another's \
component. Contour addresses this structurally by \
organizing all styles into three CSS cascade layers:"),
    Ul(
        Li(...inline`${CodeInline("base")} contains \
design tokens, resets, and global defaults.`),
        Li(...inline`${CodeInline("pattern")} contains \
self-contained component styles that consume \
base tokens.`),
        Li(...inline`${CodeInline("variant")} contains \
modifications and alternate presentations of \
existing patterns.`),
    ),
    P("Because the cascade resolves layers in a \
defined order, a variant will always override a \
pattern, and a pattern will always override a base \
style, regardless of selector specificity or source \
order. Developers working on different components \
or variants can merge their work without collisions."),
    P("Component variations are expressed through data \
attributes rather than class name combinatorics. A \
card becomes a profile card by adding a single \
data-variant attribute. This keeps selector intent \
explicit and avoids the ambiguity of stacking \
modifier classes that may interact in unpredictable \
ways."),

    H2("Clean markup, flexible styles"),
    P("Utility-first frameworks push styling decisions \
into HTML, producing dense clusters of class names \
that obscure document structure. Component-based \
libraries like Bootstrap go the other direction, \
offering pre-packaged designs that are difficult to \
customize beyond their intended variations."),
    P("Contour sits between these extremes. Each \
element carries one primary class name that \
identifies what it is, with optional modifier \
classes or a data attribute to select a specific \
presentation. The result is markup that reads like \
a document outline rather than a styling instruction \
sheet. At the same time, because every visual \
property traces back to a custom property or a \
layer-scoped rule, any aspect of any component can \
be adjusted or extended without fighting the \
framework."),

    H2("No installation, full ownership"),
    P("Contour does not publish packages, provide a \
CDN link, or manage versions. There is no \
installation step. Instead, the style files live \
directly in your project's source directory. You \
own every line of CSS. You can rename files, delete \
components you do not use, modify token values, or \
restructure the folders to fit your project's \
conventions. When your requirements change, you edit \
your own code rather than waiting for an upstream \
release or working around an abstraction you cannot \
control."),
];
