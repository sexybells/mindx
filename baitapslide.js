const ronaldo = {
    name: 'Ronaldo',
    age: 38,
    job: 'soccer'
};
const confirm = prompt('Bạn có muốn nhập thông tin không? Y/N').toUpperCase();

if (confirm === 'Y') {
    const label = prompt('Nhập thông tin bạn muốn thêm là? (Ví dụ: Quê quán)')
    const info = prompt('Nội dung');
    ronaldo[label] = info;
} else {
    alert('Kết thúc');
}
const lastKey = Object.keys(ronaldo).pop();
let label = '';
let info = '';
if (lastKey !== 'job') {
    label = lastKey;
    info = ronaldo[lastKey];
}
alert('Thông tin của Ronaldo là: Tên ' + ronaldo.name + ' Tuổi: ' + ronaldo.age + ' Nghề nghiệp: ' + ronaldo.job + ' Thông tin thêm:  ' + ronaldo[label] + ': ' +info)