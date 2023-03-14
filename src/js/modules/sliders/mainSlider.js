import Slider from "./sliders";

export default class MainSlider extends Slider {
    constructor(buttons){
        super(buttons);
    }

    showSlide(n){
        if (n > this.slides.length){
            this.slideIndex = 1;
        }

        if (n < 1){
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide =>{
            slide.style.display = 'none';
        })

        this.slides[this.slideIndex - 1].style.display = 'block';

        try {
            this.timeBlock.style.opacity = '0';

            if(this.slideIndex === 3){
                this.timeBlock.classList.add('animated');
                setTimeout(() =>{
                    this.timeBlock.style.opacity = '1';
                    this.timeBlock.classList.add('slideInUp');
                }, 3000);
            } else {
                this.timeBlock.classList.remove('slideInUp');
            }
        } catch (e) {};
    }

    changeSlide(n){
        this.showSlide(this.slideIndex += n);
    }

    bindTriggers(){
        this.btns.forEach(btn =>{
            btn.addEventListener('click', () => {
                this.changeSlide(1);
            })

            btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlide(this.slideIndex);
            });
        });

        this.prevAll.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.changeSlide(-1);
            });
        });

        this.nextAll.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.changeSlide(1);
            });
        });
    }

    render(){
        if(this.container){
            try {
                this.timeBlock = document.querySelector('.hanson'); 
            } catch (e) {};
    
            this.showSlide(this.slideIndex);
            this.bindTriggers();
        }
    }
};