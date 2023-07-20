"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle_1 = require("./Vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.setEngineNumber = function (engineNo) {
        this.engineNo = engineNo;
    };
    Car.prototype.getCarInfo = function (car) {
        console.log("Details of the car: Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", ManufacturedYear: ").concat(this.manufactureYear));
        this.getOperability(this.isElectric);
    };
    return Car;
}(Vehicle_1.Vehicle));
var car = new Car();
car.noOfWheels = 4;
car.brand = "Tesla";
car.model = "1234";
car.manufactureYear = "2022";
car.setEngineNumber('1A2B3C');
car.getCarInfo(car);
