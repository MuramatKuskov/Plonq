const lift = document.querySelector('.heading p')
const dest = document.querySelector('.intro')

lift.onclick = function () {
	dest.scrollIntoView({ behavior: "smooth" })
}



const assortment = document.querySelectorAll('.assortment__img :not(:first-child)');
const lBtn = document.querySelector('.lBtn');
const rBtn = document.querySelector('.rBtn');
let assrtReversed = Object.values(assortment).reverse();

function moveRight() {
	if (i === 0 || i > 0 && i < 10) {
		assortment[i].style.animation = 'toLeft 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[i + 1].style.display = 'flex'; }, 691);
		setTimeout(() => { assortment[i + 1].style.animation = 'fromRight 1s'; }, 690);
	} else if (i === 10) {
		assortment[i].style.animation = 'toLeft 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[0].style.display = 'flex'; }, 691);
		setTimeout(() => { assortment[0].style.animation = 'fromRight 1s'; }, 690);
	} else if (i === -1) {
		assrtReversed[0].style.animation = 'toLeft 1s';
		setTimeout(() => { assrtReversed[0].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[0].style.display = 'flex'; }, 691);
		setTimeout(() => { assortment[0].style.animation = 'fromRight 1s'; }, 690);
	} else if (i < -1) {
		assrtReversed[Math.abs(i) - 1].style.animation = 'toLeft 1s';
		setTimeout(() => { assrtReversed[Math.abs(i) - 1].style.display = 'none'; }, 700);
		setTimeout(() => { assrtReversed[Math.abs(i) - 2].style.display = 'flex'; }, 691);
		setTimeout(() => { assrtReversed[Math.abs(i) - 2].style.animation = 'fromRight 1s'; }, 690);
	}
}
let moveLeft = () => {
	if (i === 0) {
		assortment[i].style.animation = 'toRight 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assrtReversed[0].style.display = 'flex'; }, 698);
		setTimeout(() => { assrtReversed[0].style.animation = 'fromLeft 1s'; }, 697);
	} else if (i === 10) {
		assortment[Math.abs(i)].style.animation = 'toRight 1s';
		setTimeout(() => { assortment[Math.abs(i)].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[0].style.display = 'flex'; }, 698);
		setTimeout(() => { assortment[0].style.animation = 'fromLeft 1s'; }, 697);
	} else if (i > 0 && i < 10) {
		assortment[i].style.animation = 'toRight 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[i - 1].style.display = 'flex'; }, 698);
		setTimeout(() => { assortment[i - 1].style.animation = 'fromLeft 1s'; }, 697);
	} else if (i === -1) {
		assrtReversed[0].style.animation = 'toRight 1s';
		setTimeout(() => { assrtReversed[0].style.display = 'none'; }, 700);
		setTimeout(() => { assrtReversed[Math.abs(i)].style.display = 'flex'; }, 698);
		setTimeout(() => { assrtReversed[Math.abs(i)].style.animation = 'fromLeft 1s'; }, 697);
	} else if (i < -1 && i > -10) {
		assrtReversed[Math.abs(i) - 1].style.animation = 'toRight 1s';
		setTimeout(() => { assrtReversed[Math.abs(i) - 1].style.display = 'none'; }, 700);
		setTimeout(() => { assrtReversed[Math.abs(i)].style.display = 'flex'; }, 698);
		setTimeout(() => { assrtReversed[Math.abs(i)].style.animation = 'fromLeft 1s'; }, 697);
	} else if (i === -10) {
		assrtReversed[Math.abs(i) - 1].style.animation = 'toRight 1s';
		setTimeout(() => { assrtReversed[Math.abs(i) - 1].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[0].style.display = 'flex'; }, 698);
		setTimeout(() => { assortment[0].style.animation = 'fromLeft 1s'; }, 697);
	}
}

let i = 0;
rBtn.onclick = () => {
	if (i === 0 || i > 0 && i < 10) {
		moveRight();
		setTimeout(() => { i++ }, 700);
	} else if (Math.abs(i) === 10) {
		moveRight();
		setTimeout(() => { i = 0 }, 710)
	} else if (i === -1) {
		moveRight();
		setTimeout(() => { i++ }, 710);
	} else if (i < -1) {
		moveRight();
		setTimeout(() => { i++ }, 710);
	}
}
lBtn.onclick = () => {
	if (i === 0 || i > 0 && i < 10) {
		moveLeft();
		setTimeout(() => { i-- }, 700);
	} else if (Math.abs(i) === 10) {
		moveLeft();
		setTimeout(() => { i = 0 }, 710);
	} else if (i < 0 && i > -10) {
		moveLeft();
		setTimeout(() => { i-- }, 710);
	} else if (i === -10) {
		moveLeft();
		setTimeout(() => { i = 0 }, 710);
	}
}


window.onresize = () => {
	if (window.screen.width < 993) {
		assortment[i].style.display = 'block';
	} else {
		assortment[i].style.display = 'none';
	}
}



/*
rBtn.onclick = () => {
	if (i < 10) {
		assortment[i].style.animation = 'toLeft 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[i + 1].style.display = 'flex'; }, 691);
		setTimeout(() => { assortment[i + 1].style.animation = 'fromRight 1s'; }, 690);
		setTimeout(() => { i++ }, 700);
	} else {
		assortment[i].style.animation = 'toLeft 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[0].style.display = 'flex'; }, 700);
		setTimeout(() => { assortment[0].style.animation = 'fromRight 1s'; }, 690);
		setTimeout(() => { i = 0 }, 710)
	}
}
lBtn.onclick = () => {
	if (i < 10) {
		assortment[i].style.animation = 'toRight 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[i + 1].style.display = 'flex'; }, 698);
		setTimeout(() => { assortment[i + 1].style.animation = 'fromLeft 1s'; }, 697);
		setTimeout(() => { i++ }, 700);
	} else {
		assortment[i].style.animation = 'toRight 1s';
		setTimeout(() => { assortment[i].style.display = 'none'; }, 700);
		setTimeout(() => { assortment[0].style.display = 'flex'; }, 700);
		setTimeout(() => { assortment[0].style.animation = 'fromLeft 1s'; }, 690);
		setTimeout(() => { i = 0 }, 710)
	}
}
*/