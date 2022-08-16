// class Building {
//   //private prop
//   #numberOfFloors;
//   #yearLastInspected;
//   constructor(numberOfFloors, yearLastInspected) {
//     this.#numberOfFloors = numberOfFloors;
//     this.#yearLastInspected = yearLastInspected;
//   }
//   //allow access to private prop
//   get numberOfFloors() {
//     return this.#numberOfFloors;
//   }
//   get yearLastInspected() {
//     return this.#yearLastInspected;
//   }
//   //allow set access to private prop to do some validation
//   set yearLastInspected(year) {
//     this.#yearLastInspected = year;
//   }

//   addFloor() {
//     this.#numberOfFloors += 1;
//   }

//   needsInspection() {
//     return new Date().getFullYear() - this.#yearLastInspected > 10;
//   }
// }

// const empireState = new Building(102, 2014); // 102 floors inspected in 2014
// console.log(empireState);

class Building {
  #numberOfFloors;
  #yearLastInspected;
  constructor(numberOfFloors, yearLastInspected) {
    this.#numberOfFloors = numberOfFloors;
    this.#yearLastInspected = yearLastInspected;
  }

  getNumberOfFloors() {
    return this.#numberOfFloors;
  }

  getYearLastInspected() {
    return this.#yearLastInspected;
  }

  setYearLastInspected(newValue) {
    this.#yearLastInspected = newValue;
  }

  addFloor() {
    this.#numberOfFloors += 1;
  }

  needsInspection() {
    return new Date().getFullYear() - this.#yearLastInspected > 10;
  }
}

const empireState = new Building(102, 2014);
console.log(empireState);//empty Building{}
console.log(empireState.getNumberOfFloors());        // 102
console.log(empireState.getYearLastInspected());     // 2014
empireState.setYearLastInspected(2016);
console.log(empireState.getYearLastInspected());     // 2016