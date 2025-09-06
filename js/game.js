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
// game.js

// ゲームカードのホバーで浮き上がり
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.game-card').forEach(card => {
		card.addEventListener('mouseenter', function() {
			this.style.transform = 'translateY(-10px) scale(1.04)';
			this.style.boxShadow = '0 8px 32px #ffd70055';
		});
		card.addEventListener('mouseleave', function() {
			this.style.transform = '';
			this.style.boxShadow = '';
		});
	});
});
