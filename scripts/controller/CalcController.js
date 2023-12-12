class CalcController {
    constructor(){
        this._displayCalc = 0; //o this referencia atributos e métodos
        this.currentDate; // o _ representa um atributo privado
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dataEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "678";
        dataEl.innerHTML = "12/12/2023";
        timeEl.innerHTML = "11:31";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get dataAtual(){
        return this.currentDate;
    }

    set dataAtual(value){
        return this.currentDate = value;
    }
}