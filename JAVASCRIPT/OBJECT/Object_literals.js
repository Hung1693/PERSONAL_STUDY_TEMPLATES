
let id = 1;
let name = 'a';
let age = 1;
let user = {};
//add key id: user.id = 'hung' or
//user['id'] = 'hung';
//user= {id: 'hung'};

//key = id's value; value = 'hung'
//user[id] = 'hung'; user = {'1': 'hung'}

//computed property name
let computedUser = {
    [id]: 'hung'
}
console.log(computedUser); //{'1': 'hung'}

//shorthand property name

let shorthandUser = {
    //search for variable name id, name, age and assign them to the property name id, name, age
    id,
    name, age
}
console.log(shorthandUser); //{id: 1, name: 'a', age: 1}