// 1. Make new copy of object using Object.assign() without mutating original object
const obj1 = {
    a: 1,
    b: 2
}

const obj2 = Object.assign(
    //an empty object. If you don't pass an object, value in obj1 will be passed in obj2 without modification.
    {},
    //target object to be modified
    obj1,
    //properties to be added to obj2 and properties to be overwritten in obj2
    {
    a: 3,
    c: 4
    });

console.log(obj2); // {a: 3, b: 2, c: 4}
console.log(obj1); // {a: 1, b: 2}