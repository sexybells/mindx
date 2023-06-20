
function numberOneTriangle() {
    const number = Number(document.getElementById('number').value);
    document.getElementById("result").textContent = '';
    if (number < 1 || number > 10) {
        alert('Nhập số trong khoảng 1 đến 10');
    } else {
        for (let i = 0; i <= number; i++) {
            for (let j = 0; j < i; j++) {
                document.getElementById("result").append(' * ')
            }
            const br = document.createElement('br');
            document.getElementById("result").appendChild(br)
        }
    }
}