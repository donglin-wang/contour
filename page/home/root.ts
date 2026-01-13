import { tags } from "/lib/tags";
import { ContourLogo } from "/component/symbol";
import { getRouter } from "/store/router";
import { Link } from "/component/link";

const { div, h2, a } = tags;
const router = getRouter();

const displayButton = Link({
    attributes: {
        class: "trigger",
    },
    callback: () => router.navigateTo("docs/lorem"),
    children: ["Get started"],
});

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
