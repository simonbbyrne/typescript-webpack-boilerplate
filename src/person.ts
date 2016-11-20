
export default class Person {

    constructor(private name: string, private age: number) {
    }

    getAge(): number {
        return this.age;
    }

    getName(): string {
        return this.name;
    }
}