"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    getOperability() {
        console.log(`Vehicle runs on ${this.isElectric ? "Electricity" : "Fuel"}`);
    }
    getNoOfWheels() {
        console.log(`Car has ${this.noOfWheels} wheels.`);
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map