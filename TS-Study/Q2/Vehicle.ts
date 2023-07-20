import { IVehicle } from "./IVehicle";

class Vehicle implements IVehicle {
    noOfWheels: number;
    isElectric: boolean;
    protected engineNo: string;

    getOperability(isElectric: boolean) {
        console.log(`Vehicle runs on ${this.isElectric ? "Electricity" : "Fuel"}`);
    }

    constructor(noOfWheels: number, isElectric: boolean, engineNo: string) {
        this.noOfWheels = noOfWheels;
        this.isElectric = isElectric;
        this.engineNo = engineNo;
    }

}

export { Vehicle };

