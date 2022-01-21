const $inputs = document.querySelectorAll('.discharge-input');
$inputs.forEach($input => {
  discharge($input);

  $input.addEventListener('keyup', () => {
    discharge($input);
  });
});

function discharge($input){
  $input.value = $input.value.replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}