//bai1
// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// for (let i = 0; i < month.length; i++) {
//     console.log(month[i]);
// }

//bai2

// const number = Number(prompt('Nhập vào một số'));
const number = 7;
//a 

// for (let i = 0; i < number; i++) {
//     if (i % 2 === 0) {
//         console.log('Số chẵn: ' + i)
//     } else {
//         console.log('Số lẻ: ' + i)
//     }
// }

//b

// console.log(parseInt(number.toString(), 2))

//c
// let count = 1;
// if (number === 0) {
//     console.log(1);
// } else {
//     for (let i = 1; i <= number; i++) {
//         count *= i;
//     }
// }

// console.log(count);

//d

// for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//         console.log(i);
//     }
// }

//f
// let flag = true;

//     if (number < 2) {
//         flag = false;
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }

//     if (flag === true) {
//         console.log(number + ' là số nguyên tố')
//     }

//g
//tamgiac
    // for (let i = 0; i <= number; i++) {
    //     for( let j = 0; j < i; j++) {
    //         document.write(" * ")
    //     }
    //     document.write("<br>");
    // }

//hinhvuong
for (let i = 0; i <= number; i++) {
    document.write(" * ")
    // for( let j = 0; j <= i; j++) {
    //     document.write(" * ")

    //     if (j == i) {
    //         document.write("<br>");
    //         break;


    //     }
    // }
}

    





