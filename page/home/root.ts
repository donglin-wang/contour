import { tags } from "/lib/tags";
import { ContourLogo } from "/component/symbol";
import { getRouter } from "/store/router";

const { div, h2, a } = tags;
const router = getRouter();

const displayButton = a(
    {
        class: "trigger",
        "data-variant": "inverse",
    },
    "Get started"
);

displayButton.addEventListener("click", () =>
    router.navigateTo("docs/introduction")
);

export default div(
    {
        class: "container",
        "data-variant": "contour-hero",
    },
    ContourLogo("contour-logo"),
    h2(
        {
            class: "typography",
            "data-variant": "contour-slogan",
        },
        "is a reference for implementing component systems"
    ),
    div(
        {
            class: "container",
            "data-variant": "contour-hero-control",
        },
        displayButton
    )
);
