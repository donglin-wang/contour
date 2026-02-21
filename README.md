<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="asset/image/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="asset/image/logo-light.svg">
    <img alt="Contour" src="asset/image/logo.svg" width="400">
  </picture>
  <h3 align="center">Scalable styling with only CSS</h3>
</p>

## Overview

Contour sits between component-based CSS libraries and utility-first frameworks. It provides conventions and references that demonstrate how a scalable styling system can be built with modern CSS features: cascade layers, custom properties, and data attribute selectors.

There is no package to install and no CDN to link. You set up the file structure yourself, write your own tokens, and fully own every line of CSS.

## Structure

Contour organizes styles into three CSS cascade layers loaded in order:

```css
@layer base, pattern, variant;
```

**Base** - Design tokens, resets, and global defaults.

```
style/base/
├── color/
├── text/
├── reset/
├── sizes.css
├── border.css
└── shadow.css
```

**Pattern** - Self-contained component styles. Each pattern uses a single primary class with optional `m-` modifier classes and `<pattern>__<element>` child classes.

```
style/pattern/
├── accordion.css
├── bar.css
├── boundary.css
├── breadcrumb.css
├── card.css
├── marker.css
├── menu.css
├── modal.css
├── notice.css
├── symbol.css
├── table.css
├── tabs.css
├── text.css
└── trigger.css
```

**Variant** - Named visual variations applied through `data-variant` attributes and additional modifier classes.

```
style/variant/
├── accordion/
├── card/
├── menu/
├── tabs/
├── trigger/
└── ...
```

## Conventions

Every element carries exactly one primary class that identifies what it is. Modifier classes prefixed with `m-` provide additive adjustments. Child elements use `<pattern>__<element>` naming.

```html
<div class="menu m-dense">
    <div class="menu__item">Settings</div>
    <div class="menu__item">Profile</div>
</div>
```

```css
@layer pattern {
    .menu { }
    .menu__item { }
}

@layer variant {
    .menu.m-dense { }
    .menu[data-variant="nested"] { }
}
```

## Contributing

The documentation site is built with TypeScript and Vite. It has no dependencies beyond Vite as a dev dependency.

```
npm install
npx vite
```

Documentation articles live in `page/docs/articles/`. Each article is a directory containing a `root.ts` file that exports an array of elements built from shared documentation components:

```
page/docs/articles/<article-name>/
└── root.ts
```

Articles use component functions imported from `page/docs/component/` such as `H1`, `H2`, `P`, `CodeInline`, `CSSCodeBlock`, `HTMLCodeBlock`, and `ComponentPanel`. HTML examples use the tag helpers from `lib/tags.ts` to generate markup strings.

To make a new article visible on the site, add an entry to the `articles` array in `page/docs/routes.ts`. Each entry specifies a `path` (used as the URL segment under `/docs/`), a `title`, a `section` (`"Foundation"` or `"Patterns"`), and an `importArticle` function that dynamically imports the article's `root.ts`. If the article requires additional styles, include an `importStyle` function that imports its `css.ts` module. The route handler is generated automatically from this array, so no other file needs to change.

CSS files for new patterns go in `style/pattern/` and use `@layer pattern`. Variant files go in `style/variant/<pattern>/` and use `@layer variant`. Token files go in `style/base/` and use `@layer base`.

## License

[MIT](LICENSE)
