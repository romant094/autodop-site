class SliderFeedback {
    constructor(selector, data, autoplay = false) {
        if (autoplay) {
            this.startAutoplay();
        }

        this.state.slides = data.map((item, i) => ({...item, id: i}));
        this.images = document.querySelectorAll(`${selector} .person-photo`);
        this.text = document.querySelector(`${selector} .slider-content__text`);
        this.name = document.querySelector(`${selector} .slider-content__name`);
        this.nextArrow = document.querySelector(`${selector} #next-arrow svg`);
        this.prevArrow = document.querySelector(`${selector} #prev-arrow svg`);
        this.arrows = [this.nextArrow, this.prevArrow];
        this.functions = [this.prevSlide, this.nextSlide];
        this.cutSlides();
        this.renderSlider();
        this.addListeners();
    }

    state = {
        slides: [],
        tickTime: 3000,
        visibleSlides: [],
        shiftSlide: {}
    };

    prevSlide = () => {
        this.cutSlides();
        this.state.shiftSlide = this.state.slides.shift();
        this.setState('slides', [...this.state.slides, this.state.shiftSlide]);
        this.renderSlider();
    };

    nextSlide = () => {
        this.cutSlides();
        this.state.shiftSlide = this.state.slides.pop();
        this.setState('slides', [this.state.shiftSlide, ...this.state.slides]);
        this.renderSlider();
    };

    setState = (state, newValue) => this.state[state] = newValue;

    startAutoplay = () => this.state.intervalId = setInterval(this.nextSlide, this.state.tickTime);

    stopAutoplay = () => clearInterval(this.state.intervalId);

    cutSlides = () => this.state.visibleSlides = this.state.slides.map((item, i) => {
        if (i < 5) {
            return Object.assign({}, item)
        }
    });

    addListeners = () => {
        this.arrows.forEach((arrow, i) => arrow.addEventListener('click', this.functions[i]))
    };

    renderSlider = () => {
        this.images.forEach((img, i) => img.src = this.state.visibleSlides[i].img);
        this.text.textContent = this.state.visibleSlides[2].text;
        this.name.textContent = this.state.visibleSlides[2].name;
    };
}

class SliderAbout {
    constructor(selector) {
        this.sliderContainer = document.querySelector(selector);
        this.sliderContent = this.sliderContainer.querySelector('.slider-content img');
        this.slides = this.sliderContainer.querySelectorAll('.slider-nav li');
        this.activeSlide = 0;
        this.currentSlideImg = this.slides[this.activeSlide].querySelector('img');
    }

    addListener = () => {
        this.slideClick();
    };

    toggleActiveClass = (i, param) => {
        if (param === 'add') {
            this.slides[i].classList.add('active');
        } else {
            this.slides[i].classList.remove('active');
        }
    };

    slideClick = () => {
        this.slides.forEach((slide, i) => {
            slide.addEventListener('click', (e) => {
                const target = e.target.tagName;
                if (target === 'IMG') {
                    this.toggleActiveClass(this.activeSlide, 'remove');
                    this.activeSlide = i;
                    this.toggleActiveClass(i, 'add');
                    this.currentSlideImg = this.slides[this.activeSlide].querySelector('img');
                    this.sliderContent.src = this.currentSlideImg.src;
                }
            });
        });
    };
}
