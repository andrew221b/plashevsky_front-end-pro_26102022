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
 */



let taskNum

while (isNaN(taskNum) || taskNum <= 0) {
    taskNum = prompt('Enter a number');

    switch (String(taskNum)) {
        case '': alert('You have entered nothing');
            break;
        case 'null': alert('See you later');
        break;
        case Number(taskNum):
            alert("Cool! Let's see result");
            break;
        default: alert('You shall not pass! Enter the proper number')
    }
}


let taskThreeRes = [];

for (var i = 1; i <= 100; i++) {
    if (i * i <= taskNum)
        taskThreeRes.push(i);
}

alert(taskThreeRes.join(','))