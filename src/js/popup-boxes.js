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

  const $infPopups = document.querySelectorAll('.inf-popup');
  $infPopups.forEach($popup => {
    const $close = $popup.querySelector('.inf-popup__close');
    const $submit = $popup.querySelector('.inf-popup__submit');

    if ($close) {
      $close.addEventListener('click', () => $popup.remove());
    }

    if ($submit) {
      $submit.addEventListener('click', () => $popup.remove());
    }
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

function addNotifyPopup({text, timeout = 7000, type}) {
  let $popupsWrapper = document.querySelector('.notify-popups');
  if (!$popupsWrapper) {
    $popupsWrapper = document.createElement('div');
    $popupsWrapper.className = 'notify-popups';
    document.body.appendChild($popupsWrapper);
  }

  const $popup = document.createElement('div');
  $popup.className = 'notify-popup notify-popup_hide notify-popups__item';
  $popup.innerHTML = `
    <div class="notify-popup__icon"></div>
    <p class="notify-popup__text">${text}</p>
    <button class="notify-popup__close">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L5 4.29289L9.14645 0.146447C9.34171 -0.0488155 9.65829 -0.0488155 9.85355 0.146447C10.0488 0.341709 10.0488 0.658291 9.85355 0.853553L5.70711 5L9.85355 9.14645C10.0488 9.34171 10.0488 9.65829 9.85355 9.85355C9.65829 10.0488 9.34171 10.0488 9.14645 9.85355L5 5.70711L0.853553 9.85355C0.658291 10.0488 0.341709 10.0488 0.146447 9.85355C-0.0488155 9.65829 -0.0488155 9.34171 0.146447 9.14645L4.29289 5L0.146447 0.853553C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z" fill="#868F98"/>
      </svg>
    </button>
  `;

  if (type) {
    $popup.classList.add(`notify-popup_${type}`);
  }

  $popupsWrapper.appendChild($popup);

  setTimeout(() => $popup.classList.remove('notify-popup_hide'), 100);
  setTimeout(closePopup, timeout);

  const $close = $popup.querySelector('.notify-popup__close');
  $close.addEventListener('click', closePopup);

  function closePopup() {
    $popup.classList.add('notify-popup_hide');
    $popup.addEventListener('transitionend', () => $popup.remove(), { once: true });
  }
}

const isNotifyPage = document.querySelector('.notify') ? true : false;

if (isNotifyPage) {
  addNotifyPopup({
    text: 'Примеры уведомлений',
    type: 'warning'
  });
  
  setTimeout(() => {
    addNotifyPopup({
      text: 'Ваша заявка принята. Мы свяжемся с Вами в течение 24 часов',
      type: 'success',
    });
  }, 2000)
  
  setTimeout(() => {
    addNotifyPopup({
      text: 'Произошла ошибка при сохранении',
      type: 'error',
      timeout: 7000
    });
  }, 3000);
}
