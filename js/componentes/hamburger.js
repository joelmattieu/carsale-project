export default function hamburgerMenu() {
  const $btn = document.querySelector(".hamburger"),
    $menu = document.querySelector(".menu");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger") || e.target.matches(`.hamburger *`)) {
      $btn.classList.toggle("is-active");
      $menu.classList.toggle("is-active");
    }
    if (e.target.matches(".menu a")) {
      $btn.classList.remove("is-active");
      $menu.classList.remove("is-active");
    }
  });
}
