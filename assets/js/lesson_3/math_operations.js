const firstInt = +prompt('Enter first number');
const secondInt = +prompt('Enter second number');


const add = firstInt + secondInt;
const sub = firstInt - secondInt;
const mult = firstInt * secondInt;
const div = firstInt / secondInt; 

const result = `Result \n${firstInt}+${secondInt}=${add} \n${firstInt}-${secondInt}=${sub} \n${firstInt}*${secondInt}=${mult} \n${firstInt}/${secondInt}=${div}`

alert(result);
