// haisinsityou.html用の追加JavaScript
// sa-monaikon.pngクリック時に光るエフェクト
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img[src$="sa-monaikon.png"]').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function(e) {
      if (img.classList.contains('logo-glow')) return;
      img.classList.add('logo-glow');
      setTimeout(() => {
        img.classList.remove('logo-glow');
      }, 700);
    });
  });
});
