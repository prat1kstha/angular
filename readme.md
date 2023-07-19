# All assignments

## Q1: Write TS function which takes Person object type as argument and print its details to console
```ts

type Person = { name: string, age: number, isMale: boolean };
const person3: Person = { name: 'Pratik', age: 25, isMale: true };

const printPersonDetails = function (person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.isMale ? "Male" : "Female"}
`);
}

printPersonDetails(person3);

```

## Q2: Think of a real world example following
    * class A have 2 properties: one public, one private
    * interface IA has 2 function definitions
    * class B implements A
    * class C extends A
    * Each class/interface should be on its own file and export/import them when needed
