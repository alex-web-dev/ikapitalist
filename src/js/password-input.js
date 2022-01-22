const $formPassBtns = document.querySelectorAll('.form__show-pass');
$formPassBtns.forEach($btn => {
  $btn.addEventListener('click', () => {
    const $input = $btn.closest('.form__item').querySelector('.form__field');

    if ($input.getAttribute('type') === 'password') {
      $input.setAttribute('type', 'text');
    } else {
      $input.setAttribute('type', 'password');
    }
  });
});

const $inputPassBtns = document.querySelectorAll('.field__show-pass');

$inputPassBtns.forEach($btn => {
  $btn.addEventListener('click', () => {
    const $input = $btn.closest('.field').querySelector('.field__input');
    if ($input.getAttribute('type') === 'password') {
      $input.setAttribute('type', 'text');
    } else {
      $input.setAttribute('type', 'password');
    }
  });
});