const footer = document.querySelector("footer");
footer.classList.add("footer");

    const footer_bg = document.createElement("div");
    footer.appendChild(footer_bg);
    footer_bg.classList.add("footer__bg");

        const footer_copy = document.createElement("p");
        footer_bg.appendChild(footer_copy);
        footer_copy.classList.add("footer__copy");
        footer_copy.innerHTML = "&#169; copyright portafolio 2023 | Patricia García";

