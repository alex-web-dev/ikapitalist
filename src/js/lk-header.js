window.addEventListener('load', () => {
  const $userPanel = document.querySelector('.user-panel');

  if ($userPanel) {
    const $userPanelMeta = $userPanel.querySelector('.user-panel__btn');

    $userPanelMeta.addEventListener('click', () => {
      $userPanel.classList.toggle('user-panel_active');
    });
  }

  const $userVerif = document.querySelector('.user-verif');

  if ($userVerif) {
    const $userVerifBtn = $userVerif.querySelector('.user-verif__btn');

    $userVerifBtn.addEventListener('click', () => {
      $userVerif.classList.toggle('user-verif_active');
    });
  }

  window.addEventListener('click', (e) => {
    if (!e.target.closest('.user-panel') && $userPanel) {
      $userPanel.classList.remove('user-panel_active');
    }

    if (!e.target.closest('.user-verif') && $userVerif) {
      $userVerif.classList.remove('user-verif_active');
    }
  });
});