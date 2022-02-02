const CLASSNAMES = {
    cur:'cur',
    prev:'prev',
    next:'next',
    moving: 'moving'
};

const DIRECTIONS = {
    back: -1,
    fwd: 1
};



class Slider {
    constructor(el) {
        this.el = el;
        this.initSlides();
        this.direction = DIRECTIONS.fwd;
    }

    initSlides() {
        this.slides = Array.from(document.querySelectorAll('.slider > *'));
        this.cur = this.slides.findIndex(slide => slide.classList.contains(CLASSNAMES.cur));
        this.prev = this.slides.findIndex(slide => slide.classList.contains(CLASSNAMES.prev));
        this.next = this.slides.findIndex(slide => slide.classList.contains(CLASSNAMES.next));
        this.max = this.slides.length - 1;
        return this;
    }

    fwd() {
        if (this.moving) return;
        this.direction = DIRECTIONS.fwd;
        this.prepare();
        this.cur = this.cur + 1 > this.max ? 0 : this.cur + 1;
        this.next = this.cur === this.max ? 0 : this.cur + 1;
        this.prev = this.cur === 0 ? this.max : this.cur - 1;
        this.apply();
    }

    back() {
        if (this.moving) return;
        this.direction = DIRECTIONS.back;
        this.prepare();
        this.cur = this.cur - 1 < 0 ? this.max : this.cur - 1;
        this.next = this.cur === 0 ? this.max : this.cur - 1;
        this.prev = this.cur === this.max ? 0 : this.cur + 1;
        this.apply();
    }

    prepare() {
        this.slides[this.cur].classList.remove(CLASSNAMES.cur);
        this.slides[this.prev].classList.remove(CLASSNAMES.prev);
        this.slides[this.next].classList.remove(CLASSNAMES.next);
        return this;
    }

    apply() {
        this.slides[this.cur].addEventListener('transitionend', () => this.moving = false);
        this.moving = true;
        this.slides[this.cur].classList.add(CLASSNAMES.cur);
        this.slides[this.prev].classList.add(CLASSNAMES.prev);
        this.slides[this.next].classList.add(CLASSNAMES.next);
        return this;
    }

    set moving(m) {
        this.el.classList.toggle(CLASSNAMES.moving, m === true);
    }

    get moving() {
        return this.el.classList.contains(CLASSNAMES.moving);
    }

    set direction(d) {
        this.el.style.setProperty('--move', d);
    }

    get direction() {
        return this.el.style.getPropertyValue('--move');
    }
}

const carousel = new Slider(document.querySelector(".slider"));
document.querySelector('.buttons button:first-child').addEventListener('click', carousel.back.bind(carousel));
document.querySelector('.buttons button:last-child').addEventListener('click', carousel.fwd.bind(carousel));
