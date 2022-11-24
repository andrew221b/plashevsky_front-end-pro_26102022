const arrInputMsg = 'Set the length of an array';
const errorMsg = 'You must enter the number';
const elementInputMsg = 'Put ellements in array';

// Check if user entered valid value and set array length

const mainArray = [];

let arrayLengthInput = prompt(arrInputMsg);

while (isNaN(arrayLengthInput) || arrayLengthInput <= 0) {
    arrayLengthInput = prompt(`${arrInputMsg} \n
${errorMsg}`)
}

/**
 * Add elements to array.
 * I could put 'counter' into 'for' cycle, but I'll use it in another variation 
 * */

let counter = arrayLengthInput;

for (i = 1; i <= arrayLengthInput; i++) {
    const elementInput = prompt(`${elementInputMsg} \n
    Elements to add - ${counter--}`)

    mainArray.push(elementInput)
}

console.log(mainArray)

// Sort array, adding subarrays (numbers first)

let numArray = []
let strArray = []

mainArray.forEach(a => {
    if (Number(a)) {
        numArray.push(Number(a))
    } else {
        strArray.push(a)
    }
})

const sortedArray = numArray.slice().sort((a, b) => a - b).concat(strArray.slice().sort())

console.log(sortedArray)

// Delete elements from 2 to 4

sortedArray.splice(1, 3)

console.log(sortedArray)


/**
 * Also I tried to use parseInt to convert numbers, without creating subarrays
 * */

let testArray = []

for (i = 1; i <= arrayLengthInput; i++) {
    const arrayElement = prompt(`${elementInputMsg} \n
    Elements left - ${counter--}`)

    let convertToNum = parseInt(arrayElement, 10)

    if (!isNaN(Number(arrayElement))) {
        testArray.push(convertToNum)
    } else {
        testArray.push(arrayElement)
    }
}

const sortedTestArr = testArray.slice().sort()

console.log(testArray)
console.log(sortedTestArr)

// Splice sortedTestArr

sortedTestArr.splice(1, 3)

console.log(sortedTestArr)