import homeStyle from "/js/page/home/style";
import { registerStyle } from "/js/lib/style";

export default [
    {
        path: "",
        callback: () =>
            import("/js/page/home/root")
                .then((root) => registerStyle(homeStyle).then(() => root))
                .then((root) => document.body.replaceChildren(root.default)),
    },
];
