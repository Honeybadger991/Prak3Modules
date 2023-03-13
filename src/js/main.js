import MainSlider from "./modules/sliders/mainSlider";
import MiniSlider from "./modules/sliders/miniSliders";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const pageSlider = new MainSlider({container: '.page', buttons: '.next'});
    pageSlider.render();

    const showUPSlider = new MiniSlider({container: '.showup__content-slider', prev: '.showup__prev', next: '.showup__next', 
    activeClass: 'card-active', animated: true});
    showUPSlider.render();

    const modulesSlider = new MiniSlider({container: '.modules__content-slider', prev: '.modules__info-btns .slick-prev', next: 
    '.modules__info-btns .slick-next', activeClass: 'card-active', animated: true, auto: true});
    modulesSlider.render();

    const feedSlider = new MiniSlider({container: '.feed__slider', prev: '.feed__slider .slick-prev', next: 
    '.feed__slider .slick-next', activeClass: 'feed__item-active'});
    feedSlider.render();

    const videoPlayer = new VideoPlayer('.showup .play', '.overlay');
    videoPlayer.init();
})