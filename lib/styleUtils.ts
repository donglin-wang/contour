export type StyleModule = { default: string };
export type StyleRecord = { path: string; style: string };

export function extractExports(
    styleLookup: Record<string, StyleModule>,
): StyleRecord[] {
    return Object.entries(styleLookup).map(([path, module]) => ({
        path,
        style: module.default,
    }));
}

export function combineStyles(
    styleLookup: Record<string, StyleModule>,
): string {
    return Object.values(styleLookup).reduce<string>(
        (accumulator, currentValue) => accumulator + currentValue.default,
        "",
    );
}
