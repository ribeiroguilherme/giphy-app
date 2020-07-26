export default function initializeThemeListener(): MediaQueryList {
  const media = window.matchMedia('not all and (prefers-color-scheme: light)');

  const { documentElement } = document;

  if (media.matches) {
    documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  media.addListener(() => {
    if (media.matches) {
      documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });

  return media;
}
