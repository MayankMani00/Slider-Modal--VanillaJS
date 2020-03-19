const toggleBtn = $('#toggle');
const closeBtn = $('#close');
const openBtn = $('#open');
const modalBtn = $('#modal')[0];

// Toggle nav

toggleBtn.click(() => {
	$('body')[0].classList.toggle('show-nav');
});

openBtn.click(function() {
	modalBtn.classList.add('show-modal');
});

closeBtn.click(function() {
	modalBtn.classList.remove('show-modal');
});

// window.click(
// 	(e) => (e.target == modal ? modal.classList.remove('show-modal') : false)
// );
window.addEventListener(
	'click',
	(e) => (e.target == modal ? modal.classList.remove('show-modal') : false)
);
//e.target == modal ? modal.classList.remove('show-modal') : false
