window.addEventListener('load', () => {
  const $openEventPopupBtns = document.querySelectorAll('.btn-open-event');
  const $openNewsPopupBtns = document.querySelectorAll('.btn-open-news');
  const $eventPopup = document.querySelector('.event-popup');
  const $newsPopup = document.querySelector('.news-popup');

  $openEventPopupBtns.forEach($btn => {
    $btn.addEventListener('click', e => {
      e.preventDefault();
      $eventPopup.classList.remove('popup_hide');
    });
  });

  $openNewsPopupBtns.forEach($btn => {
      $btn.addEventListener('click', e => {
        e.preventDefault();
      $newsPopup.classList.remove('popup_hide');
    });
  });

  if ($eventPopup) {
    $eventPopup.addEventListener('click', e => {
      if (e.target === $eventPopup) {
        $eventPopup.classList.add('popup_hide');
      }
    });
  }

  if ($newsPopup) {
    $newsPopup.addEventListener('click', e => {
      if (e.target === $newsPopup) {
        $newsPopup.classList.add('popup_hide');
      }
    });
  }

  const $closePopupBtns = document.querySelectorAll('.popup__close');
  $closePopupBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $popup = $btn.closest('.popup');
      $popup.classList.add('popup_hide');
    });
  });

  const $privacyPopup = document.querySelector('.privacy-popup');
  if ($privacyPopup) {
    $privacyPopup.addEventListener('click', (e) => {
      if (e.target === $privacyPopup) {
        
        $privacyPopup.classList.add('popup_hide');
      }
    });
  }

  const $openVideoBtns = document.querySelectorAll('.news-video__open');
  $openVideoBtns.forEach($btn => {
    $btn.addEventListener('click', e => {
      e.preventDefault();

      const url = $btn.closest('.news-video').dataset.url;
      addYouTubeVideoPopup(url);
    });
  });
});

function addYouTubeVideoPopup(url) {
  const $oldPopup = document.querySelector('.video-popup');
  if ($oldPopup) {
    return;
  }

  const $popup = document.createElement('div');
  $popup.className = 'video-popup popup';
  $popup.innerHTML = `
    <div class="video-popup__content">
      <div class="video-popup__body">
          <iframe src="${url}?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe>
      </div>
      <button class="close-btn video-popup__close event-popup__close"></button>
    </div>
  `;

  document.body.appendChild($popup);

  const $popupClose = document.querySelector('.video-popup__close');
  $popupClose.addEventListener('click', () => {
    $popup.remove();
  });

  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      $popup.remove();
    }
  });
}