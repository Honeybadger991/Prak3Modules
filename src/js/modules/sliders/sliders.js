export default class Slider {
    constructor({
        container = null,
        buttons = null,
        prev = null,
        next = null,
        prevAll = null,
        nextAll = null,
        activeClass = '',
        animated = false,
        auto = false
        } = {}){
        this.container = document.querySelector(container);
        try{this.slides = this.container.children} catch(e){};
        this.btns = document.querySelectorAll(buttons);
        this.slideIndex = 1;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.prevAll = document.querySelectorAll(prevAll);
        this.nextAll = document.querySelectorAll(nextAll);
        this.activeClass = activeClass;
        this.animated = animated;
        this.auto = auto;
    }
};