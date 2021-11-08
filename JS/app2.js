const carousel = document.querySelector('.info__carousel');
const content = document.querySelector('.info__content').style;
const items = document.querySelectorAll('.info__content')			//array
const lBtn = document.querySelector('.info__btn_l');
const rBtn = document.querySelector('.info__btn_r');

let i = 0;
rBtn.onclick = () => {
	switch (i) {
		case 0:
			items[i].style.animation = 'toLeft 1s';
			setTimeout(() => { items[i].style.display = 'none'; }, 700);
			setTimeout(() => { items[i + 1].style.display = 'flex'; }, 691);
			setTimeout(() => { items[i + 1].style.animation = 'fromRight 1s'; }, 690);
			setTimeout(() => { i++ }, 700);
			break;
		case 1:
			items[i].style.animation = 'toLeft 1s';
			setTimeout(() => { items[i].style.display = 'none'; }, 700);
			setTimeout(() => { items[i - 1].style.display = 'flex'; }, 700);
			setTimeout(() => { items[i - 1].style.animation = 'fromRight 1s'; }, 690);
			setTimeout(() => { i = 0 }, 710)
			break;
	}
}

lBtn.onclick = () => {
	switch (i) {
		case 0:
			items[i].style.animation = 'toRight 1s';
			setTimeout(() => { items[i].style.display = 'none'; }, 700);
			setTimeout(() => { items[i + 1].style.display = 'flex'; }, 691);
			setTimeout(() => { items[i + 1].style.animation = 'fromLeft 1s'; }, 690);
			setTimeout(() => { i++ }, 700);
			break;
		case 1:
			items[i].style.animation = 'toRight 1s';
			setTimeout(() => { items[i].style.display = 'none'; }, 700);
			setTimeout(() => { items[i - 1].style.display = 'flex'; }, 700);
			setTimeout(() => { items[i - 1].style.animation = 'fromLeft 1s'; }, 690);
			setTimeout(() => { i = 0 }, 710)
			break;
	}
}