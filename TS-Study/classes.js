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
/* Class */
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(t, b, l) {
        this.type = t;
        this.breed = b;
        this.legs = l;
    }
    // Function
    Animal.prototype.feed = function () {
        console.log("".concat(this.type, " is eating."));
    };
    return Animal;
}());
/* Enum */
var Gender;
(function (Gender) {
    Gender["Male"] = "m";
    Gender["Female"] = "f";
    Gender["Others"] = "o";
})(Gender || (Gender = {}));
/* Generics */
var wrapInt = function (value) {
    return [value];
};
var wrapString = function (value) {
    return [value];
};
var wrapBoolean = function (value) {
    return [value];
};
console.log(wrapInt(10));
console.log(wrapString("Ten"));
console.log(wrapBoolean(true));
var wrapValue = function (value) {
    return [value];
};
console.log(wrapValue(10));
console.log(wrapValue("Ten"));
console.log(wrapValue(true));
// Inheritance
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mammal;
}(Animal));
// Instantiate
var dog = new Animal('Dog', 'Husky', 4);
dog.feed();
// const cat = new Animal();
// cat.isHuman = false;
// console.log(cat.isHuman);
/* Variable declaration for dynamic type */
var z = 'abc';
z = 123;
