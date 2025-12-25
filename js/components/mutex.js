export const registerMutexHandler = () => {
    for (const indicator of document.getElementsByClassName(
        "mutex__indicator"
    )) {
        const parent = indicator.parentElement;
        const firstItem = parent.getElementsByClassName("mutex__item").item(0);
        indicator.style.width = `${firstItem.getBoundingClientRect().width}px`;
    }

    for (const mutexItem of document.getElementsByClassName("mutex__item")) {
        mutexItem.addEventListener("click", () => {
            const parent = mutexItem.parentElement;
            const siblings = parent.children;

            let indicator = null;
            for (const sibling of siblings) {
                if (sibling.getAttribute("aria-selected") !== null) {
                    sibling.toggleAttribute("aria-selected");
                }

                if (sibling.classList.contains("mutex__indicator")) {
                    indicator = sibling;
                }
            }

            mutexItem.setAttribute("aria-selected", "");

            if (indicator !== null) {
                const mutexRect = parent.getBoundingClientRect();
                const itemRect = mutexItem.getBoundingClientRect();
                const left = itemRect.left - mutexRect.left;
                const width = itemRect.width;

                indicator.style.left = `${left}px`;
                indicator.style.width = `${width}px`;
            }
        });
    }
};
