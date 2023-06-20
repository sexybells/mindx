const A = document.getElementById('soA');
const B = document.getElementById('soB');

function sum() {
    const valueA = Number(A.value);
    const valueB = Number(B.value);
    let count = 0;
    if (valueA >= valueB) {
        alert('Số A phải nhỏ hơn số B');
    } else {
        for (let i = valueA; i <= valueB; i++) {
            let flag = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    flag = false;
                    break;
                }
            }

            if (i > 1 && flag === true) {
                count += i;
            }
        }
        document.getElementById('result').textContent = 'Kết quả là: ' + count;
    }
   
}

