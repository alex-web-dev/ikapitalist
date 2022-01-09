window.addEventListener('load', () => {
  const $loginTabsBtns = document.querySelectorAll('.login__tabs-btn');
  $loginTabsBtns.forEach(($btn, index) => {
    $btn.addEventListener('click', () => {
      switchLoginTab(index);
    });
  });

  const $switchBtns = document.querySelectorAll('.login__switch');
  $switchBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $from = $btn.dataset.from;
      const $to = $btn.dataset.to;

      const $fromElem = document.querySelector(`.${$from}`);
      const $toElem = document.querySelector(`.${$to}`);
      
      $fromElem.classList.add('login__hide');
      $toElem.classList.remove('login__hide');
    });
  });

});


function switchLoginTab(newIndex) {
  const $activeTab = document.querySelector('.login__tabs-item_active');
  const $activeBtn = document.querySelector('.login__tabs-btn_active');

  if ($activeBtn && $activeTab) {
    $activeBtn.classList.remove('login__tabs-btn_active');
    $activeTab.classList.remove('login__tabs-item_active');
  }

  const $selectedTab = document.querySelectorAll('.login__tabs-item')[newIndex];
  const $selectedBtn = document.querySelectorAll('.login__tabs-btn')[newIndex];
  
  if ($selectedTab && $selectedBtn) {
    $selectedTab.classList.add('login__tabs-item_active');
    $selectedBtn.classList.add('login__tabs-btn_active');
  }
}