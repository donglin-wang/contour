export type ShjLanguage = "css" | "html" | "todo" ;
export type ShjLanguageComponent = ShjToken | ShjCompositeToken | ShjReferenceToken;

export type ShjToken = {
    match: RegExp;
    type: string;
}
export type ShjCompositeToken = {
    match: RegExp;
    sub: string | ShjLanguageDefinition | ShjSubTokenFunction;
}
export type ShjSubTokenFunction = (code: string) => ShjLanguageComponent

export type ShjReferenceToken = {
    expand: string;
}
export type ShjLanguageDefinition = ShjLanguageComponent[];

let nameStartChar =
        ":A-Z_a-z\u{C0}-\u{D6}\u{D8}-\u{F6}\u{F8}-\u{2FF}\u{370}-\u{37D}\u{37F}-\u{1FFF}\u{200C}-\u{200D}\u{2070}-\u{218F}\u{2C00}-\u{2FEF}\u{3001}-\u{D7FF}\u{F900}-\u{FDCF}\u{FDF0}-\u{FFFD}",
    nameChar =
        nameStartChar + "\\-\\.0-9\u{B7}\u{0300}-\u{036F}\u{203F}-\u{2040}";

let name = `[${nameStartChar}][${nameChar}]*`,
    properties = `\\s*(\\s+${name}\\s*(=\\s*([^"']\\S*|("|')(\\\\[^]|(?!\\4)[^])*\\4?)?)?\\s*)*`,
    xmlElement = {
        match: RegExp(`<[\/!?]?${name}${properties}[\/!?]?>`, "g"),
        sub: [
            {
                type: "var",
                match: RegExp(`^<[\/!?]?${name}`, "g"),
                sub: [
                    {
                        type: "oper",
                        match: /^<[\/!?]?/g,
                    },
                ],
            },
            {
                type: "str",
                match: /=\s*([^"']\S*|("|')(\\[^]|(?!\2)[^])*\2?)/g,
                sub: [
                    {
                        type: "oper",
                        match: /^=/g,
                    },
                ],
            },
            {
                type: "oper",
                match: /[\/!?]?>/g,
            },
            {
                type: "class",
                match: RegExp(name, "g"),
            },
        ],
    };

export const langs: Record<ShjLanguage, ShjLanguageDefinition> = {
    css: [
        {
            match: /\/\*((?!\*\/)[^])*(\*\/)?/g,
            sub: "todo",
        },
        {
            expand: "str",
        },
        {
            type: "kwd",
            match: /@\w+\b|\b(and|not|only|or)\b|\b[a-z-]+(?=[^{}]*{)/g,
        },
        {
            type: "var",
            match: /\b[\w-]+(?=\s*:)|(::?|\.)[\w-]+(?=[^{}]*{)/g,
        },
        {
            type: "func",
            match: /#[\w-]+(?=[^{}]*{)/g,
        },
        {
            type: "num",
            match: /#[\da-f]{3,8}/g,
        },
        {
            type: "num",
            match: /\d+(\.\d+)?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vm|vh|vmin|vmax|%)?/g,
            sub: [
                {
                    type: "var",
                    match: /[a-z]+|%/g,
                },
            ],
        },
        {
            match: /url\([^)]*\)/g,
            sub: [
                {
                    type: "func",
                    match: /url(?=\()/g,
                },
                {
                    type: "str",
                    match: /[^()]+/g,
                },
            ],
        },
        {
            type: "func",
            match: /\b[a-zA-Z]\w*(?=\s*\()/g,
        },
        {
            type: "num",
            match: /\b[a-z-]+\b/g,
        },
    ],
    html: [
        {
            type: "class",
            match: /<!DOCTYPE("[^"]*"|'[^']*'|[^"'>])*>/gi,
            sub: [
                {
                    type: "str",
                    match: /"[^"]*"|'[^']*'/g,
                },
                {
                    type: "oper",
                    match: /^<!|>$/g,
                },
                {
                    type: "var",
                    match: /DOCTYPE/gi,
                },
            ],
        },
        {
            match: RegExp(
                `<style${properties}>((?!</style>)[^])*</style\\s*>`,
                "g"
            ),
            sub: [
                {
                    match: RegExp(`^<style${properties}>`, "g"),
                    sub: xmlElement.sub,
                },
                {
                    match: RegExp(
                        `${xmlElement.match}|[^]*(?=</style\\s*>$)`,
                        "g"
                    ),
                    sub: "css",
                },
                xmlElement,
            ],
        },
        {
            match: RegExp(
                `<script${properties}>((?!</script>)[^])*</script\\s*>`,
                "g"
            ),
            sub: [
                {
                    match: RegExp(`^<script${properties}>`, "g"),
                    sub: xmlElement.sub,
                },
                {
                    match: RegExp(
                        `${xmlElement.match}|[^]*(?=</script\\s*>$)`,
                        "g"
                    ),
                    sub: "js",
                },
                xmlElement,
            ],
        },
        {
            match: /<!--((?!-->)[^])*-->/g,
            sub: "todo",
        },
        {
            type: "class",
            match: /<!\[CDATA\[[\s\S]*?\]\]>/gi,
        },
        xmlElement,
        {
            type: "str",
            match: RegExp(`<\\?${name}([^?]|\\?[^?>])*\\?+>`, "g"),
            sub: [
                {
                    type: "var",
                    match: RegExp(`^<\\?${name}`, "g"),
                    sub: [
                        {
                            type: "oper",
                            match: /^<\?/g,
                        },
                    ],
                },
                {
                    type: "oper",
                    match: /\?+>$/g,
                },
            ],
        },
        {
            type: "var",
            match: /&(#x?)?[\da-z]{1,8};/gi,
        },
    ],
    todo: [
        {
            type: "err",
            match: /\b(TODO|FIXME|DEBUG|OPTIMIZE|WARNING|XXX|BUG)\b/g,
        },
        {
            type: "class",
            match: /\bIDEA\b/g,
        },
        {
            type: "insert",
            match: /\b(CHANGED|FIX|CHANGE)\b/g,
        },
        {
            type: "oper",
            match: /\bQUESTION\b/g,
        },
    ],
};

export const expandData = {
    num: {
        type: "num",
        match: /(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g,
    },
    str: {
        type: "str",
        match: /(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g,
    },
    strDouble: {
        type: "str",
        match: /"((?!")[^\r\n\\]|\\[^])*"?/g,
    },
};
