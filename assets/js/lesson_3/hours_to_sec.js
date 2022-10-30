const hoursInput = +prompt('Enter an hour you want to convert into seconds');
const hoursToSec = (hoursInput * 60) *60;
alert(`You have ${hoursToSec} in ${hoursInput} hours`)

// or another we can use "const hoursToSec = hoursInput * 3600;" in second line, I guess.
