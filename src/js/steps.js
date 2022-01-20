window.addEventListener('load', () => {
  const $stepsLists = document.querySelectorAll('.steps');
  $stepsLists.forEach($list => {
    const $moveBtns = $list.querySelectorAll('.step-move');

    $moveBtns.forEach(($btn) => {
      $btn.addEventListener('click', () => {
        const $stepsList = $btn.closest('.steps');

        const stepFrom = +$btn.dataset.stepFrom;
        const stepTo = +$btn.dataset.stepTo;
        
        const $stepFrom = $stepsList.querySelectorAll('.step')[stepFrom - 1];
        const $stepTo = $stepsList.querySelectorAll('.step')[stepTo - 1];
        
        $stepFrom.classList.remove('step_active');
        $stepTo.classList.add('step_active');

        const $stepsCountActive = document.querySelector('.step-count_active');
        const $stepsCounts = document.querySelectorAll('.step-count');

        $stepsCounts[stepFrom - 1].classList.remove('step-count_active');
        $stepsCounts[stepTo - 1].classList.add('step-count_active');

        $stepsCounts.forEach($item => $item.classList.remove('step-count_success'));
        $stepsCounts.forEach(($item, index) => {
          if (stepTo - 1 <= index) {
            return;
          }

          $item.classList.add('step-count_success');
        })
      });
    });
  })
});