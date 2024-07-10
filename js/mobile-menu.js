let mobileMenu = document.getElementById("mobileMenu");

function openMobileMenu() {
    hamBtn.classList.add("hidden");
    mobileMenu.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
}

function closeMobileMenu(event) {
    hamBtn.classList.remove("hidden");
    mobileMenu.classList.add("hidden");
    closeBtn.classList.add("hidden");
}
