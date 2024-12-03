// function greet(firstName: string){
//     console.log("Hello, " + firstName);

// }

// greet("Anubav")

// function sum(a: number, b:number): number{
//     return a + b
// }

// console.log(sum(3, 6));

// function isLegal(age: number) {
//     if (age > 18) {
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(isLegal(2));

// function runAfter1s(fn: ()=>void){
//     setTimeout(fn, 1000)
// }

// runAfter1s(function(){
//     console.log("hello");

// })

// interface

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string;
// }

// function isLegal(user: User) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function greet(user: User) {
//   console.log("Hello," + user.firstName);
// }

// isLegal({
//   firstName: "Anubhav",
//   lastName: "Singh",
//   age: 20,
// });

// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202

// // you can't doing using this
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer",
// };



// // interface ❌
// // type☑️

// function maxValue(arr: number[]) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(maxValue([1, 2, 3]));


// important :
// what is difference between type and interface in typescript


// // enum
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.

//     if(keyPressed == Direction.Up)
// }
// doSomething(Direction.Up)


// *******************************
// type Input = number | string;

// function firstEl(arr: Input){
//     return arr[0];
// }

// const value = firstEl(["Anubhav"])
// value.toUpperCase() // not givin the answer

// to solving this problem 

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// console.log(output1.toUpperCase)


// solving this question


function firstEl<T>(arr: T[]){
    return arr[0];
}

const value = firstEl<string>(["Anubhav", "Singh"])
const value2 = firstEl(["Anubhav","kumar", "Singh"])
const value3 = firstEl([1, 2, 3])

console.log(value.toUpperCase());

