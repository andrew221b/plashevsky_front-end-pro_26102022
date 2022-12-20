const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]


// 1. Find sum and quantity of positive numbers

const sumPositive = (array) => {

    const arrFiltered = array.filter(value => value > 0)
    const sumPosArr = arrFiltered.reduce((a, b) => a + b,
        0)
    const result = `Quantity of positive values: ${arrFiltered.length} | Sum of positive values: ${sumPosArr}`

    return result
}

console.log(sumPositive(arr))

// 2-3. Find min and max element of arr

const min = (array) => {
    const minValue = Math.min(...array)
    const result = `MIN value is ${minValue}, index = ${array.indexOf(minValue)}`
    return result
}

const max = (array) => {
    const maxValue = Math.max(...array)
    const result = `MAX value is ${maxValue}, index = ${array.indexOf(maxValue)}`
    return result
}

console.log(min(arr))
console.log(max(arr))


// 4. Find quantity of negative numbers.

const negativeQuantity = (array) => {
    const arrFiltered = array.filter(value => value < 0)
    return arrFiltered.length
}

console.log(`Quantity of negative numbers: ${negativeQuantity(arr)}`)

/**
 * Was eager to try other methods. Here I've created counter as you show on previous lesson, just for practice 
 */

const incrementor = () => {
    let counter = 1;

    return () => {
        return counter++
    }
}

const incrementNeg = incrementor()

const countNegAndPos = (array) => {
    const obj = {}

    array.forEach(element => {
        if (element < 0) {
            obj.negative = incrementNeg()
        }
    });

    return obj
}

console.log(countNegAndPos(arr))

// Another solution. Also decided to count positive numbers here 

const countValues = (array) => array.reduce(function (elementObj, value) {

    if (value < 0) {
        elementObj.negative = ++elementObj.negative || 1;
    } else if (value > 0) {
        elementObj.positive = ++elementObj.positive || 1;
    }

    return elementObj;
}, {});

console.log(countValues(arr));


// 5. Find quantity of odd positive elements

const odd = (array) => {
    const oddNumbers = array.filter(num => num % 2 !== 0 && num > 0)
    return oddNumbers.length
}

console.log(`Quantity of positive odd numbers: ${odd(arr)}`)

// 6. Find quantity of even positive elements


const even = (array) => {
    const evenNumbers = array.filter(num => num % 2 === 0 && num > 0)
    return evenNumbers.length
}

console.log(`Quantity of positive even numbers: ${even(arr)}`)

// 5-6. Two tasks into one function. Find quantity of positive odd and even elements

const posOddEvenQuantity = (array) => {
    const obj = {}
    const arrFiltered = array.filter(value => value > 0)

    obj.odd = arrFiltered.reduce((acc, element) => {return acc + element % 2}, 0)
    obj.even = arrFiltered.length - obj.odd;
    return obj
}

console.log(posOddEvenQuantity(arr))

// 7. Find sum of positive even elements

const sumOfPosEven = (array) => {
   return array.reduce((total, num) => (num > 0 && num % 2 === 0) ? total + num : total, 0)
} 

console.log(sumOfPosEven(arr))

// 8. Find sum of positive odd elements

const sumOfPosOdd = (array) => {
   return array.reduce((total, num) => (num > 0 && num % 2 !== 0) ? total + num : total, 0)
} 

console.log(sumOfPosOdd(arr))

// 9. Multiply all positive numbers

const multOfPosOdd = (array) => {
    return array.reduce((total, num) => (num > 0) ? total * num : total, 1)
 } 

 console.log(multOfPosOdd(arr))

 // 10. Find highest element of array. Other elements eauate to 0

 const highestElement = (array) => {
    
    const maxEl = Math.max(...array)
    const result = array.map(element => {
        return element !== maxEl ? 0 : element
    })
    return result
 }

console.log(highestElement(arr))










