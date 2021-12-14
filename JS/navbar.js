const trigger = document.querySelector('.nav__bar :nth-child(3)');
const subj = document.querySelector('.nav__subbar ul');
let currentLinks = document.querySelectorAll('nav ul a[href="' + document.URL.substr(document.URL.lastIndexOf("/")).slice(1) + '"]');
let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.nav__bar');
let logo = document.querySelector('.nav__main');
let triggers = [trigger, subj];

currentLinks.forEach(el => el.style.color = '#C8BB93');

burger.onclick = () => {
	if (!nav.classList.contains('mobile-bar')) {
		nav.classList.add('mobile-bar')
	} else { nav.classList.remove('mobile-bar') }
}

triggers.forEach(el => {
	el.onmouseover = () => {
		subj.classList.add('mobile-subbar')
	}
})

triggers.forEach(el => {
	el.onmouseout = () => {
		subj.classList.remove('mobile-subbar')
	}
})


document.querySelector('.heading').onclick = function () {
	if (nav.classList.contains('mobile-bar')) {
		nav.classList.remove('mobile-bar')
	}
};

window.onscroll = function () {
	if (nav.classList.contains('mobile-bar') && window.pageYOffset > 100) {
		nav.classList.remove('mobile-bar')
	}
}