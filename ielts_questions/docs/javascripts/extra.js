document.addEventListener('DOMContentLoaded', function() {
  // 不添加缩进，保持左对齐

  // 本地 file:// 预览兼容：MkDocs 默认生成目录式 URL（如 extra-001/），
  // 直接用浏览器打开 site/*.html 时，点击目录链接可能显示文件夹索引。
  // 仅在 file:// 下把目录链接补成 index.html；线上部署不受影响。
  if (window.location.protocol !== 'file:') {
    return;
  }

  document.querySelectorAll('a[href]').forEach(function(link) {
    var href = link.getAttribute('href');

    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.endsWith('.html') ||
      href.endsWith('.pdf') ||
      href.includes('?')
    ) {
      return;
    }

    if (href === '.' || href === './') {
      link.setAttribute('href', 'index.html');
      return;
    }

    if (href.endsWith('/')) {
      link.setAttribute('href', href + 'index.html');
    }
  });
});
