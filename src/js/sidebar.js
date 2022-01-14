const $sidebar = document.querySelector('.sidebar');
const $openSidebarBtns = document.querySelectorAll('.open-sidebar');
const isMobile = window.innerWidth < 992;

if ($sidebar) {
  $openSidebarBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $sidebar.classList.add('sidebar_active');
    });
  });
  
  $sidebar.addEventListener('click', e => {
    console.log(isMobile, e.target, $sidebar);
    
    if (isMobile && e.target === $sidebar) {
      $sidebar.classList.remove('sidebar_active');
    }
  });
}