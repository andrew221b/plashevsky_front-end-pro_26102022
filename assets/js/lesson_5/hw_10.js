/**
 * I will give names for variables like taskOne, taskTwo , etc.
 * and add description to every new task
 */

// 1.Show numbers from 10 to 20 in one line

let taskOne = "";

for (let i = 10; i <= 20; i++) {
    taskOne += i + ",";
}

console.log(taskOne.replace(/,\s*$/, ""));

// Here's another variation using array

const taskOneVariation = [];

for (let i = 10; i <= 20; i++) {
    taskOneVariation.push(i);
}

console.log(taskOneVariation.join(", "));


//2. Square numbers from 10 to 20

const taskTwo = [];

for (let i = 10; i <= 20; i++) {
    const square = i * i;
    taskTwo.push(square)
}

console.log(taskTwo.join(", "))

// Here I tried to use Math.pow method.

let taskTwoVar = "";

for (let i = 10; i <= 20; i++) {
    taskTwoVar += Math.pow(i, 2) + ",";
}

console.log(taskTwoVar.replace(/,\s*$/, ""));


// 3. Multiply by 7

for (i = 1; i <= 10; i++) {
    console.log(`${i} * 7 = ${i * 7}`)
}

// Or we can try this solution :)

let taskThree = []

for (i = 1; i <= 10; i++) {
    taskThree.push(`${i} * 7 = ${i * 7}`)
}

console.log(`${taskThree.join("\n")}`)


// 4. Find sum of whole numbers from 1 to 15

let taskFour = 0;

for (i = 1; i <= 15; i++) {
    taskFour += i
}

console.log(`Answer is ${taskFour}`)

// Added prompt just for fun

let num = prompt('Enter whole number')
let taskFourVar = 0
const check = num < 0

if (check) {
   while (check) {
    num = prompt('Try again')
   }
} else {
    for (i = 1; i <= num; i++) {
        taskFourVar += i
    }
}

console.log(`Result is ${taskFourVar}`)


/**
 *  5. Find product of numbers from 15 to 35
 *  We can use here prompt to enter a number, and check
 *  if result is BigInt. If true we show result as bigint,
 *  if false as ordinary number. Am I right?
 * */

let taskFive = 1;

for (i = 15; i <= 35; i++) {
    taskFive *= i;
}

console.log(BigInt(taskFive))


//6.Find average of numbers from 1 to 500

let taskSix = [];

for (i = 1; i <= 500; i++) {
    taskSix.push(i)
}

const taskSixAverage = taskSix.reduce((a, b) => a + b, 0) / taskSix.length;
console.log(taskSixAverage)

// More complex solution of task 6

// Get user input

let taskSixValue = Number(prompt('Enter first value'))

while (!taskSixValue || taskSixValue <= 0) {
    taskSixValue = Number(prompt('Enter valid value'))
}

let taskSixSecValue = Number(prompt('Enter second value'))

while (!taskSixSecValue || taskSixSecValue <= 0) {
    taskSixSecValue = Number(prompt('Enter valid value'))
}

// Calculate average

let taskSixArr = []

for (let i = taskSixValue; i <= taskSixSecValue; i++) {
    taskSixArr.push(i);
}

let taskSixRes = taskSixArr.reduce((a, b) => a + b, 0) / taskSixArr.length;

alert(`Average of ${taskSixValue} and ${taskSixSecValue} = ${taskSixRes}`)


// 7. Find sum of even numbers between 30 and 80

let taskSeven = 0;

for (i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        taskSeven += i
    }
}

console.log(taskSeven)


// 8. Show all numbers between 100 and 200 multiple of 3

let taskEight = [];

for (i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        taskEight.push(i)
    }
}

console.log(taskEight.join(", "))


/** 
 * 9, 10, 11. Find all dividers of whole number. Calculate quanity
 * of even dividers and calculate their sum.
 * */

let wholeNum = Number(prompt('Enter the number'))

while (!wholeNum || wholeNum <= 0) {
    wholeNum = Number(prompt("Enter valid number! I'm begging you!"))
}

let isDivider = []
let evenDividers = [];
let dividerSum = 0;

for (i = 1; i <= wholeNum; i++) {
    if (wholeNum % i === 0) {
        isDivider.push(i)

        if (i % 2 === 0) {
            evenDividers.push(i)
            dividerSum += i
        }
    }
}

alert(`You've entered ${wholeNum} \n
It has this dividers: ${isDivider} \n
Several of them are even: ${evenDividers} \n
Sum of even dividers is ${dividerSum}`)


// 12. Print multiple table from 1 to 10

const startTable = 1;
const endTable = 10;

for (let i = startTable; i <= endTable; i++) {
    for (let j = startTable; j <= endTable; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

/**
 *  Tried to find solutions to print it in console like a table,
 *  but have a lack of knowledges to fully understand what's going on there :)
 */

// Solution from dima

 const startTabl = 1;
 const endTabl = 10;
 let result = [];
 for (let i = startTabl; i <= endTabl; i++) {
   let iArray = [];
   for (let j = startTabl; j <= endTabl; j++) {
     iArray.push(`${i} * ${j} = ${i * j}`);
   }
   result.push(iArray);
 }
 console.table(result);




