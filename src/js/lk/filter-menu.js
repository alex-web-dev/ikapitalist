const $filterMenu = document.querySelector('.filter-menu');

if ($filterMenu) {
  const $openFilterMenuBtns = document.querySelectorAll('.open-filter-btn');
  $openFilterMenuBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $filterMenu.classList.add('filter-menu_active');
    });
  });

  const $closeFilterMenuBtns = document.querySelectorAll('.close-filter-btn');
  $closeFilterMenuBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $filterMenu.classList.remove('filter-menu_active');
    });
  });
}

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


const $filterBtns = document.querySelectorAll('.filter__btn');
$filterBtns.forEach($btn => {
  $btn.addEventListener('click', () => {
    const $filter = $btn.closest('.filter');
    $filter.classList.toggle('filter_active');
  });
});

window.addEventListener('click', (e) => {
  const $activeFilter = document.querySelector('.filter_active');

  if (!e.target.closest('.filter_active') && $activeFilter) {
    $activeFilter.classList.remove('filter_active');
  }
});