const $backgroundForm= document.querySelector('.background-form');

export default function showContact() {
  
  document.addEventListener("click", e => {
    if (e.target.matches(".link-contact") || e.target.matches(`.link-contact *`)) {
      $backgroundForm.classList.add("is-active");
    }

    if (e.target.matches(".background-form") || e.target.matches(".close svg") || e.target.matches(`.close svg *`)) {
      $backgroundForm.classList.remove("is-active");
    }
  });
}

