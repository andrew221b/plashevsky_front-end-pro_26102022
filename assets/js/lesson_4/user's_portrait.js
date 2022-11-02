/**
 * Get user birth date.
 * I could use here do...while as bellow. But decided to try only while loop here.
 * Maybe I made solution much more complicated then it should be, though.
 */

let userDateInput;

while (isNaN(userDateInput) || userDateInput >= 2022) {
    userDateInput = Number(prompt(`What is your birth date? \n
Leave 0 if you don't want tell us your birth date`, 0));
}

if (userDateInput === 0) {
    alert("What a pity, you didn't add your birth date!")
}


//Get user's city

let userCityInput = prompt(`Which city do you live? \n
Leave this field empty if you don't want tell us where do you live`);

do {
    if (isNaN(userCityInput) || userCityInput === "") {
        break
    } else {
        userCityInput = prompt(`You've entered invalid value. Please try again. \n
Which city do you live? \n
Leave this field empty if you don't want tell us where do you live`);
    }

} while (!isNaN(userCityInput));

if (userCityInput === "") {
    alert("What a pity, you didn't add your city!")
}


//Get user's fav sport

let userFavSportInput = prompt(`What is you fav sport game? \n
Leave this field empty if you don't want tell what's your fav sport`);

do {
    if (isNaN(userFavSportInput) || userFavSportInput === "") {
        break
    } else {
        userFavSportInput = prompt(`You've entered invalid value. Please try again. \n
 What is you fav sport game? \n
 Leave this field empty if you don't want tell what's your fav sport`);
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
} else {
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
} else {
    userFavSportResult = "You didn't add your fav sport"
}



// Show information

alert(`${userAgeResult}\n
${userCityResult}\n
${userFavSportResult}`)




