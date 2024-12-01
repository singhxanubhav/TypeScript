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

interface User {
    firstName: string;
    lastName: string;
    age: number,
    email?: string
};

function isLegal(user: User){
    if(user.age > 18){
        return true
    }else {
        return false
    }
    
}

function greet(user: User){
    console.log("Hello," + user.firstName);
    
}

isLegal({
    firstName: "Anubhav",
    lastName: "Singh",
    age: 20
})

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

