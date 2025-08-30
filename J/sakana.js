// sakana.js

// ギャラリー画像のクリックでモーダル表示
document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('imageModal');
	const modalImage = document.getElementById('modalImage');
	const modalCaption = document.getElementById('modalCaption');
	const closeBtn = document.querySelector('.close');
	const galleryImages = document.querySelectorAll('.gallery-image');

	if (!modal || !modalImage || !closeBtn) return;

	galleryImages.forEach(function(image) {
		image.addEventListener('click', function() {
			modal.style.display = 'block';
			modalImage.src = this.src;
			modalImage.alt = this.alt;
			document.body.style.overflow = 'hidden';
			// キャプション取得
			const galleryItem = this.closest('.gallery-item');
			if (galleryItem) {
				const title = galleryItem.querySelector('.gallery-overlay h4');
				const desc = galleryItem.querySelector('.gallery-overlay p');
				modalCaption.textContent = (title ? title.textContent : '') + (desc ? ' - ' + desc.textContent : '');
			}
		});
	});

	closeBtn.addEventListener('click', function() {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	});
	modal.addEventListener('click', function(e) {
		if (e.target === modal) {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape' && modal.style.display === 'block') {
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	});
});
