// slice(indexStart, indexEnd): return elements from index start to index end - 1, immutable, shallow copy.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(1, 4));
// return from index 1 to index 3, [2, 3, 4]
// if indexStart is not specified, start from 0; if indexEnd is not specified, end at the last element;
console.log(arr2.slice(1));
// return from index 1 to the last element, [2, 3, 4, 5]
// if indexEnd is negative, end at the last element from indexEnd to the last element; start from indexStart to the last element;
console.log("negative indexEnd", arr2.slice(2, -1)); // return from index 2 to the last element -1 element: [3, 4]
console.log(arr2);
// [1, 2, 3, 4, 5]

// .filter(callback): remove elements that satisfy the condition, return new array, immutable, shallow copy.
let arr3 = [1, 2, 3, 4, 5];
let arr3_filter = arr3.filter((e) => e % 2 === 0);
console.log("arr3_filter", arr3_filter); // [2, 4]
console.log("arr3", arr3); // [1, 2, 3, 4, 5]
