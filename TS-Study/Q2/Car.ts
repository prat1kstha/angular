import { Vehicle } from "./Vehicle";

class Car extends Vehicle {
    brand: string;
    model: string;
    manufactureYear: string;

    setEngineNumber(engineNo) {
        this.engineNo = engineNo;
    }

    getCarInfo(car) {
        console.log(`Details of the car: Brand: ${this.brand}, Model: ${this.model}, ManufacturedYear: ${this.manufactureYear}`);
        this.getOperability(this.isElectric);
    }
}

const car = new Car();
car.noOfWheels = 4;
car.brand = "Tesla"
car.model = "1234";
car.manufactureYear = "2022";
car.setEngineNumber('1A2B3C');


car.getCarInfo(car);

