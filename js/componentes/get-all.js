const $template = document.getElementById("template-cars").content,
  $section = document.getElementById("box-cars"),
  $fragment = document.createDocumentFragment();

export default async function getAll() {
  try {
    const res = await fetch("../json/cars.json");
    const json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.cars.forEach((el) => {
      $template.querySelector(".car-name").textContent = el.brand;
      $template.querySelector(".year").textContent = `Year: ${el.year}`;
      $template.querySelector(".price").textContent = `$${el.price}`;
      $template.querySelector(".phone").textContent = `Phone: ${el.phone}`;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $section.appendChild($fragment);
  } catch (error) {
    let message = error.statusText || "Error ocurred";
    $section.insertAdjacentHTML(
      "afterend",
      `<p><b>Error: ${error.status}: ${message}</b></p>`
    );
    console.error(`Error: ${error.status}: ${message}`);
  }
}
