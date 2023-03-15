import MainSlider from "./modules/sliders/mainSlider";
import MiniSlider from "./modules/sliders/miniSliders";
import VideoPlayer from "./modules/videoPlayer";
import Difference from "./modules/difference";
import Forms from "./modules/forms";
import Accordion from "./modules/accordion";
import Download from "./modules/download";

window.addEventListener('DOMContentLoaded', () => {
    const pageSlider = new MainSlider({container: '.page', buttons: '.next'});
    pageSlider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', buttons: '.next', prevAll: '.prevmodule', nextAll: 
    '.nextmodule'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({container: '.showup__content-slider', prev: '.showup__prev', next: '.showup__next', 
    activeClass: 'card-active', animated: true});
    showUpSlider.render();

    const modulesSlider = new MiniSlider({container: '.modules__content-slider', prev: '.modules__info-btns .slick-prev', next: 
    '.modules__info-btns .slick-next', activeClass: 'card-active', animated: true, auto: true});
    modulesSlider.render();

    const feedSlider = new MiniSlider({container: '.feed__slider', prev: '.feed__slider .slick-prev', next: 
    '.feed__slider .slick-next', activeClass: 'feed__item-active'});
    feedSlider.render();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Forms('.form').init();
    new Accordion('.module__info-show').init();
    new Download('.download').init();
})