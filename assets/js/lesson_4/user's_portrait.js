// /**
//  * I know made solution much more complicated then it should be, 
//  * but I tried to add more checks, though. (I know it's too soon to use while loop)
//  * If I had more time, I've found more complex solution, maybe :)
//  */

//Add this variable for check

let valid = false

//Get user birth date.

let userDateInput = Number(prompt
    (`What is your birth date? \n
Leave 0 if you don't want tell us your birth date`, 0));

while (!valid) {
    if (isNaN(userDateInput) || userDateInput >= 2022) {
        userDateInput = Number(prompt(
            `You've entered invalid value. Please try again. \n
        What is your birth date \n
        Leave o if you don't want tell us your age`, 0));
    }
        else if (userDateInput === 0) {
        alert("What a pity, you didn't add your age!")
        valid = true
    } else (valid = true)
}

//Get user's city

let userCityInput = prompt(
    `Which city do you live? \n
Leave this field empty if you don't want tell us where do you live`);

while (!valid) {
    if (Number(userCityInput)) {
        userCityInput = prompt(
            `You've entered invalid value. Please try again. \n
        Which city do you live? \n
        Leave this field empty if you don't want tell us where do you live`);
    }
        else if (userCityInput === "" || userCityInput === null) {
        alert("What a pity, you didn't add your city!")
        valid = true
    } else (valid = true)
}


//Get user's fav sport

let userFavSportInput = prompt(
    `What is you fav sport game? \n
Leave this field empty if you don't want tell what's your fav sport`);

while (!valid) {
    if (Number(userFavSportInput)) {
        userFavSportInput = prompt(
            `You've entered invalid value. Please try again. \n
        What is you fav sport game? \n
        Leave this field empty if you don't want tell what's your fav sport`);
    }
        else if (userFavSportInput === "" || userFavSportInput === null) {
        alert("What a pity, you didn't add your fav sport!")
        valid = true
    } else (valid = true)
}


//Calc age

let userAgeResult;

if ((userDateInput !== 0)) {
    const currentDate = new Date().getFullYear();
    const userAgeCalc = currentDate - userDateInput;
    userAgeResult = `You're ${userAgeCalc} old`
} else (userAgeResult = "You didn't add age")

console.log(userDateInput)
console.log(typeof userDateInput)
// Check capitals

let userCityResult;

if (userCityInput === 'Kyiv') {
    userCityResult = 'You live in a capital of Ukraine'
} else if (userCityInput === 'Washington') {
    userCityResult = 'You live in a capital of USA'
} else if (userCityInput === 'London') {
    userCityResult = 'You live in a capital of UK'
} else if (userCityInput) {
    userCityResult = `You live in ${userCityInput}`
}
else {
    userCityResult = "You didn't add your city"
}


// Check fav sport

let userFavSportResult;

if (userFavSportInput === 'Basketball') {
    userFavSportResult = 'Cool! Wanna be as good as Michael Jordan?'
} else if (userFavSportInput === 'Box') {
    userFavSportResult = 'Cool! Wanna be as good as Muhammad Ali?'
} else if (userFavSportInput === 'Football') {
    userFavSportResult = 'Cool! Wanna be as good as David Beckham?'
} else if (userFavSportInput) {
    userFavSportResult = `Your fav sport is ${userFavSportInput}`
}
else {
    userFavSportResult = "You didn't add your fav sport"
}


// Show information

const finalInfo = [userAgeResult, userCityResult, userFavSportResult]

alert(finalInfo.join("\n"))



/**
 * Also I tried another way with 'switch'. Don't know maybe neither are correct :)
 * Here I use do...while loop. 
 * */ 

// Get birth date

let birthDate;
let birthDateResult;

do {
    birthDate = prompt('What is your birth date?')

    switch (birthDate) {
        case null:
        case "":
            alert("You chose not to mention your age")
            birthDateResult = ""
            break;
        default:
            const currentDate = new Date().getFullYear();
            birthDate = currentDate - birthDate;
            birthDateResult = `You're ${birthDate} years old`
    }
} while (isNaN(birthDate))


// Get city

let whichCity;
let whichCityResult;

do {
    whichCity = prompt("Which city do you live?")

    if (Number(whichCity)) {
        alert("Enter valid value,please")
    }

    switch (whichCity) {
        case null:
        case "":
            alert("You chose not to mention your city")
            whichCityResult = ""
            break;
        case "Kyiv":
            whichCityResult = ("You live in the caputal of Ukraine")
            break;
        case "Washington":
            whichCityResult = "You live in the caputal of USA"
            break;
        case "London":
            whichCityResult = "You live in the caputal of UK"
            break;
        default:
            whichCityResult = `You live in ${whichCity}`
    }
} while (Number(whichCity))


// Get fav sport

let whichSport;
let whichSportResult;

do {
    whichSport = prompt("What is your fav sport?")

    if (Number(whichSport)) {
        alert("Enter valid value,please")
    }

    switch (whichSport) {
        case null:
        case "":
            alert("You chose not to mention your fav sport");
            whichSportResult = "";
            break;
        case "Basketball":
            whichSportResult = "Cool! Wanna be as good as Michael Jordan?";
            break;
        case "Box":
            whichSportResult = "Cool! Wanna be as good as Muhammad Ali?";
            break;
        case "Football":
            whichSportResult = "Cool! Wanna be as good as David Beckham?";
            break;
        default:
            whichSportResult = `Your fav sport is ${whichSport}`;
    }
} while (Number(whichSport))


// Here I tried to check if all arrays is equal "" and show final message.

const finalResultArr = [birthDateResult, whichCityResult, whichSportResult];

function allEmpty() {
    return finalResultArr.every(element => element === "")
}

if (allEmpty(finalResultArr)) {
    alert("You didn't add any info")
} else (
    alert(finalResultArr.join("\n"))
)








