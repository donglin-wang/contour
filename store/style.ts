const loadedKeys = new Set<string>();

export const resetStyle = () => {
    document.adoptedStyleSheets = [];
    loadedKeys.clear();
};

export const addStyle = async (key: string, ...styleStrings: string[]) => {
    if (loadedKeys.has(key)) {
        return;
    }

    const sheet = await new CSSStyleSheet().replace(styleStrings.join(""));
    document.adoptedStyleSheets.push(sheet);

    loadedKeys.add(key);
};

export const initializeStyleRegistry = () => {
    document.adoptedStyleSheets = [];
    loadedKeys.clear();
};
