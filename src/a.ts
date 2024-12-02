function greet(firstName: string){
    console.log("Hello, " + firstName);

}

greet("Anubav")

function sum(a: number, b:number): number{
    return a + b
}

console.log(sum(3, 6));

function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));

function runAfter1s(fn: ()=>void){
    setTimeout(fn, 1000)
}

runAfter1s(function(){
    console.log("hello");

})

interface

interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet(user: User) {
  console.log("Hello," + user.firstName);
}

isLegal({
  firstName: "Anubhav",
  lastName: "Singh",
  age: 20,
});

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// you can't doing using this
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer",
};



// interface ❌
// type☑️

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));


// important :
// what is difference between type and interface in typescript
