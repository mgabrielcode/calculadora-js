class CalcController {
    constructor(){
        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora"); //o this referencia atributos e métodos
        this.currentDate; // O _ representa um atributo privado
        this.initialize();
    }

    initialize(){
        this.setDisplayDateTime();
        setInterval(()=> {
           this.setDisplayDateTime();
        }, 1000); 


    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
    }

    setDisplayDateTime (){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    // métodos get e set do display time
    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    // método do get e set do display date
    get displayDate(){
        return this._dataEl.innerHTML;
    }

    set displayDate(value){
        this._dataEl.innerHTML = value
    }


    // métodos get e set do display Calc
    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    // métodos get e set do current date
    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        return this.currentDate = value;
    }
}