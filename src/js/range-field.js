const $rangeInputs = document.querySelectorAll('.range-field__input');
$rangeInputs.forEach($input => {
  const max = +$input.getAttribute('max');
  rangeInputUpdate($input, max);

  $input.addEventListener("input", () => { 
    rangeInputUpdate($input, max);
  });
});

function rangeInputUpdate (input, max) {
  const value = input.value;

  const percent = (value / max * 100);

  const $range = input.closest('.range-field');
  const $fill = $range.querySelector('.range-field__fill');
  $fill.style.width = `${percent}%`;
}