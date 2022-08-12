//constructor function
function CourseF(name, price) {
    this.name = name;
    this.price = price;
}
const js = new CourseF('JS', "1000");

console.log(`course ${js.name}, price ${this.price}`);
console.log(js);

//constructor class
class CourseC {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        return (`${this.name}: ${this.price}`)
    }
}
const html = new CourseC('html', 10000);
console.log(html);
console.log(html.getInfo(vnd));