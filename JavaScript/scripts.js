document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-theme');
    const icon = document.getElementById('theme-icon');
    const body = document.body;
  
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
  
      // Alternar entre ícones
      if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });
  });
