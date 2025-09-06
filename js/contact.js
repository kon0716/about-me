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
// contact.js

// フォーム送信時のアニメーション
document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('.contact-form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			const btn = form.querySelector('.submit-btn');
			if (!btn) return;
			const originalText = btn.innerHTML;
			btn.innerHTML = '<span class="btn-text">送信中...</span>';
			btn.disabled = true;
			setTimeout(() => {
				btn.innerHTML = '<span class="btn-text">送信完了!</span>';
				setTimeout(() => {
					btn.innerHTML = originalText;
					btn.disabled = false;
					form.reset();
				}, 1500);
			}, 2000);
		});
	}

	// 入力時のフォーカスエフェクト
	document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
		input.addEventListener('focus', function() {
			this.parentElement.classList.add('focused');
		});
		input.addEventListener('blur', function() {
			if (this.value === '') {
				this.parentElement.classList.remove('focused');
			}
		});
	});
});
