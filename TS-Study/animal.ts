import { LivingThings, doSomething } from "./livingthing";

/* Class */
export class Animal implements LivingThings {
    // Properties
    private breed: string;
    protected type: string;
    legs: number;
    isHuman: boolean = false;

    // Constructor
    constructor(t: string, b: string, l: number) {
        this.type = t;
        this.breed = b;
        this.legs = l;
    }

    // Function
    feed() {
        console.log(`${this.type} is eating.`);
    }
}

doSomething();