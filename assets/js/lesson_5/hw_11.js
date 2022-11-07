// 1.Show number from 20 to 30 with 0.5 step

let firstTask = [];

for (i = 20; i <= 30; i += 0.5) {
    firstTask.push(i)
}

console.log(firstTask.join(','));

// 2. Convert dollars to uah

let usdValue = 27;
let uahResult = [];

for (i = 10; i <= 100; i += 10) {
    uahResult.push(i * usdValue)
}

console.log(uahResult.join('\n'))

/**
 * 3. Set a number (taskNum). Show all square numbers between 1 and 100 smaller than 'taskNum' number
 * Hope I've understood the task right.
 * Also I tried to add more features to this task, and use what we've learned.
 * Hope there're no critical mistakes.
 */

let taskNum = prompt('Enter a number');

while (isNaN(Number(taskNum))) {
    taskNum = prompt("You shall not pass! Enter the proper number");
}

switch (true) {
    case taskNum === '': alert('You have entered nothing');
        break;
    case taskNum === null: alert('See you later');
        break;
    default: alert('Ok, prepare to see the result')
}

let taskThreeRes = [];

if (Number(taskNum)) {
    for (var i = 1; i <= 100; i++) {
        if (i * i <= taskNum)
            taskThreeRes.push(i);
    }

    alert(taskThreeRes.join(', '))
}


// 4. Set a number and check if it's a prime number

let numInput = prompt('Enter a number');
let primeCheck = true;

while (isNaN(Number(numInput))) {
    numInput = prompt("You shall not pass! Enter the proper number");
}

switch (true) {
    case numInput === '': alert('You have entered nothing');
        break;
    case numInput === null: alert('See you later');
        break;
}

for (i = 2; i <= numInput; i++) {
    if (numInput % i === 0) {
        primeCheck = false
    }
    break;
}

if (primeCheck) {
    alert(`${numInput} is a prime number`)
} else {
    alert(`${numInput} is not a prime number`)
}


