import { gsap } from 'gsap/gsap-core'
import { CSSPlugin } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Flip } from 'gsap/all'

document.addEventListener('DOMContentLoaded', (event) => {
	gsap.registerPlugin(CSSPlugin, ScrollTrigger, Flip)

	window.addEventListener('load', () => {
		// Создаем таймлайн для анимации
		const heroTl = gsap.timeline({})

		// Сначала анимация картины
		heroTl.from('.hero_video_wrapper', {
			width: '100%',
			delay: 1,
			duration: 0.7,
		})
	})

	const headingTl = gsap.timeline({
		delay: 2, // Initial delay before the timeline starts
		repeat: -1, // Repeat infinitely
		repeatDelay: 2,
		yoyo: true, // Play the timeline forwards and then backwards
	})

	headingTl.to("[animate='h1']", {
		y: '-110%',
		duration: 0.3,
		ease: 'power1.out',
	})

	headingTl.to(
		"[animate='h2']",
		{
			y: '-110%',
			duration: 0.3,
			ease: 'power1.out',
		},
		0
	)

	// partners

	const logosTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_partners',
			start: 'center bottom',
			end: 'top top',
		},
	})
	logosTl.from('.partners_logo', {
		opacity: 0,
		stagger: 0.1,
		duration: 0.5,
	})

	// download animation

	const downloadTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_dowmload',
			start: 'center bottom',
			end: 'top top',
		},
	})
	downloadTl.from('.section_dowmload', {
		opacity: 0,
		duration: 0.5,
	})

	// benefits animations
	const benefitsTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_benefits',
			start: '20% bottom',
			end: 'top top',
		},
	})
	benefitsTl.from(".section_benefits [text='to-top']", {
		opacity: 0,
		duration: 0.5,
		y: '100%',
	})
	benefitsTl.from(
		'.benefits_card',
		{
			opacity: 0,
			duration: 0.5,
			y: '100%',
			stagger: 0.2,
		},
		0
	)

	// team size animations

	const teamTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_team-size',
			start: '20% bottom',
			end: 'top top',
		},
	})
	teamTl.from(".section_team-size [text='to-top']", {
		opacity: 0,
		duration: 0.5,
		y: '100%',
	})
	teamTl.from(
		".section_team-size [text='opacity']",
		{
			opacity: 0,
			duration: 0.4,
		},
		0
	)
	teamTl.from(
		'.team_size-card',
		{
			opacity: 0,
			duration: 0.5,
			y: '100%',
			stagger: 0.2,
		},
		0
	)

	// functions animations

	const functionsTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_functions',
			start: '20% bottom',
			end: 'top top',
		},
	})
	functionsTl.from(".section_functions [text='to-top']", {
		opacity: 0,
		duration: 0.5,
		y: '100%',
	})
	functionsTl.from(
		'.functions_card',
		{
			opacity: 0,
			duration: 0.5,
			y: '100%',
			stagger: 0.2,
		},
		0
	)

	// functions card hover

	const cardFunctions = document.querySelectorAll('.functions_card')
	// Функция анимации ховера
	function animateHover(card, paddings) {
		const state = Flip.getState(card)
		const pl = paddings[0]
		const pr = paddings[1]
		const cardContent = card.querySelector('.card_function-content')
		const bgImage = card.querySelector('.card-bg')
		const cardImage = card.querySelector('.function_card-img')
		const cardTitle = card.querySelector('h3')
		const cardText = card.querySelector('p')
		// GSAP анимация при наведении
		card.addEventListener('mouseenter', () => {
			gsap.to(cardImage, {
				opacity: 0,
				duration: 0.3,
			})
			gsap.to(cardContent, {
				paddingLeft: pl,
				paddingRight: pr,
				duration: 0.3,
			})
			gsap.to(bgImage, {
				opacity: 1,
				duration: 0.3,
			})
			gsap.to(cardTitle, {
				color: '#fff',
				duration: 0.3,
			})
			gsap.to(cardText, {
				color: '#fff',
				duration: 0.3,
			})
		})

		card.addEventListener('mouseleave', () => {
			gsap.to(cardImage, {
				opacity: 1,
				duration: 0.3,
			})
			gsap.to(cardContent, {
				paddingLeft: pl,
				paddingRight: pr,
				duration: 0.3,
			})
			gsap.to(bgImage, {
				opacity: 0,
				duration: 0.3,
			})
			gsap.to(cardTitle, {
				color: '#272725',
				duration: 0.3,
			})
			gsap.to(cardText, {
				color: '#747474',
				duration: 0.3,
			})
		})
	}

	// Применяем анимацию ко всем карточкам
	cardFunctions.forEach((card) => {
		animateHover(card, ['0.8em', '0.8em'])
	})

	// plans animations

	const plansTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_plans',
			start: '20% bottom',
			end: 'top top',
		},
	})
	plansTl.from(".section_plans [text='to-top']", {
		opacity: 0,
		duration: 0.5,
		y: '100%',
	})
	plansTl.from(
		".section_plans [text='opacity']",
		{
			opacity: 0,
			duration: 0.8,
		},
		0
	)
	plansTl.from(
		'.plans_card',
		{
			opacity: 0,
			duration: 0.5,
			y: '100%',
			stagger: 0.2,
		},
		0
	)

	// cta animations

	const ctaTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.section_cta',
			start: '20% bottom',
			end: 'top top',
		},
	})
	ctaTl.from('.section_cta', {
		backgroundColor: '#ffffff',
		duration: 0.5,
	})
	ctaTl.from(
		".section_cta [text='to-top']",
		{
			opacity: 0,
			duration: 0.5,
			y: '100%',
		},
		0
	)
	ctaTl.from(
		".section_cta [data-animate='to-top']",
		{
			opacity: 0,
			duration: 0.5,
			y: '50%',
		},
		0
	)
	ctaTl.from(
		'.cta_image',
		{
			opacity: 0,
			duration: 1,
			x: '100%',
		},
		0
	)
})
