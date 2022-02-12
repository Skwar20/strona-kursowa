document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const navLink = document.querySelectorAll('.nav-link');
	const btnNav = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	navLink.forEach((item) =>
		item.addEventListener('click', () => btnNav.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
});
