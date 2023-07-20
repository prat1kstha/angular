"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    getOperability(isElectric) {
        console.log(`Vehicle runs on ${this.isElectric ? "Electricity" : "Fuel"}`);
    }
    constructor(noOfWheels, isElectric, engineNo) {
        this.noOfWheels = noOfWheels;
        this.isElectric = isElectric;
        this.engineNo = engineNo;
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map