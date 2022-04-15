// burger menu
$(document).ready(function () {
	$('#burger').click(function () {
		$(this).toggleClass('open');
		$('.fullnav').toggleClass('open');
		$('body').toggleClass('fixed');
	});
});

// Name on image
$(window).resize(function () {
	if (window.innerWidth > 920) {
		$('.intro-name').html(`<pre>Hi,
I'm Dominic</pre>`);
	} else {
		$('.intro-name').html(`<pre>Hi,
I'm 
Dominic</pre>`);
	}
});

// carousel

const slides = document.getElementsByClassName('testimonial-card');
const nextBtn = document.getElementById('test-next');
const prevBtn = document.getElementById('test-prev');
let curSlide = 0;

const switchSlides = (currentSlide, nextSlide) => {
	currentSlide.classList.remove('active');
	nextSlide.classList.add('active');
};

nextBtn.addEventListener('click', () => {
	if (curSlide < slides.length - 1) {
		const currentSlide = slides[curSlide];
		const nextSlide = slides[curSlide + 1];
		switchSlides(currentSlide, nextSlide);
		curSlide++;
	} else {
		curSlide = 0;
		const currentSlide = slides[slides.length - 1];
		const nextSlide = slides[curSlide];
		switchSlides(currentSlide, nextSlide);
	}
});

prevBtn.addEventListener('click', () => {
	if (curSlide > 0) {
		const currentSlide = slides[curSlide];
		const nextSlide = slides[curSlide - 1];
		switchSlides(currentSlide, nextSlide);
		curSlide--;
	} else {
		const nextSlide = slides[slides.length - 1];
		const currentSlide = slides[curSlide];
		switchSlides(currentSlide, nextSlide);
		curSlide = slides.length - 1;
	}
});

const images = [
	'/assets/img/woman.png',
	'/assets/img/woman2.png',
	'/assets/img/man.png',
];
const cards = document.getElementsByClassName('card');
Array.from(cards).forEach((elem, i) => {
	console.log(elem.firstElementChild);
	return (elem.firstElementChild.style.backgroundImage =
		'url(' + images[i] + ')');
});
