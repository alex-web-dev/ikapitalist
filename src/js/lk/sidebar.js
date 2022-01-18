const $sidebar = document.querySelector('.sidebar');
const $openSidebarBtns = document.querySelectorAll('.open-sidebar');

if ($sidebar) {
  $openSidebarBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      $sidebar.classList.add('sidebar_active');
    });
  });
  
  $sidebar.addEventListener('click', e => {
    const isMobile = window.innerWidth < 992;
    
    if (isMobile && e.target === $sidebar) {
      $sidebar.classList.remove('sidebar_active');
    }
  });
}