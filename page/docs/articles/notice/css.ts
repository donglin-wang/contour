import { extractExports, combineStyles, StyleModule } from "/lib/styleUtils";

const styleLookup = import.meta.glob<StyleModule>(
    [
        "/style/pattern/notice.css",
        "/style/variant/trigger/modifiers.css",
        "/style/variant/trigger/icon.css",
        "/style/variant/symbol/modifiers.css",
        "/style/variant/notice/tiered.css",
        "/style/variant/notice/actionSegmented.css",
    ],
    { query: "inline", eager: true },
);

export const [
    base,
    triggerModifiers,
    triggerIcon,
    symbolModifiers,
    tiered,
    actionSegmented,
] = extractExports(styleLookup);

export default combineStyles(styleLookup);