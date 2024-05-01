function makeCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.btnClick();
            this.enterButon();
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
                } else if (element.classList.contains('btnEqui')){
                    this.makeAccount();
                }
            });
        },
        enterButon(){
            this.display.addEventListener('keyup', (e) => {
                console.log(e.keycode);
                if(e.keyCode === 13){
                    this.makeAccount();
                }
            });
        },
        btnDrawDisplay(num) {
            const validChars = /[0-9()+\-*/.]+/;
            if (validChars.test(num)) {
                this.display.value += num;
                this.display.focus();
            } else {
                console.log('Invalid input');
            }
        },
        clearDisplay(){
            this.display.value = '';
        },
        displayBackspace(){
            this.display.value = this.display.value.slice(0, -1);
        },
        makeAccount(){
            try {
                const expression = this.display.value.trim();
                const validExpression = /^[0-9()+\-*/.]+$/;
                if (validExpression.test(expression)) {
                    this.display.value = eval(expression);
                } else {
                    this.display.value = 'Error';
                }
            } catch (e) {
                this.display.value = 'Error';
            }
        },
    };
}

const calculator = makeCalculator();
calculator.start();