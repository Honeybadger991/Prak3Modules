export default class Slider {
    constructor({
        container = null,
        buttons = null,
        prev = null,
        next = null,
        activeClass = '',
        animated = false,
        auto = false
        } = {}){
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(buttons);
        this.slideIndex = 1;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animated = animated;
        this.auto = auto;
    }
};