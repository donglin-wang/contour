let current: string;

export const resetStyle = () => {
    document.adoptedStyleSheets = [];
    current = "";
};

export const setCurrentStyle = async (key: string, ...styleStrings: string[]) => {
    if (current === key) {
        return;
    }

    resetStyle();

    const sheet = await new CSSStyleSheet().replace(styleStrings.join(""));
    document.adoptedStyleSheets.push(sheet);

    current = key;
};

export const initializeStyleRegistry = () => (current = "");
