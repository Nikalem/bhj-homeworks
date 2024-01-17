const hasTooltips = document.querySelectorAll(".has-tooltip");
const tooltip = document.createElement("div");
tooltip.style.display = "block";

for (let hasTooltip of hasTooltips) {
  const title = hasTooltip.getAttribute("title");
  hasTooltip.insertAdjacentHTML('afterEnd', `<div class = 'tooltip' style = ''> ${title} </div>`);

  hasTooltip.addEventListener("click", (e) => {
    e.preventDefault();

    let tooltip = hasTooltip.nextSibling;
    const tooltipPosition = hasTooltip.getBoundingClientRect();
    tooltip.style.left = `${tooltipPosition.left}px`;
    tooltip.style.top = `${tooltipPosition.bottom}px`;
    tooltip.classList.toggle("tooltip_active");
  });
}