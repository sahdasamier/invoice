"use strict";
// let mixed:any[] = [];
// mixed.push("mario");
// mixed.push (false);
// mixed.push(23);
// console.log(mixed);
// let greet : (a: string , b:string) =>void; //anything other avoid 
// greet = (name:string , greeeting :string)=>{
//     console.log(`${name}says ${greeeting}`);
// }
// let logDetails:(obj:{name:string ,age: number})=> void;
// logDetails =(ninja:{name:string,age:number})=>{
//     console.log(`${ninja.name} is ${ninja.age}years old`);
// }
// const anchor = document.querySelector('a');
// console.log(anchor);
// const anchor = document.querySelector('a')!;
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
class Invoice {
    // initialize the class to the real value 
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //create a method 
    format() {
        return `${this.client}ows${this.amount}for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the mario website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'youshi';
invTwo.amount = 600;
console.log(invoices);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
