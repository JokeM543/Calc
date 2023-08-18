const out = document.querySelector('.counter')

calculation=" "
function myFunc(a){
    calculation += a;
    console.log(calculation);
    out.textContent = calculation
}

function myEval(a){
    calculation = eval(calculation)
    console.log(calculation)
    out.textContent = calculation
}

function allClear(){
    calculation = " "
    out.textContent = 0
    console.log
}
