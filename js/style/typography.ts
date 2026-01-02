export const styleString = /*css*/ `
@layer pattern {
    .typography {
        color: var(--typography-color, inherit);
        text-decoration: var(--typography-text-decoration, inherit);
        text-overflow: var(--typography-text-overflow, inherit);
        font-size: var(--typography-font-size, inherit);
        font-weight: var(--typography-font-weight, inherit);
        line-height: var(--typography-line-height, inherit);
        margin-inline: var(--typography-margin-inline, 0);
        margin-block: var(--typography-margin-block, 0);
    }
}`;

export const styleSheet = await new CSSStyleSheet().replace(styleString);
