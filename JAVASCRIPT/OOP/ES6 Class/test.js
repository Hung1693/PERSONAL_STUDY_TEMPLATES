class Building {
  constructor(numberOfFloors, yearLastInspected) {
    this.numberOfFloors = numberOfFloors;
    this.yearLastInspected = yearLastInspected;
  }

  addFloor() {
    this.numberOfFloors += 1;
  }

  needsInspection() {
    return new Date().getFullYear() - this.yearLastInspected > 10;
  }
}

class City {
  constructor(name) {
    this.name = name;
    this.buildings = [];
  }

  addBuilding(building) {
    this.buildings.push(building);
  }

  addFloorToAllBuildings() {
    this.buildings.forEach((building) => building.addFloor());
  }
}

const newYork = new City("New York City");
const empireState = new Building(102, 2014);

newYork.addBuilding(empireState);
newYork.addFloorToAllBuildings(); // Empire State Building gains a floor

const freedomTower = new Building(104, 2015);
newYork.addBuilding(freedomTower);
newYork.addFloorToAllBuildings(); // Both buildings gain a floor

console.log(empireState)