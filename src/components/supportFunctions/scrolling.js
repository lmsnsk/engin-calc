function getCoordinate() {
  let coordinates = document.querySelector("#selectInput").getBoundingClientRect();
  return coordinates.top;
}

export function scrolling(isVisible) {
  if (getCoordinate() + 150 > document.documentElement.clientHeight && isVisible === false) {
    setTimeout(() => window.scrollBy({ top: 150, left: 0, behavior: "smooth" }), 100);
  }
}
