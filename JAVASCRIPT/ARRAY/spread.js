//make new array from old array, add new element
let arr1 = [2, 3, 4];
let ar2 = [1, ...arr1, 5];
console.log(ar2); // [1, 2, 3, 4, 5]

//make new array from old array, replace some elements
let ar3 = [1, 2, 3, 4];
//change element at index 1 to 5
let i = ar3.indexOf(2);
let ar4 = [...ar3.slice(0, i), 5, ...ar3.slice(i+1)];
console.log(ar4); // [1, 5, 3, 4]