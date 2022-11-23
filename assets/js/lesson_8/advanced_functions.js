// 1.FIND AVERAGE FUNCTION

let arrayAverage = []

// This was my first decision
/**
 * @param {number} arr 
 * @returns {number} 
 */

function arrayAverageNum(arr) {
    const onlyNumArray = arr.filter(el => typeof el === "number")
    const result = onlyNumArray.reduce((a, b) => a + b, 0) / onlyNumArray.length
    return result
}

console.log(arrayAverageNum(arrayAverage))

/**
 * But then I thought, what if user will mix string and num input
 * and numbers will be as string.
 * And tried this
 */

//User input

let userInput = true;

while (userInput) {
    const addElement = prompt('Add element to array. When it is done press "Cancel"')
    if (addElement) {
        arrayAverage.push(addElement)
    } else {
        userInput = confirm('If you added all elements press "Cancel"')
    }
}

//Function to calc avg

/**
 * @param {string} arr 
 * @returns {number}
 */

function arrayAverageNum(arr) {
    const onlyNumArray = arr.filter(Number).map(Number)
    const result = onlyNumArray.reduce((a, b) => a + b, 0) / onlyNumArray.length
    return result
}

console.log(arrayAverageNum(arrayAverage))


/**
 * Another one. I could use traditional if statement, but visualy I didn't like it :)
 * 
 * @param {string} array 
 * @returns {number} avg
 */

function calculate(array) {
    const newArr = []
    array.forEach(e => parseInt(e) ? newArr.push(Number(e)) : newArr)
    const avg = newArr.reduce((a, b) => a + b, 0) / newArr.length
    return avg
}

const avgFromArr = calculate(arrayAverage)

console.log(avgFromArr)


// 2. DoMath FUNCTION

// Set operators
const OPERATIONS = {
    PLUS: "+",
    MINUS: "-",
    MULTY: "*",
    DIV: "/",
    REMAINDER: "%",
    SQUARE: "^"
}


//User input
const getFirstNum = Number(prompt('Enter first number'))
const getSecondNum = Number(prompt('Enter second number'))
const getOperator = prompt(`Chose operator ${Object.values(OPERATIONS).join(' | ')}`)


// DEfine operations
/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

const isPlus = (a, b) => a + b;
const isMinus = (a, b) => a - b;
const isMulty = (a, b) => a * b;
const isDiv = (a, b) => a / b;
const isRemainder = (a, b) => a % b;
const isSquare = (a, b) => Math.pow(a, b);

const operationMethod = (operation) => {

    switch (operation) {
        case OPERATIONS.PLUS:
            return isPlus
        case OPERATIONS.MINUS:
            return isMinus
        case OPERATIONS.MULTY:
            return isMulty
        case OPERATIONS.DIV:
            return isDiv
        case OPERATIONS.REMAINDER:
            return isRemainder
        case OPERATIONS.SQUARE:
            return isSquare
        default:
            throw Error('You did smth wrong')
    }
}


// Calculate result

/**
 * @param {number} x 
 * @param {string} znak 
 * @param {number} y 
 * @returns {number}
 */

const calc = (x, znak, y) => {
    const calculate = operationMethod(znak)

    return calculate(x, y)
}

const result = calc(getFirstNum, getOperator, getSecondNum)

console.log(result)


// 3. SET LENGTHS OF MAIN AND NESTED ARRAYS. AND SET VALUES TO THEIR ELEMENTS

// Length input

const mainArrLength = Number(prompt('Set length of main array'))
const subArrLength = Number(prompt('Set length of sub array'))


// Generate arrays and their elements

/**
 * @param {number} parentArr 
 * @param {number} childArr 
 * @returns {array}
 */

function nestedArr(parentArr, childArr) {
    let arr = new Array(parentArr);

    for (var i = 0; i < parentArr; i++) {
        arr[i] = new Array(childArr).fill(0).map(i => i = prompt(`Set value in ${childArr} sub array`)); //make counter
    }

    return arr
}

console.log(nestedArr(mainArrLength, subArrLength));


// Tried to make smth with recursive func, to add the same element to all arrays

const arrLength = Number(prompt('Set length of main array'))
const innerArrLength = Number(prompt('Set length of sub array'))
const bothArrLength = [arrLength, innerArrLength]
const fillElement = prompt('Set value to all array elements')


/**
 * @param {number} arrSize 
 * @param {*} value 
 * @returns 
 */

function makeArray(arrSize, value) {
    if (arrSize.length === 0) {
        return value;
    }

    let result = [];
    let innerSize = arrSize.slice(1);
    let newArr = makeArray(innerSize, value);

    for (i = 0; i < arrSize[0]; i++) {
        result.push(newArr);
    }

    return result;
}

var myArray = makeArray(bothArrLength, fillElement);

console.log(myArray)
