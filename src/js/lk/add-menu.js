const $addMenu = document.querySelector('.add-menu');
if ($addMenu) {
  const $openAddMenuBtns = document.querySelectorAll('.open-add-menu');
  $openAddMenuBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $addMenu.classList.add('add-menu_active');
    });
  });

  const $closeAddMenuBtns = document.querySelectorAll('.close-add-menu');
  $closeAddMenuBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $addMenu.classList.remove('add-menu_active');
    });
  });
}