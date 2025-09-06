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
// profile.js

// プロフィールカードのホバーで浮き上がり
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.profile-card').forEach(card => {
		card.addEventListener('mouseenter', () => {
			card.style.transform = 'translateY(-8px) scale(1.03)';
			card.style.boxShadow = '0 8px 32px #ffd70055';
		});
		card.addEventListener('mouseleave', () => {
			card.style.transform = '';
			card.style.boxShadow = '';
		});
	});
});
