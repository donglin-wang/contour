import homeStyle from "/page/home/style";
import { registerStyle } from "/lib/style";

export default [
    {
        path: "",
        callback: () =>
            import("/page/home/root")
                .then((root) => registerStyle(homeStyle).then(() => root))
                .then((root) => document.body.replaceChildren(root.default)),
    },
];
