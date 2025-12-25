import { langs, expandData } from "/js/parser/languages.js";

export const tokenize = (src, lang, token) => {
    try {
        let m,
            part,
            first = {},
            match,
            cache = [],
            i = 0,
            data = typeof lang === "string" ? langs[lang] : lang,
            // make a fast shallow copy to be able to splice lang without change the original one
            arr = [...(typeof lang === "string" ? data : lang.sub)];

        while (i < src.length) {
            first.index = null;
            for (m = arr.length; m-- > 0; ) {
                part = arr[m].expand ? expandData[arr[m].expand] : arr[m];
                // do not call again exec if the previous result is sufficient
                if (cache[m] === undefined || cache[m].match.index < i) {
                    part.match.lastIndex = i;
                    match = part.match.exec(src);
                    if (match === null) {
                        // no more match with this regex can be disposed
                        arr.splice(m, 1);
                        cache.splice(m, 1);
                        continue;
                    }
                    // save match for later use to decrease performance cost
                    cache[m] = { match, lastIndex: part.match.lastIndex };
                }
                // check if it the first match in the string
                if (
                    cache[m].match[0] &&
                    (cache[m].match.index <= first.index ||
                        first.index === null)
                )
                    first = {
                        part: part,
                        index: cache[m].match.index,
                        match: cache[m].match[0],
                        end: cache[m].lastIndex,
                    };
            }
            if (first.index === null) break;
            token(src.slice(i, first.index), data.type);
            i = first.end;
            if (first.part.sub)
                tokenize(
                    first.match,
                    typeof first.part.sub === "string"
                        ? first.part.sub
                        : typeof first.part.sub === "function"
                        ? first.part.sub(first.match)
                        : first.part,
                    token
                );
            else token(first.match, first.part.type);
        }
        token(src.slice(i, src.length), data.type);
    } catch (e) {
        console.error(e);
        token(src);
    }
};
