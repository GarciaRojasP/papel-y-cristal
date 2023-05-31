const scrollup = document.querySelector("#scroll-up");
scrollup.classList.add("scrollup");
scrollup.href = "#";

const contentScroll = `
                <i class="uil uil-arrow-up scrollup__icon"></i>
                `;
scrollup.innerHTML = contentScroll;