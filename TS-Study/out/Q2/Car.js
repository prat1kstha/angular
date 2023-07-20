"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    setEngineNumber(engineNo) {
        this.engineNo = engineNo;
    }
    getCarInfo(car) {
        console.log(`Details of the car: Brand: ${this.brand}, Model: ${this.model}, ManufacturedYear: ${this.manufactureYear}`);
        this.getOperability(this.isElectric);
    }
    constructor(brand, model, manufactureYear, noOfWheels, isElectric, engineNo) {
        super(noOfWheels, isElectric, engineNo);
        this.brand = "";
        this.model = "";
        this.manufactureYear = "";
        this.brand = brand;
        this.model = model;
        this.manufactureYear = manufactureYear;
    }
}
const car = new Car("Tesla", "1234", "2023", 4, true, "1A2B3C");
// car.setEngineNumber("1A2B3C");
car.getCarInfo(car);
//# sourceMappingURL=Car.js.map