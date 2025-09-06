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
// hobby.js

// ナビボタンのアクティブエフェクト
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.nav-btn').forEach(btn => {
		btn.addEventListener('mousedown', () => {
			btn.style.transform = 'scale(0.96)';
		});
		btn.addEventListener('mouseup', () => {
			btn.style.transform = '';
		});
		btn.addEventListener('mouseleave', () => {
			btn.style.transform = '';
		});
	});

	// 各趣味セクションをふわっと表示
	document.querySelectorAll('.hobby-section').forEach((sec, i) => {
		sec.style.opacity = 0;
		sec.style.transition = 'opacity 1.2s';
		setTimeout(() => { sec.style.opacity = 1; }, 400 + i * 200);
	});
});
