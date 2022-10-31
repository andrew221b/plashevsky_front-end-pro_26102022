const hoursInput = +prompt('Enter an hour you want to convert into seconds');

if (!isNaN(hoursInput)) {
    const hoursToSec = (hoursInput * 60) *60;
    alert(`You have ${hoursToSec} in ${hoursInput} hours`)
} else (alert("You've entered invalid value"))


// or another we can use "const hoursToSec = hoursInput * 3600;" in second line, I guess.
