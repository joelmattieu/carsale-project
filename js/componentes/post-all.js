const $form = document.getElementById("form-car");

export default async function postAll() {
  document.addEventListener("submit", async (e) => {
    if (e.target === $form) {
      e.preventDefault();

      try {
        const res = await fetch("../json/cars.json", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({
            brand: e.target.brand.value,
            year: e.target.year.value,
            price: e.target.price.value,
            phone: e.target.phone.value,
          }),
        });

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        location.reload();
      } catch (error) {
        let message = error.statusText || "Error ocurred";
        $form.insertAdjacentHTML(
          "beforeend",
          `<p><b>Error: ${error.status}: ${message}</b></p>`
        );
      }
    }
  });
}
