"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
/* Enum */
var Gender;
(function (Gender) {
    Gender["Male"] = "m";
    Gender["Female"] = "f";
    Gender["Others"] = "o";
})(Gender || (Gender = {}));
/* Generics */
const wrapInt = (value) => {
    return [value];
};
const wrapString = (value) => {
    return [value];
};
const wrapBoolean = (value) => {
    return [value];
};
console.log(wrapInt(10));
console.log(wrapString("Ten"));
console.log(wrapBoolean(true));
// Using a generic type
const wrapValue = (value) => {
    return [value];
};
console.log(wrapValue(10));
console.log(wrapValue("Ten"));
console.log(wrapValue(true));
// Inheritance
class Mammal extends animal_1.Animal {
}
// Instantiate
const dog = new animal_1.Animal('Dog', 'Husky', 4);
dog.feed();
// const cat = new Animal();
// cat.isHuman = false;
// console.log(cat.isHuman);
//# sourceMappingURL=classes.js.map