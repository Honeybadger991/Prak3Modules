import Slider from "./sliders";

export default class MiniSlider extends Slider{
    constructor(container, prev, next, activeClass, animated, auto){
        super(container, prev, next, activeClass, animated, auto);
    }

    bindTriggers(){
        let sliderBtns = this.container.querySelectorAll('button');

        this.prev.addEventListener('click', () => {
            if(sliderBtns){
                sliderBtns.forEach(btn =>{
                    this.container.insertBefore(btn, this.slides[0]);
                })
            }
            this.container.insertBefore(this.slides[this.slides.length - 1], this.slides[0]);
            this.activeSlide();
        });

        this.next.addEventListener('click', () => {
            if(sliderBtns){
                sliderBtns.forEach(btn =>{
                    this.container.appendChild(btn);
                })
            }
            this.container.appendChild(this.slides[0]);
            this.activeSlide();
        });

    }

    activeSlide(){
        this.slides.forEach(slide =>{
            slide.classList.remove(this.activeClass);
            if(this.animated){
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        })

        this.slides[0].classList.add(this.activeClass);
        if(this.animated){
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '0.5';
        }
    }

    autoPlay(){
        if(this.auto){
            const autoNext = setInterval(() =>{
                this.next.click()
            }, 5000)
            this.container.addEventListener('mouseenter', () => {
                clearInterval(autoNext);
            })
            this.container.addEventListener('mouseleave', () => {
                this.autoPlay();
            })
        }
    }

    render(){
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
        this.bindTriggers();
        this.activeSlide();
        this.autoPlay();
    }
};