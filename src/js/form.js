window.addEventListener('load', () => {
  const $formTabsBtns = document.querySelectorAll('.form__tabs-btn');
  $formTabsBtns.forEach(($btn, index) => {
    $btn.addEventListener('click', () => {
      switchFormTab(index);
    });
  });

  const $formNextBtns = document.querySelectorAll('.form__btn-next');
  $formNextBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const index = +$btn.dataset.tab;
      switchFormTab(index);
    });
  });
});

function switchFormTab(newIndex) {
  const $activeTab = document.querySelector('.form__tabs-item_active');
  const $activeBtn = document.querySelector('.form__tabs-btn_active');

  if ($activeBtn && $activeTab) {
    $activeBtn.classList.remove('form__tabs-btn_active');
    $activeTab.classList.remove('form__tabs-item_active');
  }

  const $selectedTab = document.querySelectorAll('.form__tabs-item')[newIndex];
  const $selectedBtn = document.querySelectorAll('.form__tabs-btn')[newIndex];
  
  if ($selectedTab && $selectedBtn) {
    $selectedTab.classList.add('form__tabs-item_active');
    $selectedBtn.classList.add('form__tabs-btn_active');
  }
}