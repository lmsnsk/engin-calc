function getCoordinate(ref) {
  let coordinates = ref.getBoundingClientRect();
  return coordinates.top;
}

export function scrolling(isVisible, ref) {
  if (getCoordinate(ref) + 150 > document.documentElement.clientHeight && isVisible === false) {
    setTimeout(() => window.scrollBy({ top: 150, left: 0, behavior: "smooth" }), 100);
  }
}
