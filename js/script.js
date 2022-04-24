

// СЛАЙДЕР-ГАЛЕРЕЯ

const gallery = new Swiper('.gallery', {
	// Направление прокрутки
	direction: 'horizontal',

	// Прокрутка по кругу
	loop: true,

	// Количесво отображаемых слайдов
	slidesPerView: 2,

	// Расстояние между слайдами
	spaceBetween: 14,

	// Стрелки навигации
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',

	//   Кликабельность буллетов
	clickable: true,

	//   Буллеты разного размера в зависимости от близости активного слайда
	dynamicBullets: true,

	// Курсор при перетаскивании
	grabCursor: true,
	},

	// Прокрутка слайдов колесом мышки
	mousewheel: {
		// скорость прокрутки слайдов
		sensitivity: 2,
	},

	// Активный слайд по центру
	centeredSlides: true,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокрутками
		delay: 8000,
		// Отключить автопрокрутку после ручного переключения
		disableOnInteraction: false,
	},

	// Скорость переключения слайдов
	speed: 2000,

	// Эффект прокрутки
	effect: 'coverflow',
	// Настройки coverflow	
	coverflowEffect: {
		// Угол
		rotate: 20,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: false,
	},

	// АДАПТИВ

	breakpoints: {
		1000: {
			slidesPerView: 2,
		}
	}
	
 });

 // СЛАЙДЕР-ОТЗЫВЫ

const comments = new Swiper('.comments', {
	// Направление прокрутки
	direction: 'horizontal',

	// Прокрутка по кругу
	loop: true,

	// Количесво отображаемых слайдов
	slidesPerView: 4,

	// Расстояние между слайдами
	spaceBetween: 14,

	// Стрелки навигации
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',

	//   Кликабельность буллетов
	clickable: true,

	//   Буллеты разного размера в зависимости от близости активного слайда
	dynamicBullets: true,

	// Курсор при перетаскивании
	grabCursor: true,
	},

	// Прокрутка слайдов колесом мышки
	mousewheel: {
		// скорость прокрутки слайдов
		sensitivity: 2,
	},

	// Активный слайд по центру
	centeredSlides: false,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокрутками
		delay: 6000,
		// Отключить автопрокрутку после ручного переключения
		disableOnInteraction: false,
	},

	// Скорость переключения слайдов
	speed: 2000,
 });

 // !СЛАЙДЕР-ГАЛЕРЕЯ на странице продукта

const gallery__product = new Swiper('.gallery__product', {
	// Направление прокрутки
	direction: 'horizontal',

	// Прокрутка по кругу
	loop: true,

	// Количесво отображаемых слайдов
	slidesPerView: 1,

	// Расстояние между слайдами
	spaceBetween: 14,

	// Стрелки навигации
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',

	//   Кликабельность буллетов
	clickable: true,

	//   Буллеты разного размера в зависимости от близости активного слайда
	dynamicBullets: true,

	// Курсор при перетаскивании
	grabCursor: true,
	},

	// Прокрутка слайдов колесом мышки
	mousewheel: {
		// скорость прокрутки слайдов
		sensitivity: 1,
	},

	// Активный слайд по центру
	centeredSlides: false,

	// Автопрокрутка
	autoplay: {
		// Пауза между прокрутками
		delay: 4000,
		// Отключить автопрокрутку после ручного переключения
		disableOnInteraction: true,
	},

	// Скорость переключения слайдов
	speed: 2000,

		// АДАПТИВ

	breakpoints: {
		1000: {
			slidesPerView: 1,
		}
	}
	
 });