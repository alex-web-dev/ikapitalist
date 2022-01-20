import {nextUntil} from '../helpers';

const $subLists = document.querySelectorAll('.table__sublist');

$subLists.forEach($list => {
  $list.addEventListener('click', () => {
    const $items = nextUntil($list, '.table__sublist', '.table__subitem');

    if ($list.classList.contains('table__sublist_active')) {
      $list.classList.remove('table__sublist_active');
      $items.forEach($item => $item.classList.remove('table__subitem_active'));
    } else {
      $list.classList.add('table__sublist_active');
      $items.forEach($item => $item.classList.add('table__subitem_active'));
    }
  });
});


