window.addEventListener('load', () => {
  const $tabsBtns = document.querySelectorAll('.lk-tabs__btn');
  $tabsBtns.forEach(($btn) => {
    $btn.addEventListener('click', () => {
      const newTabNum = +$btn.dataset.tabNum;

      const $tabs = $btn.closest('.lk-tabs');
      console.log($tabs);
      
      if (+$tabs.dataset.toggleBtn === 1) {
        const $activeBtn = $tabs.querySelector('.lk-tabs__btn_active');
        $activeBtn.classList.remove('lk-tabs__btn_active');
  
        const $newActiveTab = $tabs.querySelectorAll('.lk-tabs__btn')[newTabNum - 1];
        $newActiveTab.classList.add('lk-tabs__btn_active');
      }
      
      const $activeTab = $tabs.querySelector('.lk-tabs__item_active');
      $activeTab.classList.remove('lk-tabs__item_active');

      const $newActiveTab = $tabs.querySelectorAll('.lk-tabs__item')[newTabNum - 1];
      $newActiveTab.classList.add('lk-tabs__item_active');
    });
  });

  const $moreFundsBtns = document.querySelectorAll('.lk-tabs__radio_more_funds');
  $moreFundsBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $fundsElem = document.querySelector('.lk-tabs__more_funds');
      if (!$fundsElem) {
        return;
      }

      $fundsElem.classList.add('lk-tabs__more_active');

      const $fundsTitle = $fundsElem.querySelector('.lk-tabs__more-title');
      const newTitle = $btn.dataset.moreTitle || '';
      $fundsTitle.innerText = newTitle;
    });
  });
});