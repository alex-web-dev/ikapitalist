const $form = document.querySelector('.discuss-form');
if ($form) {
  const $input = $form.querySelector('.discuss-form__input');
  const $symbols = $form.querySelector('.discuss-form__symbols');

  $input.addEventListener('input', () => {
    const length = $input.value.length;
    const max = +$input.getAttribute('maxlength');
    console.log(length, max, $symbols);
    
    $symbols.innerHTML = `${length}/${max}`;
  });
}
