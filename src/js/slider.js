class Slider {
    constructor(selector, autoplay = true, type) {
        this.sliderContainer = document.querySelector(selector);
        this.sliderContent = this.sliderContainer.querySelector('.slider-content img');
        this.type = type;
        this.slides = this.type === 1 ? this.sliderContainer.querySelectorAll('.slider-nav li') : this.sliderContainer.querySelectorAll('.slider-content__people .person');
        this.prevArrow = this.sliderContainer.querySelector('.slider-arrow--prev');
        this.nextArrow = this.sliderContainer.querySelector('.slider-arrow--next');
        this.slidesCount = this.slides.length;
        this.activeSlide = 0;
        this.autoplay = autoplay;
        this.interval = 2500;
    }

    nextSlide = () => {
        if (this.activeSlide === this.slidesCount - 1) {
            this.activeSlide = 0
        } else {
            this.activeSlide++
        }
        this.showCurrentSlide();
    };

    prevSlide = () => {
        if (this.activeSlide === 0) {
            this.activeSlide = this.slidesCount - 1
        } else {
            this.activeSlide--
        }
        this.showCurrentSlide();
    };

    addListener = () => {
        if (this.type === 2) {
            this.prevArrow.addEventListener('click', this.prevSlide);
            this.nextArrow.addEventListener('click', this.nextSlide);
        }

        if (this.autoplay) {
            setInterval(this.nextSlide, this.interval);
        }
    };

    showCurrentSlide = () => console.log(this.activeSlide);

    renderSlides = () => {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.slides[this.activeSlide].classList.add('active');
    };

    showInfo = () => {
        console.log(this.slides)
        console.log('slidesCount ', this.slidesCount)
        console.log('activeSlide', this.activeSlide)
    }
}

class Slider1 {
    constructor(selector) {
        this.sliderContainer = document.querySelector(selector);
        this.sliderContent = this.sliderContainer.querySelector('.slider-content img');
        this.slides = this.sliderContainer.querySelectorAll('.slider-nav li');
        this.activeSlide = 0;
        this.currecntSlideImg = this.slides[this.activeSlide].querySelector('img');
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
                    this.currecntSlideImg = this.slides[this.activeSlide].querySelector('img');
                    this.sliderContent.src = this.currecntSlideImg.src;
                }
            });
        });
    };
}

const sl = new Slider1('#slider-about', false);

sl.addListener();
