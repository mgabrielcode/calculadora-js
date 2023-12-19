// Arquivo da classe de controle que possui seus métodos e atributos

class CalcController {
    
    //Classe construtora
    constructor(){
        // Atributos da classe construtora. São inicializado assim q é instanciado a classe
        this._operation = [];
        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora"); //o this referencia atributos e métodos
        this.currentDate; // O _ representa um atributo privado
        this.initialize();
        this.initButtonsEvents();
    }


    // Métodos da minha classe

    initialize(){ // método que mostra a hora e data atualizados
        this.setDisplayDateTime();
        setInterval(()=> {
           this.setDisplayDateTime();
        }, 1000); 
    }

    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }

    //método que pega a última operação(número ou sinal de operação) do array e retorna para o método que o chamar
    getLastOperation(){
        return this._operation[this._operation.length-1];
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }

    isOperator(value){
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);
    }

    calc(){
        let last = this._operation.pop();
        let result = eval(this._operation.join(""));
        this._operation = [result, last];
        this.setLastNumberToDisplay();
    }

    pushOperation(value){
        this._operation.push(value);
        if(this._operation.length > 3){
            this.calc();
        }
    }

    setLastNumberToDisplay(){
        let lastNumber;
        for (let i = this._operation.length-1; i >=0 ; i--) {
            if(!this.isOperator(this._operation[i])){
                lastNumber = this._operation[i];
                break;
            }
        }

        this.displayCalc = lastNumber;
    }

    addOperation(value){
        if(isNaN(this.getLastOperation())){
            if(this.isOperator(value)){
                this.setLastOperation(value);
            } else if (isNaN(value)){
                console.log('Outra coisa', value);
            } else {
                this.pushOperation(value);
                this.setLastNumberToDisplay();
            }

        } else {

            if(this.isOperator(value)){
                this.pushOperation(value);
            } else {
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));
                this.setLastNumberToDisplay();
            }
        }
    }

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(value){
        //Switch que irá chamar os métodos que cada botão da calculadora deverá executar
        switch(value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;

            case 'subtracao':
                this.addOperation('-');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':
                
                break;

            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;


            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) =>{
            this.addEventListenerAll(btn, 'click drag', e => {
                // A variavel textBtn recebe o nome da classe e substitui o "btn-" por ""(nenhum caractere)
                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = "pointer";
            })
        });
    }

    setDisplayDateTime (){
        // Através do objeto Date() acessado através do método get Current Date é executado o método toLocaleDateString que recebe o locale de 'pt-br' e converte para mostra a data e a hora em string 
        this.displayDate = this.currentDate.toLocaleDateString(this._locale); 
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }


    // MÉTODOS GETTERS E SETTERS DA MINHA CLASSE
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