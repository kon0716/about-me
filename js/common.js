// 共通の豪華演出スクリプト
// ページフェードイン、画像ホバー拡大、fadeinクラスのスクロールアニメ

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.5s';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

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
