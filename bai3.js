function joinWithCharacter(array, charactor) {
    let string = '';
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            string += array[i] + charactor
        } else {
            string += array[i]
        }

    }
    return string;
}


// Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"