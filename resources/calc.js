function calculate() {
    const num1 = +document.querySelector('[name="num1"]').value;
    const num2 = +document.querySelector('[name="num2"]').value;
    const operation = document.querySelector('[name="operation"]').value;
    let result;

    if(operation==='add'){
        result = num1 + num2;
    }else if(operation === 'sub'){
        result = num1 - num2;
    }else if(operation === 'mult'){
        result = num1 * num2;
    }else if(operation === 'div'){
        result = num1 / num2;
    }

    document.querySelector('.cal-result').innerText = result;
}

document.querySelector('.calc-calculate').addEventListener('click', function(){
    calculate();  
});
document.querySelector('[name="operation"]').addEventListener('change', function(){
    calculate();
});
document.querySelector('[name="num1"]').addEventListener('input', function(){
    calculate();
});
document.querySelector('[name="num2"]').addEventListener('input', function(){
    calculate();
});