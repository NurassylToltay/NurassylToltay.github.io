const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}

	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const menu_btn = document.querySelector('.hamburger');

const mobile_menu = document.querySelector('.mobile-nav');

const education_btn = document.querySelector('.educ');
const achievements_btn = document.querySelector('.achiev');
const skills_btn = document.querySelector('.skill');


menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
})

education_btn.onclick = function() {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
}

achievements_btn.onclick = function() {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
}

skills_btn.onclick = function() {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
}

