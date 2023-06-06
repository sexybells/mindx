// Viết hàm tại đây

function getLastElement(animals) {
    let last = animals.slice(-1).pop();
    return last;
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']