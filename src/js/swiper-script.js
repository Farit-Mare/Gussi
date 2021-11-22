const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		// Фракция
		type: "custom",

		renderCustom: function (swiper, current, total) {
			return `<span class="swiper-pagination-current">0${current}</span> — <span class="swiper-pagination-total">0${total}</span>`;
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
});
