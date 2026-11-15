(() => {
  const toggle = document.querySelector('.theme-toggle');
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const brandPhoto = document.querySelector('.brand-photo');
  const savedTheme = localStorage.getItem('lazizbek-theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');

  function revealBrandPhoto() {
    if (brandPhoto.naturalWidth > 0) brandPhoto.closest('.brand-photo-frame').classList.add('has-photo');
  }
  brandPhoto.addEventListener('load', revealBrandPhoto);
  revealBrandPhoto();

  function updateThemeButton() {
    const dark = document.body.classList.contains('dark');
    icon.textContent = dark ? '☀' : '☾';
    label.textContent = dark ? 'Light mode' : 'Dark mode';
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    metaTheme.setAttribute('content', dark ? '#111914' : '#f5f8f4');
  }

  updateThemeButton();
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    localStorage.setItem('lazizbek-theme', dark ? 'dark' : 'light');
    updateThemeButton();
  });
})();
