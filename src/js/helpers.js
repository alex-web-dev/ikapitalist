export function addEventToAllElems(event, selector, fn) {
  const $elems = document.querySelectorAll(selector);
  $elems.addEventListener(event, fn);
}

export function addClickToAllElems(selector, fn) {
  addEventToAllElems('click', selector, fn);
}