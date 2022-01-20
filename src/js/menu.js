window.addEventListener('load', () => {
  const $menu = document.querySelector('.menu');
  let initialPoint;
  let finalPoint;

  if ($menu) {
    document.addEventListener('touchstart', e => {
      if (window.innerWidth > 991) {
        return;
      }
      
      initialPoint = e.changedTouches[0];
    }, false);
  
    document.addEventListener('touchend', e => {
      if (window.innerWidth > 991) {
        return;
      }
      
      finalPoint = e.changedTouches[0];
  
      menuTouchEnd($menu, initialPoint, finalPoint);
    }, false);
  }

  const $menuClose = document.querySelector('.menu__close');
  if ($menuClose) {
    $menuClose.addEventListener('click', () => {
      $menu.classList.remove('menu_active');
    });
  }

  if ($menu) {
    $menu.addEventListener('click', e => {
      if (window.innerWidth > 991) {
        return;
      }
  
      if ($menu === e.target) {
        $menu.classList.remove('menu_active');
      }
    });
  }

  const $menuOpen = document.querySelector('.menu__open');
  if ($menuOpen) {
    $menuOpen.addEventListener('click', () => {
      $menu.classList.add('menu_active');
    });
  }
});

function menuTouchEnd($menu, initialPoint, finalPoint) {
  const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
  const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

  if (xAbs > 130 || yAbs > 130) {
    if (xAbs > yAbs) {
      if (finalPoint.pageX < initialPoint.pageX) {
        $menu.classList.add('menu_active');
      } else {
        $menu.classList.remove('menu_active');
      }
    }
  }
}