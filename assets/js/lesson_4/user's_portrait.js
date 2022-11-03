/**
 * Get user birth date.
 * I know made solution much more complicated then it should be, 
 * but I tried to add more checks, though.
 * If I had more time, I've found more complex solution, maybe :)
 */

let userDateInput;

while (isNaN(userDateInput) || userDateInput >= 2022) {
    userDateInput = Number(prompt(`What is your birth date?
Leave 0 if you don't want tell us your birth date`, 0)).join("\n");
}

if (userDateInput === 0) {
    alert("What a pity, you didn't add your birth date!")
}


//Get user's city

let userCityInput = prompt(`Which city do you live?
Leave this field empty if you don't want tell us where do you live`).join("\n");

do {
    if (isNaN(userCityInput) || userCityInput === "") {
        break
    } else {
        userCityInput = prompt(`You've entered invalid value. Please try again.
Which city do you live?
Leave this field empty if you don't want tell us where do you live`).join("\n");
    }

} while (!isNaN(userCityInput));

if (userCityInput === "") {
    alert("What a pity, you didn't add your city!")
}


//Get user's fav sport

let userFavSportInput = prompt(`What is you fav sport game?
Leave this field empty if you don't want tell what's your fav sport`).join("\n");

do {
    if (isNaN(userFavSportInput) || userFavSportInput === "") {
        break
    } else {
        userFavSportInput = prompt(`You've entered invalid value. Please try again.
 What is you fav sport game?
 Leave this field empty if you don't want tell what's your fav sport`).join("\n");
    }

} while (!isNaN(userFavSportInput));

if (userFavSportInput === "") {
    alert("What a pity, you didn't add your fav sport!")
}


//Calc age

let userAgeResult;
const currentDate = new Date().getFullYear();
const userAgeCalc = currentDate - userDateInput;

if ((userDateInput !== 0)) {
    userAgeResult = `You're ${userAgeCalc} old`
} else (userAgeResult = "You didn't add age")


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
} else if (userFavSportInput === 'Footbal') {
    userFavSportResult = 'Cool! Wanna be as good as David Beckham?'
} else if (userFavSportInput) {
    userFavSportResult = `You live in ${userFavSportInput}`
    }
 else {
    userFavSportResult = "You didn't add your fav sport"
}


// Show information

const finalInfo = [userAgeResult, userCityResult, userFavSportResult]

alert(finalInfo.join("\n"))



// Also I tried another way with 'switch'. Don't know maybe neither are correct :)

// Get birth date

let birthDate;
let birthDateResult;

do {

    birthDate = prompt('What is your birth date?')

    switch (birthDate) {
        case null:
        case "":
            alert("You chose not to mention your age")
            birthDate = ""
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


// Here I tried to check if all arrays is empty and show final message.

const finalResultArr = [birthDateResult, whichCityResult, whichSportResult];

if (finalResultArr.includes(undefined || "")) {
    alert("You didn't add any info")
} else (
    alert(finalResultArr.join("\n"))
)