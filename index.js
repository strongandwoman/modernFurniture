const items = document.querySelectorAll(".item");
console.log(items);

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    console.log("Clicked");
    removeFocus();
    /* ubrat rastyajku c prediduschego elements, Prejde chem dobavit class, snachala ego udalyaem*/
    item.classList.add("selected");
  });

  removeFocus = () => {
    items.forEach((item) => {
      item.classList.remove("selected");
    });
  };
});
