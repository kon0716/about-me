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
