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
