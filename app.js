class Person {
    #id;
    #name;
    constructor(id,name){
        this.#id = id;
        this.#name = name;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    toString(){
        return `id: ${this.#id}; name: ${this.#name}`
    }
}
const person = new Person(123, 'Moshe');
//console.log(`Person is ${person}`)
class Employee extends Person{
    #salary;
    constructor(id, name, salary){
        super(id, name);
        this.#salary = salary;
    }
    computeSalary(){
        return this.#salary
    }
    toString(){
        return super.toString() + ` salary: ${this.computeSalary()}`
    }
}
const person2 = new Employee(124, "Sarah", 5000);
//console.log(`Person2 is ${person2}`);
//console.log(typeof(person2)) //just object
//console.log(person2.constructor.name) //only this way JS allow geeting constructor name
class Child extends Person{
    #kindergarten
    constructor(id, name, kindergarten){
        super(id, name);
        this.#kindergarten = kindergarten;
    }
    getKindergarten(){
        return this.#kindergarten;
    }
    toString(){
        return super.toString() + ` kindergarten: ${this.#kindergarten}`
    }
}
const person3 = new Child(125, 'Yakov', 'Shalom');
//console.log(`Person3 is ${person3}`);

class WageEmployee extends Employee{
    #hours
    #wage
    constructor(id, name, salary, hours, wage){
        super(id, name, salary);
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary(){
        return super.computeSalary() + this.#hours * this.#wage
    }
}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
//console.log(`Person4 is ${person4}`)

/*****************************Homework 17 solution */
const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', "Boker"),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
function countOfPersonType(persons, type) {
    return persons.filter(n => n.constructor.name === type).length;
}
function computeSalaryBudget(persons) {
   //return persons.filter(n => n.constructor.name !== "Child").reduce((sum, per) => sum + per.computeSalary(), 0);
   const allEmployees = persons.filter(p => !!p.computeSalary);
   const salaryValues = allEmployees.map(p => p.computeSalary())
   return salaryValues.reduce((res, cur) => res + cur);
}
//const allEmployees = persons.filter(p => !!p.computeSalary);
//return allEmployees.reduce((res, cur) => res + cur.computeSalary(), 0); 
function countChildrenGindergarten(persons, kindergarten) {
    return persons.reduce((count, per) => {per.constructor.name === "Child" && per.getKindergarten() === kindergarten && count++;
    return count}, 0)
}
console.log(countOfPersonType(persons, 'Child'));
console.log(computeSalaryBudget(persons));
console.log(countChildrenGindergarten(persons, 'Shalom'));

function testOutput(fun, expected){
    console.log(`function: ${fun.name} ; expected result: ${expected} ; actual result: ${fun()}`)
}
//testOutput(person4.computeSalary.bind(person4), 2000);
testOutput(computeSalaryBudget.bind(undefined, persons), 3000)
testOutput(countOfPersonType.bind(undefined, persons, 'Child'), 3)