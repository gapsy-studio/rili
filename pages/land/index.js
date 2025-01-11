import { gsap } from 'gsap/gsap-core'
import { CSSPlugin } from 'gsap'
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(CSSPlugin)
	let mm = gsap.matchMedia()

	mm.add('(min-width: 480px)', () => {
		console.log('Desktop work')
		const swiper = new Swiper('.process_slider', {
			modules: [Navigation],
			speed: 700,
			centeredSlides: true,
			navigation: {
				nextEl: '[data-btn="next"]',
				prevEl: '[data-btn="prev"]',
			},
			slidesPerView: 'auto',
			on: {
				init: function () {
					updateActiveSlide(this)
				},

				slideChangeTransitionStart: function () {
					updateActiveSlide(this)
				},
			},
		})

		function updateActiveSlide(swiper) {
			swiper.slides.forEach((slide, index) => {
				let title = slide.querySelector('.title-48')
				if (index === swiper.activeIndex) {
					// Анимация для активного слайда
					if (title) {
						gsap.to(title, { fontSize: '2.5em', duration: 0.5 })
					}
					gsap.to(slide, {
						height: '29.58333333333333em',
						duration: 0.5,
						stagger: 0.3,
					})
				} else if (
					index === swiper.activeIndex - 1 ||
					index === swiper.activeIndex + 1
				) {
					// Анимация для предыдущего и следующего слайдов
					if (title) {
						gsap.to(title, { fontSize: '2em', duration: 0.5 })
					}
					gsap.to(slide, { height: '25.75em', duration: 0.5, stagger: 0.3 })
				} else {
					// Сброс анимации для всех остальных слайдов
					if (title) {
						gsap.to(title, { fontSize: '2em', duration: 0.5 })
					}
					gsap.to(slide, {
						height: '22.91666666666667em',
						duration: 0.5,
						stagger: 0.3,
					})
				}
			})
		}
		return
	})

	mm.add('(max-width: 379px)', () => {
		console.log('mobile work')
		const swiper = new Swiper('.process_slider', {
			modules: [Navigation],
			speed: 700,
			centeredSlides: true,
			navigation: {
				nextEl: '[data-btn="next"]',
				prevEl: '[data-btn="prev"]',
			},
			slidesPerView: 'auto',
		})

		return
	})
})
