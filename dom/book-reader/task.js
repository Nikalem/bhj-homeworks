const fontSizes = document.querySelectorAll(".font-size");


function switchFontSize(event) {
  event.preventDefault();
  fontSizes.forEach((item) => {
    if (item.classList.contains("font-size_active")) {
      item.classList.remove("font-size_active");
      book.classList.remove("font-size_small");
      book.classList.remove("font-size_big");
    };
  });

  if (this.classList.contains("font-size_small")) {
    this.classList.add("font-size_active");
    book.classList.add("font-size_small");
  } else if (this.classList.contains("font-size_big")) {
    this.classList.add("font-size_active");
    book.classList.add("font-size_big");
  } else if (!this.classList.contains("font-size_big") && !this.classList.contains("font-size_small")) {
    this.classList.add("font-size_active");
  };
};

fontSizes.forEach((item) => {
  item.addEventListener("click", switchFontSize);
});