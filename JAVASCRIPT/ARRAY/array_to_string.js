//toString(): cannot specify separator;
let arr = ['nguyen', 'hung'];
let name = arr.toString('');
console.log(name); //nguyen,hung

//join(): can specify separator;
let arr2 = ['hung', 'nguyen'];
let name2 = arr2.join('-');
console.log(name2); //hung-nguyen