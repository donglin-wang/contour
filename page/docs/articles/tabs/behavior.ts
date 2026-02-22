export const registerTabsBehavior = (root: HTMLElement) => {
    for (const tab of root.getElementsByClassName("tab")) {
        tab.addEventListener("click", () => {
            for (const child of root.children) {
                child.removeAttribute("aria-selected");
            }
            tab.setAttribute("aria-selected", "true");
        });
    }
    return root;
};
