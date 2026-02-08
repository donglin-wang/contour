import homeStyle from "/page/home/css";
import { setCurrentStyle } from "/store/style";

export default [
    {
        pattern: "",
        callback: async (root: HTMLElement) => {
            const homeElement = await import("/page/home/root");
            await setCurrentStyle("home", homeStyle);
            root.replaceChildren(homeElement.default);
            return root;
        },
        children: [],
    },
];
