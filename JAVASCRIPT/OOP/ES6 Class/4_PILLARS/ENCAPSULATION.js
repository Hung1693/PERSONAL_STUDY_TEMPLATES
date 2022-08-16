class Building {
    constructor(floors) {
        //add _property = private, restrict access
        this._floors = floors;
        this._owners = [];
    }
    //allow access with the format 
    get floors() {
        return this._floors;
    }

    //set need get to mutate
    get owners() {
        return this._owners;
    }
    set owners(newOwner) {
        return this._owners.push(newOwner);
    }
    
}

const myHouse = new Building(3);
console.log(myHouse.floors);
myHouse.owners = 'hung';
console.log(myHouse.owners);
