const firstInt = +prompt('Enter first number');
const secondInt = +prompt('Enter second number');

if (!isNaN(firstInt) && !isNaN(secondInt)) {
    const add = firstInt + secondInt;
    const sub = firstInt - secondInt;
    const mult = firstInt * secondInt;
    const div = firstInt / secondInt; 
    
    const result = `Result \n${firstInt}+${secondInt}=${add} \n${firstInt}-${secondInt}=${sub} \n${firstInt}*${secondInt}=${mult} \n${firstInt}/${secondInt}=${div}`
    
    alert(result);
} else (alert("You've entered invalid value"))
