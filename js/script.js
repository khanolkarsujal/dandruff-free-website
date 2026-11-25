
/* =================================
   1. PRODUCT SELECTION
================================= */

const productButtons = document.querySelectorAll(
    ".hero-product-quantity button"
);

const productPrice = document.querySelector("#product-price");

let selectedProduct = {
    size: "200",
    price: 19
};


// Set initial product

function updateProduct(button) {

    const size = button.dataset.size;
    const price = Number(button.dataset.price);

    selectedProduct = {
        size: size,
        price: price
    };

    // Remove previous selection

    productButtons.forEach((btn) => {

        btn.classList.remove("is-selected");

        btn.setAttribute("aria-pressed", "false");

    });

    // Add selected styling

    button.classList.add("is-selected");

    button.setAttribute("aria-pressed", "true");

    // Update price

    productPrice.textContent = `$${price}`;

    console.log("Selected product:", selectedProduct);

}


// Listen for product selection

productButtons.forEach((button) => {

    button.addEventListener("click", () => {

        updateProduct(button);

    });

});


// Initialize first product

if (productButtons.length > 0) {

    updateProduct(productButtons[0]);

}


/* =================================
   2. MOBILE NAVIGATION
================================= */

const menuButton = document.querySelector(".nav-menu-toggle");

const navLinks = document.querySelector(".nav-list-elements");


function closeMobileMenu() {

    navLinks.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuButton.textContent = "☰";

}


function toggleMobileMenu() {

    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

}


// Open and close menu

menuButton.addEventListener("click", toggleMobileMenu);


/* =================================
   3. NAVIGATION LINK CLICK
================================= */

const navigationLinks = document.querySelectorAll(
    ".nav-list-elements a"
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


/* =================================
   4. CLOSE MENU WHEN CLICKING OUTSIDE
================================= */

document.addEventListener("click", (event) => {

    const clickedInsideNavigation = navLinks.contains(event.target);

    const clickedMenuButton = menuButton.contains(event.target);

    if (!clickedInsideNavigation && !clickedMenuButton) {

        closeMobileMenu();

    }

});


/* =================================
   5. CLOSE MENU WHEN SCREEN RESIZES
================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        closeMobileMenu();

    }

});


/* =================================
   6. SMOOTH SHOPPING NAVIGATION
================================= */

const shoppingButtons = document.querySelectorAll(
    ".nav-buy-button, .shop-now-button, .Cta a"
);

shoppingButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const target = document.querySelector("#product");

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

});


/* =================================
   7. FAQ ACCORDION
================================= */

const faqQuestions = document.querySelectorAll(
    ".FAQ details"
);

faqQuestions.forEach((question) => {

    question.addEventListener("toggle", () => {

        if (question.open) {

            faqQuestions.forEach((otherQuestion) => {

                if (otherQuestion !== question) {

                    otherQuestion.open = false;

                }

            });

        }

    });

});
