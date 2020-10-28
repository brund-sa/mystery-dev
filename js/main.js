/* ==========================================================================

   Table of content:

   1. Custom mouse cursor
   2. Animsition preloader
   3. Swiper slider
   4. Isotope filter
   5. Scroll animations
   6. Navigation open/close
   7. Drop-down menu
   8. Midnight header
   9. Footer hover effect
   10. Magnific popup
   11. Touch, no touch
   12. Scroll to id
   13. Progress bar
   14. Accordion
   15. Headroom
   16. Scroll btn hide on scroll
   17. Parallax background
   18. Contact form

   ========================================================================== */





$(function() {
	"use strict";
	$(function() {

		$(this).impulse();
	
		$('#container').impulse({effect: 'easeOutBack', fluid: false});
		});
	
		// ataredo.com/morphology/lucidscroll - documentation
	
		(function($, nib) {
	
		$.fn.impulse = function(options) {
	
		var set = $.extend({}, $.fn.impulse.default, options), gate = $(nib),
		vessel = this, object = $(set.target), area = {}, edge = [],
		fad = {}, entity, brink = [], outset = [], quit = [], morph,
		way, speed, destined = [], pour = 'requestAnimationFrame',
		use = $.extend({novel: pour in nib, turned: 0}, set);
	
		elementAnalysis();
	
		vessel.each(function(hit) {
	
			use = $.extend({}, use);
	
			$(this).data('impulse', use).on('wheel.excite', function(act, info) {
	
				if (!use.keen && !act.mien) return;
	
				if (act.mien) {
				fad = $.extend({}, use, info);
				use.annul = fad.delay == true;
				var loom = act.mien;
				fad.fluid = false;
				}
				else {
				if (use.annul) return;
				fad = use;
				loom = act.originalEvent.deltaY;
				}
	
				loom = loom/Math.abs(loom);
	
				if (use.crux) {
				entity = $(this);
				brink[0] = edge[hit];
				}
				else {
				entity = object;
				brink = edge;
				}
	
				$.each({range: 'orbit', tempo: 'pace'}, function(slot, mate) {
				if (typeof fad[slot] === 'function') fad[mate] = fad[slot]();
				else fad[mate] = fad[slot];
				});
	
				if (loom != use.zeal || act.mien) use.turned = 1;
				else use.turned = Math.min(use.curb, use.turned+1);
	
				if (!fad.delay && fad.fluid && use.turned == 1) morph = 'curve';
				else morph = fad.effect;
	
				way = loom*fad.orbit*Math.pow(use.leap, use.turned-1);
				speed = fad.pace*Math.pow(use.sloth, use.turned-1) || 1;
				use.zeal = loom;
	
				entity.each(function(part) {
				outset[part] = $(this).scrollTop();
				destined[part] = outset[part]+way;
				quit[part] = onFringe(this, part, outset[part]);
				});
	
				use.waive = ceaseOperation();
	
				if (!way) speed = 1;
				if (use.novel) {
				if (use.motion) {
				cancelAnimationFrame(use.motion);
				use.initial = use.present;
				}
				else use.initial = Date.now();
				use.motion = nib[pour](streamCore);
				}
				else inciteSource();
			});
	
			this.addEventListener('wheel', function(tick) {
	
				if (!use.keen) return;
				if (use.annul) return denyRise(tick);
				else if (fad.delay == true && !use.waive) use.annul = true;
				if (!(use.waive && use.occur)) denyRise(tick);
	
			}, hasQuiet() ? {passive: false} : false);
		});
	
		$.easing['curve'] = $.easing['easeInOutSine'];
	
		gate.resize(function() {
		clearTimeout(use.bound);
		use.bound = setTimeout(detectOverflow, 100);
		});
	
		return this;
	
		function streamCore() {
		use.present = Date.now();
		var advance = Math.min(use.present-use.initial, speed)/speed,
		increase = $.easing[morph](advance);
		entity.each(function(key) {
		if (!quit[key]) {
		$(this).scrollTop(outset[key]+increase*way);
		checkLimits(this, key, advance);
		}
		});
		if (advance < 1 && !use.waive) use.motion = nib[pour](streamCore);
		else hindStage();
		}
	
		function inciteSource() {
		entity.each(function(beat) {
		if (!quit[beat]) {
		$(this).stop().animate({scrollTop: destined[beat]}, {
		duration: speed,
		easing: morph,
		progress: function(current, sequence) {
		checkLimits(this, beat, sequence);
		},
		complete: hindStage
		});
		}
		});
		}
	
		function checkLimits(essence, rank, factor) {
		if (100*factor >= fad.reset) use.turned = 0;
		if (onFringe(essence, rank)) {
		quit[rank] = true;
		if (!use.novel) $(essence).stop(true, true);
		use.waive = ceaseOperation();
		}
		}
	
		function onFringe(matter, cue, genesis) {
		var put = Math.round(genesis || $(matter).scrollTop()),
		above = destined[cue] < 0 && !put,
		below = destined[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
		return above || below;
		}
	
		function ceaseOperation() {
		return quit.every(function(flag) {return flag});
		}
	
		function hindStage() {
		use.turned = use.annul = use.motion = 0;
		}
	
		function denyRise(jab) {
		jab.preventDefault();
		jab.stopPropagation();
		}
	
		function elementAnalysis() {
		var item = $();
		if (!object.length) {
		use.crux = true;
		object = vessel;
		}
		object.each(function() {
		if ($.zenith(this)) {
		if (!use.main) {
		if (use.novel) use.main = nib;
		else use.main = baseTag();
		item = item.add(use.main);
		}
		}
		else item = item.add(this);
		});
		use.target = object = item;
		object.each(function(zest) {
		if ($.zenith(this)) area[zest] = 'hub';
		else area[zest] = 'sub';
		});
		if (use.crux && use.main) vessel = object;
		detectOverflow();
		}
	
		function baseTag() {
		var origin = gate.scrollTop();
		gate.scrollTop(1);
		if ($('html').scrollTop()) var root = 'html';
		else if ($('body').scrollTop()) root = 'body';
		else root = 'html, body';
		gate.scrollTop(origin);
		return root;
		}
	
		function detectOverflow() {
		object.each(function(peg) {
		if (area[peg] == 'hub') var teem = $(document).height()-gate.height();
		else teem = this.scrollHeight-$(this).height();
		edge[peg] = Math.round(teem);
		});
		}
	
		function hasQuiet() {
		var cold = false,
		hike = function() {};
		try {
		var aid = Object.defineProperty({}, 'passive', {
		get: function() {cold = true}
		});
		nib.addEventListener('test', hike, aid);
		nib.removeEventListener('test', hike, aid);
		} catch(e) {}
		return cold;
		}
		};
	
		$.zenith = function(sample) {
	
		var peak = [nib,document,'HTML','BODY'], facet;
		if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
		$.each(peak, function(spot, detail) {
		facet = $(detail).data('impulse');
		if (facet) return false;
		});
		return facet;
		};
	
		$.fn.impulse.default = {
	
		target: '',
		range: 135,
		leap: 1.35,
		tempo: 500,
		sloth: 1.1,
		curb: 5,
		reset: 85,
		effect: 'easeOutSine',
		keen: true,
		delay: false,
		occur: true,
		fluid: true
		};
	
		$.fn.demit = function() {
	
		return this.each(function() {
		if ($.zenith(this)) var habit = $.zenith();
		else habit = $(this).data('impulse');
		if (habit) {
		if (habit.novel) cancelAnimationFrame(habit.motion);
		else habit.target.stop();
		habit.turned = habit.annul = habit.motion = 0;
		}
		});
		};
	
		$.fn.amend = function(gist) {
	
		return this.each(function() {
		if ($.zenith(this)) var quirk = $.zenith();
		else quirk = $(this).data('impulse');
		if (quirk) {
		$.each(gist, function(sign, rate) {
		if (sign in quirk) quirk[sign] = rate;
		});
		}
		});
		};
	
		$.fn.evoke = function(unit) {
	
		var lot = $.Event('wheel.excite', {mien: true}), bulk;
		return this.each(function() {
		if ($.zenith(this)) {
		if (!bulk) {
		bulk = $.zenith();
		if (bulk) $(bulk.main).trigger(lot, unit);
		}
		}
		else $(this).trigger(lot, unit);
		});
		};
		}(jQuery, window));
	
		(function($){var b={};$.each(['Quad','Cubic','Quart','Quint','Expo'],function(i,n){b[n]=function(p){return Math.pow(p,i+2)}});$.extend(b,{Sine:function(p){return 1-Math.cos(p*Math.PI/2)},Circ:function(p){return 1-Math.sqrt(1-p*p)},Elastic:function(p){return p===0||p===1?p:-Math.pow(2,8*(p-1))*Math.sin(((p-1)*80-7.5)*Math.PI/15)},Back:function(p){return p*p*(3*p-2)},Bounce:function(p){var f,h=4;while(p<((f=Math.pow(2,--h))-1)/11){}return (1/Math.pow(4,3-h)-7.5625*Math.pow((f*3-2)/22-p,2))}});$.each(b,function(n,e){$.easing['easeIn'+n]=e;$.easing['easeOut'+n]=function(p){return 1-e(1-p)};$.easing['easeInOut'+n]=function(p){return p<0.5?e(p*2)/2:1-e(p*-2+2)/2}})})(jQuery);
	

	/* 1. Custom mouse cursor */
/*
Copyright (c) 2020 by UXBox (https://codepen.io/uxbox/pen/RwPwemz)
Fork of an original work Hover slider (https://codepen.io/ig_design/pen/ZVQLmR

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
	

	$(document).ready(function() {

		/* 2. Animsition preloader */
		$(".js-animsition-overlay").animsition({
			inClass: 'overlay-slide-in-right',
			outClass: 'overlay-slide-out-right',
			inDuration: 1,
			outDuration: 1500,
			linkElement: '.js-animsition-link',
			// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			loading: false,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [ 'animation-duration', '-webkit-animation-duration'],
			// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay : true,
			overlayClass : 'js-animsition-overlay-slide',
			overlayParentElement : 'body',
			transition: function(url){ window.location.href = url; }
		});

		$('body').on('animsition.outStart', function() {
			$('body').removeClass('js-page-in-out');
			$('body').addClass('js-page-out');
		})

		$('body').on('animsition.inEnd', function() {
			$('body').addClass('js-page-in-out');
			$('body').addClass('js-page-in');
			setTimeout(function () {
				$("body").addClass("js-page-in-anim-active");
			}, 1200);

			/* 3. Swiper slider */
			var interleaveOffset = 1;

			var homeSwiper = new Swiper ('.js-home-slider', {
				speed: 1300,
				autoHeight: true,
				autoplay: {
					delay: 6500
				},
				watchSlidesProgress: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},

/*
Copyright (c) 2020 by digistate (https://codepen.io/digistate/pen/aEqzBB)

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.width * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transform =
							"translate3d(" + innerTranslate + "px, 0, 0)";
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transition =
							speed + "ms";
						}
					}
				}
			});

			var navSwiperBg = new Swiper ('.js-nav-slider-bg', {
				speed: 1000,
				effect: 'fade'
			});

			var navSwiper = new Swiper ('.js-nav-slider', {
				speed: 1000,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: navSwiperBg
				}
			});

			var parallaxVerticalSwiper = new Swiper(".js-parallax-slider", {
				direction: "vertical",
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				speed: 1300,
				parallax: true,
				mousewheel: {
					sensitivity: 1
				}
			});

			var parallaxVerticalSwiper2Bg = new Swiper(".js-parallax-slider-2-bg", {
				direction: "vertical",
				speed: 1300,
				parallax: true
			});

			var parallaxVerticalSwiper2 = new Swiper ('.js-parallax-slider-2', {
				direction: "vertical",
				speed: 1300,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: parallaxVerticalSwiper2Bg
				}
			});

			var freemodeVerticalSwiper = new Swiper(".js-freemode-slider", {
				direction: "vertical",
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				speed: 1300,
				parallax: true,
				spaceBetween: 120,
				breakpoints: {
					999: {
						spaceBetween: 90
					},
					767: {
						spaceBetween: 60
					}
				},
				freeMode: true,
				mousewheel: {
					sensitivity: 1
				}
			});

			var columnsSwiper = new Swiper ('.js-columns-slider', {
				spaceBetween: 120,
				slidesPerView: 'auto',
				loop: true,
				breakpoints: {
					999: {
						spaceBetween: 90
					},
					767: {
						spaceBetween: 60
					}
				},
				speed: 1300,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				mousewheel: {
					sensitivity: 1
				},
				freeMode: true
			});

			var columnsParallaxSwiper = new Swiper ('.js-columns-parallax-slider', {
				spaceBetween: 120,
				slidesPerView: 'auto',
				loop: true,
				breakpoints: {
					999: {
						spaceBetween: 90
					},
					767: {
						spaceBetween: 60
					}
				},
				speed: 1300,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				mousewheel: {
					sensitivity: 1
				},
				parallax: true,
				freeMode: true
			});

			var fadeVerticalSwiperBg = new Swiper(".js-fade-slider-bg", {
				direction: "vertical",
				speed: 1000,
				effect: 'fade'
			});

			var fadeVerticalSwiper = new Swiper ('.js-fade-slider', {
				direction: "vertical",
				speed: 1000,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: fadeVerticalSwiperBg
				}
			});

			var fadeSwiperBg = new Swiper(".js-fade-horizontal-slider-bg", {
				speed: 1000,
				effect: 'fade'
			});

			var fadeSwiper = new Swiper ('.js-fade-horizontal-slider', {
				speed: 1000,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: fadeSwiperBg
				}
			});

			var view3Swiper = new Swiper ('.js-3-view-slider', {
				slidesPerView: 1,
				centeredSlides: true,
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				breakpoints: {
					768: {
						slidesPerView: 2
					},
					1000: {
						slidesPerView: 3
					}
				}
			});

			var view2Swiper = new Swiper ('.js-2-view-slider', {
				slidesPerView: 1,
				centeredSlides: true,
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				breakpoints: {
					1000: {
						slidesPerView: 2
					}
				}
			});

			var view1Swiper = new Swiper ('.js-1-view-slider', {
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				}
			});

			var infiniteSwiper = new Swiper ('.js-infinite-slider', {
				slidesPerView: 2,
				spaceBetween: 20,
				speed: 5000,
				loop: true,
				autoplay: {
					delay: 0
				},
				breakpoints: {
					400: {
						slidesPerView: 3
					},
					550: {
						slidesPerView: 4
					},
					768: {
						slidesPerView: 5
					},
					1000: {
						slidesPerView: 6
					}
				}
			});

			/* 4. Isotope filter */
			function projectFilter() {
				var $gridt = $('.js-isotope-filter-grid-box');
				$gridt.isotope({
					itemSelector: '.js-isotope-filter-grid-item',
					percentPosition: true
				});
				$('.js-filter-button-box').on('click', '.js-filter-button', function () {
					var filterValue = $(this).attr('data-filter');
					$gridt.isotope({
						filter: filterValue
					});
					$(this).addClass('js-filter-button-active').siblings().removeClass('js-filter-button-active');
				});
			};
			projectFilter();

			$('.js-isotope-grid-box').isotope({
				itemSelector: '.js-isotope-grid-item',
				percentPosition: true
			});
		});

		/* 5. Scroll animations */
		var controller = new ScrollMagic.Controller();

		$(".js-img-scale").each(function() {
			var ourScene1 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: true,
				triggerHook: 1
			})
			.setClassToggle(this, "js-img-scale-active")
			.addTo(controller);
		});

		$(".js-scrollanim").each(function() {
			var ourScene2 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: false,
				triggerHook: .7
			})
			.setClassToggle(this, "js-scrollanim-active")
			.addTo(controller);
		});

		$(".js-touch .js-touch-hover-scroll").each(function() {
			var ourScene3 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: false,
				triggerHook: .5
			})
			.setClassToggle(this, "js-hover-active")
			.addTo(controller);
		});

		$(".js-slider-scroll-anim").each(function() {
			var ourScene4 = new ScrollMagic.Scene({
				triggerElement: this,
				reverse: true,
				triggerHook: 1
			})
			.setClassToggle(this, "js-slider-scroll-anim-active")
			.addTo(controller);
		});

		/* 6. Navigation open/close */
		$( ".js-menu-open-close" ).on( "click", function() {
			$('body').toggleClass('js-nav-active');
			/* $('.header-logo').fadeOut("slow");
			$('.social-media').fadeOut( "slow" );
			$('.social-media__menu').fadeIn( "slow" ); */
		});

		$( ".js-landing-close" ).on( "click", function() {
			$('body').removeClass('js-nav-active');
		});

		/* 7. Drop-down menu */
		$('.js-dropdown-open').on("click",function() {
			$('.js-dropdown-active-box').addClass('js-dropdown-is-active');
			$(this).find('.js-dropdown').addClass('js-dropdown-is-active');
		});

		$('.js-dropdown-slider-open').on("click",function() {
			$('.js-dropdown-active-box').addClass('js-dropdown-is-active');
			$(this).find('.js-dropdown').addClass('js-dropdown-is-active');
			$('.js-nav-slider-bg').addClass('js-dropdown-is-active');
			$('.js-nav-anim').addClass('js-dropdown-is-active');
		});

		$('.js-dropdown-close').on("click",function() {
			$('.js-dropdown-active-box').removeClass('js-dropdown-is-active');
			$('.js-dropdown').removeClass('js-dropdown-is-active');
			$('.js-nav-slider-bg').removeClass('js-dropdown-is-active');
			$('.js-nav-anim').removeClass('js-dropdown-is-active');
		});

		/* 8. Midnight header */
		$('.js-midnight-color').midnight();

	});

	/* 9. Footer hover effect */
	$('.js-footer-hover-link').on('mouseenter', function() {
		$('.js-footer-hover-box').addClass('js-footer-hover-active');
	});
	$('.js-footer-hover-link').on('mouseleave', function() {
		$('.js-footer-hover-box').removeClass('js-footer-hover-active');
	});

	/* 10. Magnific popup */
	$('.js-photo-popup').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below
		gallery: {
			// options for gallery
			enabled: true
		},
		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 800, // duration of the effect, in milliseconds
			easing: 'cubic-bezier(.858, .01, .068, .99)', // CSS transition easing function
			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

	$('.js-popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false
	});

	/* 11. Touch, no touch */
/* ============== SUPPORTS TOUCH OR NOT ========= */
/*! Detects touch support and adds appropriate classes to html and returns a JS object
  Copyright (c) 2013 Izilla Partners Pty Ltd  | http://www.izilla.com.au 
  Licensed under the MIT license  |  https://coderwall.com/p/egbgdw
*/
	var supports = (function() {
		var d = document.documentElement,
			c = "ontouchstart" in window || navigator.msMaxTouchPoints;
		if (c) {
			d.className += " js-touch";
			return {
				touch: true
			}
		} else {
			d.className += " js-no-touch";
			return {
				touch: false
			}
		}
	})();

	/* 12. Scroll to id */
	$('.js-smooth-scroll').mPageScroll2id();

	/* 13. Progress bar */
	$(".js-progress-animate-box").each(function() {
		$(this).find(".js-progress-animate").animate({
			width: $(this).attr("data-progress")
		});
	});

	/* 14. Accordion */
/*
Copyright (c) 2020 by Srdjan Pajdic (https://codepen.io/MightyShaban/pen/LqrCK)

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to 
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do 
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/
	$('.js-accordion-first-active .js-accordion-tab:first-child .js-accordion-btn').addClass('js-accordion-active').next().slideDown();

	$( ".js-accordion-btn" ).on( "click", function(j) {
		var dropDown = $(this).closest('.js-accordion-tab').find('.js-accordion-content');

		$(this).closest('.js-accordion').find('.js-accordion-content').not(dropDown).slideUp();

		if ($(this).hasClass('js-accordion-active')) {
			$(this).removeClass('js-accordion-active');
		} else {
			$(this).closest('.js-accordion').find('.js-accordion-btn.js-accordion-active').removeClass('js-accordion-active');
			$(this).addClass('js-accordion-active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});

	/* 15. Headroom */
	$(".js-headroom").headroom();

	/* 16. Scroll btn hide on scroll */
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 150) {
			$(".js-scroll-btn").addClass("js-active");
		} else {
			$(".js-scroll-btn").removeClass("js-active");
		}
	});

	/* 17. Parallax background */
	$(window).on("scroll", function() {
		parallax();
	});

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.js-parallax-bg').css('background-position', 'center '+(wScroll*0.25)+'px')
	}

	/* 17.2 Parallax background */
	$(window).on("scroll", function() {
		parallax();
	});

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.js-parallax-bg-2').css('background-position', 'center '+(wScroll*0.45)+'px')
	}

	/* 18. Contact form */
	$("#send_form").on('submit', function(){
		var first_name = $("#first_name").val().trim();
		var last_name = $("#last_name").val().trim();
		var email = $("#email").val().trim();
		var message = $("#message").val().trim();

		$.ajax({
			url: '../mail.php',
			type: 'POST',
			cache: false,
			data: {'first_name': first_name, 'last_name': last_name, 'email': email, 'message': message},
			dataType: 'html',
			beforeSend: function() {
				$("#send").addClass("js-active");
			},
			success: function(data) {
				if(!data || data != "Good"){
					$("#m_err").addClass("js-active");
					$(".form-box").addClass("js-active");
					$("#send").removeClass("js-active");
				}

				else {
					$("#m_sent").addClass("js-active");
					$(".form-box").addClass("js-active");
					$("#send").removeClass("js-active");
					$("#send_form").trigger("reset");
				}
				$('.js-popup-close').click(function() {
					$(this).parents('.js-popup-fade').removeClass("js-active");
					$('.form-box').removeClass("js-active");
					return false;
				});

				$(document).keydown(function(e) {
					if (e.keyCode === 27) {
						e.stopPropagation();
						$('.js-popup-fade').removeClass("js-active");
						$('.form-box').removeClass("js-active");
					}
				});

				$('.js-popup-fade').click(function(e) {
						if ($(e.target).closest('.js-popup').length == 0) {
						$('.js-popup-fade').removeClass("js-active");
						$('.form-box').removeClass("js-active");
					}
				});
			},
		})
		return false;
	});

});