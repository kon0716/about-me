// index.js

// ボタンホバーで拡大
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.btn').forEach(btn => {
		btn.addEventListener('mouseenter', () => {
			btn.style.transform = 'scale(1.08)';
			btn.style.boxShadow = '0 0 20px #ffd70077';
		});
		btn.addEventListener('mouseleave', () => {
			btn.style.transform = '';
			btn.style.boxShadow = '';
		});
	});

	// aboutセクションをふわっと表示
	const about = document.querySelector('.about');
	if (about) {
		about.style.opacity = 0;
		about.style.transition = 'opacity 1.2s';
		setTimeout(() => { about.style.opacity = 1; }, 400);
	}
});
