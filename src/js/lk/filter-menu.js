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