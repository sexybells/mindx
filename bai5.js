// Viết hàm tại đây

function getFirstElement(animals) {
    return animals.slice(0).shift();
}


// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']