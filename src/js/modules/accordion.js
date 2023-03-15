export default class Accordion{
    constructor(btnsSelector){
        this.btns = document.querySelectorAll(btnsSelector);
    }

    init(){
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.btn = btn;
                if(this.btn.nextElementSibling.style.display === 'none'){
                    this.btn.nextElementSibling.style.display = 'block';
                } else{
                    this.btn.nextElementSibling.style.display = 'none'
                }
            })
        })
    }
};