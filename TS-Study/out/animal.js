"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const livingthing_1 = require("./livingthing");
/* Class */
class Animal {
    // Constructor
    constructor(t, b, l) {
        this.isHuman = false;
        this.type = t;
        this.breed = b;
        this.legs = l;
    }
    // Function
    feed() {
        console.log(`${this.type} is eating.`);
    }
}
exports.Animal = Animal;
(0, livingthing_1.doSomething)();
//# sourceMappingURL=animal.js.map