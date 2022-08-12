//Use spread operator instead of Object.assign() to make a copy of an object without mutating the original object.;
const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    //... is the spread operator. It spreads the properties of obj1 into obj2.
    ...obj1,

    //properties to be added to obj2 and properties to be overwritten in obj2
    a: 4,
    d: 5
}
console.log(obj2); // {a: 4, b: 2, c: 3, d: 5}

//to make copy of an object without mutating the original object without a key from, use spread operator.
var {
    //key to be ignored
     a,
    //name new object to be created
    ...obj3DeleteA
}
//target object to be copied
    = obj2;

//make a new objectNoAB3C4 {b:3, c:4, e:5} from obj1 (delete a, overwrite b, c, add e)
var { a, ...objectNoAB3C4 } = { ...obj1, b: 3, c: 4, e: 5 };


console.log(obj1); // {a: 1, b: 2, c: 3}
console.log(obj3DeleteA); // {b: 2, c: 3, d: 5}
console.log(objectNoAB3C4); // {b: 3, c: 4, d: 5}