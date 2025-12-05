import van from "/js/van.js";

const { div } = van.tags;

export function formatHTML(html) {
    var tab = '    ';
    var result = '';
    var indent= '';

    html.split(/>\s*</).forEach(function(element) {
        if (element.match( /^\/\w/ )) {
            indent = indent.substring(tab.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
            indent += tab;              
        }
    });

    return result.substring(1, result.length-3);
}

export const highlightHTML = (element, usesInner = false) =>
    div(
        {
            class: "shj-lang-html",
        },
        formatHTML(usesInner ? element.innerHTML : element.outerHTML)
    );

export const highlightCSS = (styleText) =>
    div(
        {
            class: "shj-lang-css",
        },
        styleText
    );
