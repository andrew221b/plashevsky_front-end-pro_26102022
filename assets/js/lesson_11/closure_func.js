const incrementor = () => {
let sum = 0;

return (value) => {
    sum += value
    return sum
}
}

const addNum = incrementor();

console.log(addNum(3))
console.log(addNum(5))
console.log(addNum(20))


// One-line solution

const addPrevNum = (value = 0) => (sum) => value += sum

const addNum2 = addPrevNum();

console.log(addNum2(3))
console.log(addNum2(5))
console.log(addNum2(20))
console.log(addNum2(5))