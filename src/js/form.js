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

  const $showPassBtns = document.querySelectorAll('.form__show-pass');
  $showPassBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $field = $btn.closest('.form__item').querySelector('.form__field');

      if ($field.getAttribute('type') === 'password') {
        $field.setAttribute('type', 'text');
      } else {
        $field.setAttribute('type', 'password');
      }
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