function getMenu() {
    return document.getElementById("mobile-menu");
}

function openMenu() {
    getMenu().style.right = 0;
}

function closeMenu() {
    getMenu().style.right = null;
}