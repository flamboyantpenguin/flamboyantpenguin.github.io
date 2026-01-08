const meta = document.createElement('meta');
meta.name = "theme-color";
meta.content = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
document.head.appendChild(meta);