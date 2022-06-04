class Vehicle {
  constructor(make, model, year) {
    //properties
    this.make = make;
    this.model = model;
    this.year = year;
  }
  // methods
  honk() {
    return "Beep.";
  }
  toString() {
    return `the vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    //super calls the constructor from the Vehicle class.
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "vroom!!!!!!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  // add method.
  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "only vehicles are allowed in here";
    }
    if (this.vehicles.length >= this.capacity) {
      return "sorry, we're full";
    }
    this.vehicles.push(newVehicle);
    return "vehicle added!";
  }
}
