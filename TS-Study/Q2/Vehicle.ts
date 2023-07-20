import { IVehicle } from "./IVehicle";

class Vehicle implements IVehicle {
    noOfWheels: number;
    isElectric: boolean;
    protected engineNo: string;

    getOperability(isElectric: boolean) {
        console.log(`Vehicle runs on ${this.isElectric ? "Electricity" : "Fuel"}`);
    }

}

export { Vehicle };

