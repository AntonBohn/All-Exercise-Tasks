const CLASSNAMES = {
  cur: "cur",
  prev: "prev",
  next: "next",
  moving: "moving",
};

const DIRECTIONS = {
  back: -1,
  fwd: 1,
};

class Slider {
  constructor(el) {
    this.el = el;
    this.initSlides();
    this.direction = DIRECTIONS.fwd;

    console.log(this);
  }

  initSlides() {
    this.slides = Array.from(document.querySelectorAll(".slider > *"));
    this.itemCount = this.slides.length;
    this.max = this.slides.length - 1;
    this.cur = 0;
    this.next = 1;
    this.prev = this.max;
    this.slides[this.cur].classList.add(CLASSNAMES.cur);
    this.slides[this.next].classList.add(CLASSNAMES.next);
    this.slides[this.prev].classList.add(CLASSNAMES.prev);
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
    this.slides[this.cur].addEventListener(
      "transitionend",
      () => (this.moving = false)
    );
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
    this.el.style.setProperty("--move", d);
  }

  get direction() {
    return this.el.style.getPropertyValue("--move");
  }

  set itemCount(i) {
    this.el.style.setProperty("--item-count", i);
  }

  get itemCount() {
    return this.el.style.getPropertyValue("--item-count");
  }
}

const carousel = new Slider(document.querySelector(".slider"));
document
  .querySelector(".buttons button:first-child")
  .addEventListener("click", carousel.back.bind(carousel));
document
  .querySelector(".buttons button:last-child")
  .addEventListener("click", carousel.fwd.bind(carousel));
