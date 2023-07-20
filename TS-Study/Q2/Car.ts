import { Vehicle } from "./Vehicle";

class Car extends Vehicle {
    brand: string = "";
    model: string = "";
    manufactureYear: string = "";

    setEngineNumber(engineNo: string) {
        this.engineNo = engineNo;
    }

    getCarInfo(car: Car) {
        console.log(`Details of the car: Brand: ${this.brand}, Model: ${this.model}, ManufacturedYear: ${this.manufactureYear}`);
        this.getOperability(this.isElectric);
    }

    constructor(brand: string, model: string, manufactureYear: string, noOfWheels: number, isElectric: boolean, engineNo: string) {
        super(noOfWheels, isElectric, engineNo);
        this.brand = brand;
        this.model = model;
        this.manufactureYear = manufactureYear;
    }
}

const car = new Car("Tesla", "1234", "2023", 4, true, "1A2B3C");
// car.setEngineNumber("1A2B3C");


car.getCarInfo(car);

