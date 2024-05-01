function makeCalculator(){
    return{
        display: document.querySelector('.display'),
        btns: document.querySelector('.btn'),

        start(){
            this.btnClick();
        },
        btnClick(){
            document.addEventListener('click', (e)=>{
                const element = e.target;

                if(element.classList.contains('btn-num')){
                    this.btnDrawDisplay(element.innerText);
                }
            });
        },
        btnDrawDisplay(num){
            this.display.value += num;
        }
    };
}

const calculator = makeCalculator();
calculator.start();