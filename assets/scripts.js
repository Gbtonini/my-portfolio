function getMenu() {
  return document.getElementById("mobile-menu");
}

function openMenu() {
  document.body.style.overflow = "hidden";
  getMenu().style.right = 0;
}

function closeMenu() {
  document.body.style.overflow = "unset";
  getMenu().style.right = null;
}

function scrollToInitialSection() {
  document.getElementById("initial-section").scrollIntoView({
    behavior: "smooth",
  });
}
