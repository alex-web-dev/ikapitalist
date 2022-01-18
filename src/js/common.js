import './sliders';
import './menu';
import './form';
import './login';
import './popup-boxes';
import './range-field';

import './steps';
import './date-input';
import './file-input';

import './editor';

import './lk/header';
import './lk/lk-tabs';
import './lk/sidebar';
import './lk/filter-menu';
import './lk/chart';
import './lk/calc';
import './lk/discuss';


window.addEventListener('load', () => {
  const $faqItemTitles = document.querySelectorAll('.faq__item-title');
  $faqItemTitles.forEach($title => {
    $title.addEventListener('click', () => {
      const $item = $title.closest('.faq__item');
      $item.classList.toggle('faq__item_active');
    });
  });

  window.addEventListener('resize', moveElems);
  moveElems();

  const $openPrivacyBtns = document.querySelectorAll('.open-privacy');
  $openPrivacyBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const $privacyPopup = document.querySelector('.privacy-popup');
      $privacyPopup.classList.remove('popup_hide');
    });
  });
});

function moveElems() {
  moveElem('.footer__copyright', '.footer__left', '.footer__bottom', 767);
}

function moveElem(elemSelector, fromSelector, toSelector, width) {
  const $elem = document.querySelector(elemSelector);
  const $from = document.querySelector(fromSelector);
  const $to = document.querySelector(toSelector);

  if (!$elem || !$from || !$to) {
    return;
  }

  if (window.innerWidth <= width && $elem.closest(fromSelector)) {
    $to.append($elem);
  } else if (window.innerWidth > width && !$elem.closest(fromSelector)) {
    $from.append($elem);
  }
}