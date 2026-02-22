import type {
    ShjCompositeToken,
    ShjLanguage,
    ShjLanguageComponent,
    ShjLanguageDefinition,
    ShjReferenceToken,
    ShjSubTokenFunction,
    ShjToken,
} from "/lib/highlight/languages";
import { expandData, langs } from "/lib/highlight/languages";

type ShjTokenMatch = {
    index: number | null;
    end: number;
    match: string;
    part: ShjLanguageComponent;
};

type ShjLangParam = ShjLanguage | ShjCompositeToken;

export const tokenize = (
    src: string,
    lang: ShjLangParam,
    token: (str: string, type?: string) => void,
) => {
    try {
        let m: number,
            part: ShjLanguageComponent,
            first = {} as ShjTokenMatch,
            match: RegExpExecArray | null,
            cache = [] as { match: RegExpExecArray; lastIndex: number }[],
            i = 0,
            data = typeof lang === "string" ? langs[lang] : lang,
            // make a fast shallow copy to be able to splice lang without change the original one
            arr = [
                ...(typeof lang === "string"
                    ? (data as ShjLanguageDefinition)
                    : (lang.sub as ShjLanguageDefinition)),
            ];

        while (i < src.length) {
            first.index = null;
            for (m = arr.length; m-- > 0; ) {
                part = (arr[m] as ShjReferenceToken).expand
                    ? expandData[
                          (arr[m] as ShjReferenceToken)
                              .expand as keyof typeof expandData
                      ]
                    : arr[m];
                // do not call again exec if the previous result is sufficient
                if (cache[m] === undefined || cache[m].match.index < i) {
                    (part as ShjToken).match.lastIndex = i;
                    match = (part as ShjToken).match.exec(src);
                    if (match === null) {
                        // no more match with this regex can be disposed
                        arr.splice(m, 1);
                        cache.splice(m, 1);
                        continue;
                    }
                    // save match for later use to decrease performance cost
                    cache[m] = {
                        match,
                        lastIndex: (part as ShjToken).match.lastIndex,
                    };
                }
                // check if it the first match in the string
                if (
                    cache[m].match[0] &&
                    (cache[m].match.index <= (first.index ? first.index : 0) ||
                        first.index === null)
                )
                    first = {
                        part: part as ShjLanguageComponent,
                        index: cache[m].match.index,
                        match: cache[m].match[0],
                        end: cache[m].lastIndex,
                    };
            }
            if (first.index === null) break;
            token(
                src.slice(i, first.index),
                (data as ShjCompositeToken & { type?: string }).type,
            );
            i = first.end;
            if ((first.part as ShjCompositeToken).sub)
                tokenize(
                    first.match,
                    typeof (first.part as ShjCompositeToken).sub === "string"
                        ? ((first.part as ShjCompositeToken).sub as ShjLanguage)
                        : typeof (first.part as ShjCompositeToken).sub ===
                            "function"
                          ? ((
                                (first.part as ShjCompositeToken)
                                    .sub as ShjSubTokenFunction
                            )(first.match) as unknown as ShjCompositeToken)
                          : (first.part as ShjCompositeToken),
                    token,
                );
            else token(first.match, (first.part as ShjToken).type);
        }
        token(
            src.slice(i, src.length),
            (data as ShjCompositeToken & { type?: string }).type,
        );
    } catch (e) {
        console.error(e);
        token(src);
    }
};
