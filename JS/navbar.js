const trigger = document.querySelector('.nav__bar :nth-child(3)');
const subj = document.querySelector('.nav__subbar ul');
let currentLinks = document.querySelectorAll('nav ul a[href="' + document.URL.substr(document.URL.lastIndexOf("/")).slice(1) + '"]');
let burger = document.querySelector('.nav__burger');
let nav = document.querySelector('.nav__bar');
let logo = document.querySelector('.nav__main');

currentLinks.forEach(el => el.style.color = '#C8BB93');

trigger.onmouseover = function (e) {
	subj.style.display = 'flex';
	if (window.screen.width < 993 && window.screen.width > 819) {
		subj.querySelector('li').style.display = 'inline-block';
		subj.querySelector('li').style.marginLeft = '-100px';
		subj.querySelectorAll('li').forEach(el => { el.style.maxWidth = '18%' })
	} else if (window.screen.width < 820) {
		subj.style.display = 'block';
		subj.style.position = 'relative';
		subj.style.left = '75%';
		subj.style.marginRight = '-20%';
		subj.querySelectorAll('li').forEach(el => { el.style.padding = '15px 74%' });
	}
	if (window.screen.width < 768) {
		subj.style.left = '30%';
		subj.style.paddingRight = '100%';
		subj.style.maxWidth = '75%';
	}
	if (window.screen.width < 540) {
		subj.style.left = '25%';
	}
	if (window.screen.width < 516) {
		subj.style.paddingRight = '90%';
	}
	if (window.screen.width < 466) {
		subj.querySelectorAll('li').forEach(el => { el.style.padding = '10px 74%' });
		subj.style.paddingRight = '75%';
	}
	if (window.screen.width < 388) {
		subj.style.paddingRight = '45%';
	}
	if (window.screen.width < 425) {
		subj.style.left = '0%';
	}
}
subj.onmouseover = function (e) {
	subj.style.display = 'flex';
	if (window.screen.width < 820) {
		subj.style.display = 'block';
		subj.style.position = 'relative';
		subj.style.left = '75%';
		subj.style.marginRight = '-20%';
		subj.querySelectorAll('li').forEach(el => { el.style.padding = '15px 74%' });
	}
	if (window.screen.width < 768) {
		subj.style.left = '30%';
		subj.style.paddingRight = '100%';
		subj.style.maxWidth = '75%';
	}
	if (window.screen.width < 540) {
		subj.style.left = '25%';
	}
	if (window.screen.width < 516) {
		subj.style.paddingRight = '90%';
	}
	if (window.screen.width < 466) {
		subj.querySelectorAll('li').forEach(el => { el.style.padding = '10px 74%' });
		subj.style.paddingRight = '75%';
	}
	if (window.screen.width < 388) {
		subj.style.paddingRight = '45%';
	}
	if (window.screen.width < 425) {
		subj.style.left = '0%';
	}
}

trigger.onmouseout = function () {
	if (document.URL.substr(document.URL.lastIndexOf("/")).slice(1) === 'contact.html' || document.URL.substr(document.URL.lastIndexOf("/")).slice(1) === 'opt.html') {
		subj.style.display = 'flex';
	} else {
		subj.style.display = 'none';
	}
	if (window.screen.width < 993) {
		subj.style.display = 'none';
	}
}
subj.onmouseout = function () {
	if (document.URL.substr(document.URL.lastIndexOf("/")).slice(1) === 'contact.html' || document.URL.substr(document.URL.lastIndexOf("/")).slice(1) === 'opt.html') {
		subj.style.display = 'flex';
	} else {
		subj.style.display = 'none';
	}
	if (window.screen.width < 993) {
		subj.style.display = 'none';
	}
}

burger.onclick = function () {
	if (window.getComputedStyle(nav).display === 'none') {
		if (window.screen.width >= 820) {
			nav.style.display = 'flex';
			nav.style.position = 'fixed'
			nav.style.marginTop = '69px';
			subj.style.marginTop = '70px';
		} else if (window.screen.width < 426) {
			nav.style.display = 'block';
			nav.style.position = 'fixed';
			nav.style.textShadow = ' -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff';
			nav.querySelectorAll('li').forEach(el => { el.style.padding = '10px 50px' });
			nav.style.left = '47%';
			nav.querySelector('ul').style.display = 'block';
			nav.style.marginTop = '69px';
		} else if (window.screen.width < 536) {
			nav.style.display = 'block';
			nav.style.position = 'fixed';
			nav.style.textShadow = ' -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff';
			nav.querySelectorAll('li').forEach(el => { el.style.padding = '15px 50px' });
			nav.style.left = '55%';
			nav.querySelector('ul').style.display = 'block';
			nav.style.marginTop = '69px';
		} else if (window.screen.width < 820) {
			nav.style.display = 'flex';
			nav.style.position = 'fixed';
			nav.querySelectorAll('li').forEach(el => { el.style.padding = '15px 50px' });
			if (window.screen.width > 767) {
				nav.style.left = '75%';
			} else if (window.screen.width < 768) {
				nav.style.left = '65%';
			}
			nav.querySelector('ul').style.display = 'block';
			nav.style.marginTop = '69px';
		}
	} else {
		nav.style.display = 'none';
		subj.style.display = 'none';
	}
}

document.querySelector('main').onclick = function () {
	if (window.screen.width < 993) {
		nav.style.display = 'none';
		subj.style.display = 'none';
	}
};

window.onscroll = function () {
	if (window.screen.width < 993) {
		if (window.pageYOffset > 100) {
			nav.style.display = 'none';
			subj.style.display = 'none';
		}
	}
}

window.onresize = function () {
	nav.style = 'unset';
	subj.style = 'unset';
	nav.querySelector('ul').style = 'unset';
	nav.querySelectorAll('li').forEach(el => { el.style = 'unset' });
	subj.querySelectorAll('li').forEach(el => { el.style = 'unset' });
	if (window.screen.width < 993) {
		subj.style.display = 'none';
	}
}
