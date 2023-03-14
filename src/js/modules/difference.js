export default class Difference {
    constructor(oldOfficer, newOfficer, items){
        try{
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e){};
    }

    bindTriggers(row, rowItems, counter){
        row.querySelector('.plus').addEventListener('click', () => {
            rowItems[counter].style.display = 'flex';
            rowItems[counter].classList.add('animated', 'fadeIn');
            counter++;
            if(counter === rowItems.length - 1){
                rowItems[rowItems.length - 1].remove();
            }
        });
    }

    hideItems(rowItems){
        rowItems.forEach((item, i, arr) => {
            if(i !== arr.length - 1){
                item.style.display = 'none';
            }
        })
    }

    init(){
        try{
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
    
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch(e){};
    }
};