export default class VideoPlayer {
    constructor(buttons, overlay){
        this.btns = document.querySelectorAll(buttons);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);//привязываем контекст, потому что изначально он у нового класса плеера
    }

    bindTriggers(){
        this.btns.forEach((btn, i) => {
           try{
                if(i % 2){
                    this.btns[i].closest('.module__video-item').setAttribute('data-disabled', 'true');//дизейблим каждый второй блок
                }
                btn.addEventListener('click', () =>{
                    if(!btn.closest('.module__video-item') || !btn.closest('.module__video-item').getAttribute('data-disabled')){//первое условие для не модульной страницы
                        this.activeBtn = btn;//получаем, что бы обрабатывать в онСтэйдж функции
                        if(document.querySelector('iframe#frame')){//проверка, был ли создан плеер
                            this.overlay.style.display = 'flex';
                            if(this.path !== btn.getAttribute('data-url')){
                                this.path = btn.getAttribute('data-url');
                                this.player.loadVideoById({videoId: this.path});
                            }
                        } else {
                            this.path = btn.getAttribute('data-url');
                            this.createPlayer(this.path);
                        }
                    }
                });
            } catch(e){};
        });
    }

    bindClose(){
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });
    }
    
    onPlayerStateChange(state){//запускается сама из обьекта плеера
        try{
            const blockedBlock = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const unblockedIcon = this.activeBtn.querySelector('svg').cloneNode(true);
    
            if(state.data === 0 && blockedBlock.getAttribute('data-disabled') === 'true'){
                blockedBlock.removeAttribute('data-disabled');
                blockedBlock.style.filter = 'none';
                blockedBlock.style.opacity = '1';
                blockedBlock.querySelector('.play__circle').classList.remove('closed');
                blockedBlock.querySelector('.play__circle svg').remove();
                blockedBlock.querySelector('.play__circle').appendChild(unblockedIcon);
                blockedBlock.querySelector('.play__text').textContent = 'play video';
                blockedBlock.querySelector('.play__text').classList.remove('attention');
            }
        } catch(e){};
    }

    createPlayer(url){
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });

        this.overlay.style.display = 'flex';
    }

    init(){
        if(this.btns.length > 0){
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
            this.bindTriggers();
            this.bindClose();
        }
    }
};