import homeStyle from "/page/home/css";
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
