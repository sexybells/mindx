//bai1 
// const so1 = prompt('Nhập số đầu tiên');
// const so2 = prompt('Nhập số thứ 2');
// if (Number(so1) > Number(so2)) {
//     console.log(`Số ${so1} lớn hơn ${so2}`)
// } else {
//     console.log(`Số ${so2} lớn hơn ${so1}`)
// }


//bai2
// const numberA = prompt('Nhập vào số a');
// if (Number(numberA) % 3 === 0) {
//     console.log('Số a chia hết cho 3');
// } else {
//     console.log('Số a không chia hết cho 3');
// }

//bai3

// const value = prompt('Nhập tháng');
//     const month = Number(value);
// switch(month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default: 
//         console.log('Vượt quá số tháng')

// }

//bai4

// const calculation = prompt('Nhập phép tính(+,-,*,/)');
// const number1 = Number(prompt('Nhập số thứ nhất'))
// const number2 = Number(prompt('Nhập số thứ hai'))
// let result = 0;
// if (calculation == '+') {
//     result = number1 + number2;
// } else  if (calculation == '-') {
//     result = number1 - number2;
// } else  if (calculation == '*') {
//     result = number1 * number2;
// } else if (calculation == '/') {
//     result = number1 / number2;
// }
// console.log('if else',result);
// result = 0;
// switch(calculation) {
//     case '+':
//         result = number1 + number2;
//         break;
//     case '-':
//         result = number1 - number2;
//         break;
//     case '*':
//         result = number1 * number2;
//         break;
//     case '/':
//         result = number1 / number2;
//         break;
//     default:
//         break;
// }
// console.log('switch case',result)

//bai5

// const numberA = Number(prompt('Nhập số a'));

// for (let i = 0; i <= numberA; i++) {
//     let flag = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             flag = false;
//             break;
//         }
//     }

//     if (i > 1 && flag === true) {
//         console.log(i);
//     }
// }

//bai6

// const numberA = Number(prompt('Nhập số a'))
// const numberB = Number(prompt('Nhập số b'))
// const numberC = Number(prompt('Nhập số c'))
// const delta = numberB * numberB - (4 * numberA * numberC);
// if (delta < 0) {
//     console.log('Phương trình có vô số nghiệm')
// }
// if (delta === 0) {
//     const x = -numberB / (2 * numberA);
//     console.log('Phương trình có nghiệm kép:'+ x)
// }

// if (delta > 0) {
//     const x1 = (-numberB + (Math.sqrt(delta)) / 2 * numberA);
//     const x2 = (-numberB - (Math.sqrt(delta)) / 2 * numberA);
//     console.log('Phương trình có 2 nghiệm: ' + x1 + ' và ' + x2)
// }

//bai7 

// const number = Number(prompt('Nhập vào 1 số'));
//  if (number > 0 && number <= 3) {
//     console.log('Mùa Xuân')
//  } else if (number > 3 && number <= 6) {
//     console.log('Mùa Hè');
//  } else if (number > 6 && number <= 9) {
//     console.log('Mùa Thu')
//  } else if (number > 9 && number <= 12) {
//     console.log('Mùa Đông');
//  }

