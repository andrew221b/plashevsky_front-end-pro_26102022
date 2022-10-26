// 3 strings into 1 line

let userName = prompt('User\'s Name');
let userAge = prompt('User\'s Age');
let userCity = prompt('User\'s City');

let userInfo = `${userName} ${userAge} ${userCity}`;
alert(userInfo);

// Decompose number. It's my solution

let someNumber = prompt('Enter the number');
someNumber = String(someNumber);
let result = someNumber.split('').join(' ');

alert(result)


// Another method with the help of Google. But I don't understand everything is going on with RegEx, to bo honest :)

let num = prompt('Enter another number');
function spaceNumber(num) {
    return num.toString().replace(/(\d)(?=(\d)+([^\d]|$))/g, '$1 ');
}

alert(spaceNumber(num));

