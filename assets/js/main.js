function makeCalculator() {
    return {
        display: document.querySelector('.display'),
        displayAcumulator: document.querySelector('#displayAcumulator'),
        acumulator: 0,
        operatorAcumulator: "",

        start() {
            this.btnClick();
        },
        btnClick() {
            document.addEventListener('click', (e) => {
                const element = e.target;

                if (element.classList.contains('btn-num')) {
                    this.btnDrawDisplay(element.innerText);
                } else if (element.classList.contains('btnClear')) {
                    this.clearDisplay();
                    console.log('clear display');
                } else if (element.classList.contains('btnBack')) {
                    this.displayBackspace();
                } else if (element.classList.contains('btnOper')){
                    this.operatorAcumulator = element.innerText;
                    this.makeAccount();
                }
            });
        },
        btnDrawDisplay(num) {
            this.display.value += num;
        },
        clearDisplay(){
            this.display.value = '';
            this.displayAcumulator.innerText = '';
            this.acumulator = 0;
        },
        displayBackspace(){
            this.display.value = this.display.value.slice(0, -1);
        },
        makeAccount(){

        },
    };
}

const calculator = makeCalculator();
calculator.start();