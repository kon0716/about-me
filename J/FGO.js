// FGO.js
// ページを豪華にするための基本的なアニメーションとインタラクション

document.addEventListener('DOMContentLoaded', () => {
  // ページ全体をフェードイン
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.5s';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // 画像にホバーで拡大エフェクト
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.transition = 'transform 0.4s';
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.08)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });

  // スクロール時に要素をフェードイン
  const fadeElems = document.querySelectorAll('.fadein');
  const fadeInOnScroll = () => {
    fadeElems.forEach(elem => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        elem.style.opacity = 1;
        elem.style.transform = 'translateY(0)';
      }
    });
  };
  fadeElems.forEach(elem => {
    elem.style.opacity = 0;
    elem.style.transform = 'translateY(40px)';
    elem.style.transition = 'opacity 1s, transform 1s';
  });
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});
