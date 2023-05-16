
let isView = false;
const contentArea = document.getElementsByClassName("content-area-shadow")[0];
const products = document.getElementsByClassName("product-item");
for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", () => {
        view();
    });
}

const view = function () {
    const color = document.getElementById("color");
    const items = color.getElementsByClassName("color-item");
    for (let j = 0; j < items.length; j++) {
        if (isView) {
            items[j].classList.remove("item-active");
        } else {
            items[j].classList.add("item-active");
        }
    }

    if (isView) {
        contentArea.classList.remove("content-area-active");
    } else {
        contentArea.classList.add("content-area-active");
    }
    isView = !isView;
}

const items = color.getElementsByClassName("color-item");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", () => {
        if (!isView) {
            return;
        }
        const img = items[i].getAttribute("img");
        contentArea.style.backgroundImage = `url(${img})`;
        view();
    });
}

const addToCart = document.getElementById("add-to-cart");
addToCart.addEventListener("click", () => {
    const dotCart = document.getElementById("dot-cart");
    dotCart.classList.add("dot-cart-active");
});

var utScrollReveal = function () {
    window.sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2500,
        delay: 400,
        reset: false
    })

    sr.reveal(`.scroll-reveal-delay`, { delay: 400 });
    sr.reveal(".scroll-reveal-top-down", { delay: 300 });
    sr.reveal(`.scroll-reveal-center`, { delay: 400, origin: 'center' });
    sr.reveal(`.scroll-reveal-bottom-up`, { delay: 400, origin: 'bottom' });
    sr.reveal(`.scroll-reveal-left-right`, { delay: 300, origin: 'left' });
    sr.reveal(`.scroll-reveal-right-left`, { delay: 400, origin: 'right' });
}

utScrollReveal();