"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.getOperability = function (isElectric) {
        console.log("Vehicle runs on ".concat(this.isElectric ? "Electricity" : "Fuel"));
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
