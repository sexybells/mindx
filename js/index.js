const textResult = document.getElementById('result');

function setCalculate() {
    const operator = ['+', '-', '*', '/'];
    if(textResult.textContent.length === 1 && textResult.textContent === '0') {
        textResult.innerHTML = '';
    }
    textResult.append(event.target.outerText);

}

function calculate() 
{
    const result = eval(textResult.textContent);
    textResult.innerHTML = ''
    textResult.innerHTML = result;
}

function clearText() {
    textResult.innerHTML = '0'
}