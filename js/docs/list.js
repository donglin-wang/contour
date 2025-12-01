import van from "/js/van.js";
import { highlightAll } from "/js/shj.js";
import { Article, H1, H2, P, Ul, Li, CodeInline } from "/js/article.js";

const article = Article();

van.add(document.body, article);

highlightAll({
    hideLineNumbers: true,
});
