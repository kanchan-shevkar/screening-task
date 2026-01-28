const bundles = document.querySelectorAll(".bundle");
const totalEl = document.querySelector(".total strong");

bundles.forEach((bundle) => {
  bundle.addEventListener("click", () => {
    bundles.forEach((b) => {
      b.classList.remove("active");
      b.querySelector("input").checked = false;
    });

    bundle.classList.add("active");
    bundle.querySelector("input").checked = true;

    const price = bundle.dataset.price;
    totalEl.textContent = `$${price}.00 USD`;
  });
});
