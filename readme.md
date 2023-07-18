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
