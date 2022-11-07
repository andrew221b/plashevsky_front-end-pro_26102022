// 1.Show number from 20 to 30 with 0.5 step

let firstTask = [];

for (i = 20; i <= 30; i += 0.5) {
    firstTask.push(i)
}

console.log(firstTask.join(', '));

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

switch (taskNum) {
    case '':
        alert('You have entered nothing');
        break;
    case null:
        alert('See you later');
        break;
    default:
        alert('Ok, prepare to see the result')
}



if (Number(taskNum)) {

    let taskThreeRes = [];

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



/**
 * Decided to make a simple 'Rock, Paper, Scissors' game for practice.
 *  Maybe with stupid decisions, but I tried :)
 * There will be 10 rounds and alert with the scores and winner in the end
 * I want from user to enter only three words, I tried make an array and use .some method.
 * It would be great if you could help me with this :)
 */

let userCount = 0;
let aiCount = 0;

for (i = 1; i <= 10; i++) {

    // Here we get inputs

    let userTurn;
    let userChoice;
    let aiTurn;

    userTurn = prompt(`Choose one: \n
    Rock \n
    Paper \n
    Scissors`)

    if (!userTurn || Number(userTurn)) {
        while (!userTurn || Number(userTurn)) {
            userTurn = prompt(`Enter valid value \n
            Rock \n
            Paper \n
            Scissors`)
        }
    }

    userChoice = userTurn.toLowerCase()

    aiTurn = Math.floor(Math.random() * 3);

    switch (aiTurn) {
        case 0:
            aiTurn = 'rock'
            break;
        case 1:
            aiTurn = 'paper';
            break;
        case 2:
            aiTurn = 'scissors';
            break;
    }

    // Here we calculate who is the winner and add scores

    let gameRes = `You chose ${userChoice} \n
        Computer chose ${aiTurn}`


    switch (true) {
        case userChoice === 'rock':
            if (aiTurn === 'paper') {
                alert(`${gameRes} \n 
                You lose this round! \n`)
                ++aiCount
            } else {
                alert(`${gameRes} \n 
                You win this round! \n`)
                ++userCount
            }
            break;

        case userChoice === 'paper':
            if (aiTurn === 'scissors') {
                alert(`${gameRes} \n 
                    You lose this round! \n`)
                ++aiCount
            } else {
                alert(`${gameRes} \n 
                    You win this round! \n`)
                ++userCount
            }
            break;

        case userChoice === 'scissors':
            if (aiTurn === 'rock') {
                alert(`${gameRes} \n 
                    You lose this round! \n`)
                ++aiCount
            } else {
                alert(`${gameRes} \n 
                    You win this round! \n`)
                ++userCount
            }
            break;
        case userChoice === aiTurn:
            alert(`${gameRes} \n
                Tie!`)
            ++aiCount
            ++userCount
            break
    }
}

let totalScore = `Your scores: ${userCount} \n
Computer scores: ${aiCount}`

if (userCount > aiCount) {
    alert(`${totalScore} \n
    You win the game!`)
} else if (userCount < aiCount) {
    alert(`${totalScore} \n
    You lose the game!`)
} else (alert(`${totalScore} \n
    Tie!`))