const arrayData = [
   {
      id:1,
      name:'Nguyen Van A',
      age:15
   },
   {
      id:2,
      name:'Nguyen Van B',
      age:16
   },
   {
      id:3,
      name:'Nguyen Van C',
      age:17
   },
   {
      id:4,
      name:'Nguyen Van D',
      age:18
   },
];

arrayData.forEach((v) => {
    console.log('STT: ' + v.id + '- Họ tên: ' + v.name +' - ' + v.age)
})
