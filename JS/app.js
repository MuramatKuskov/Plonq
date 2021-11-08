const carousel = document.querySelector('.info__carousel');
const content = document.querySelector('.info__content').style;
const items = document.querySelectorAll('.info__content')			//array
const lBtn = document.querySelector('.info__btn_l');
const rBtn = document.querySelector('.info__btn_r');


let i = 1;
rBtn.onclick = () => {
	if (i === 1) {
		carousel.style.transform = 'translateX(-110%)';
		i++;
	} else {
		carousel.style.transform = 'translateX(-220%)';
		setTimeout(() => { carousel.style.transition = '0s' }, 370);
		setTimeout(() => { carousel.style.transform = 'translateX(110%)' }, 375);
		setTimeout(() => { carousel.style.transition = '1s' }, 400);
		setTimeout(() => { carousel.style.transform = 'translateX(0%)' }, 410);
		i = 1;
	}
}
lBtn.onclick = () => {
	if (i === 1) {
		carousel.style.transform = 'translateX(110%)';
		setTimeout(() => { carousel.style.transition = '0s' }, 370);
		setTimeout(() => { carousel.style.transform = 'translateX(-220%)' }, 375);
		setTimeout(() => { carousel.style.transition = '1s' }, 400);
		setTimeout(() => { carousel.style.transform = 'translateX(-110%)' }, 410);
		i++;
	} else {
		carousel.style.transform = 'translateX(0%)';
		i--;
	}
}
