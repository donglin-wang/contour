export const registerStyle = async (styleText: string) => {
    const sheet = await new CSSStyleSheet().replace(styleText);
    document.adoptedStyleSheets.push(sheet);
};
