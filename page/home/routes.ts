import homeStyle from "/page/home/style";
import { setCurrentStyle } from "/store/style";

export default [
    {
        path: "",
        callback: () =>
            import("/page/home/root")
                .then((root) => setCurrentStyle("home", homeStyle).then(() => root))
                .then((root) => document.body.replaceChildren(root.default)),
    },
];
