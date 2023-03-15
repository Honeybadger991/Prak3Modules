export default class Download {
    constructor(triggers){
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadFile(path){
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const elem = document.createElement('a');
                elem.setAttribute('href', path);
                elem.setAttribute('download', 'some_pic');
                elem.style.display = 'none';
                document.body.appendChild(elem);
                elem.click();
                document.body.removeChild(elem);
            })
        })
    }

    init() {
        this.downloadFile(this.path)
    }
}