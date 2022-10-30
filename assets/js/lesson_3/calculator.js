const userAction = prompt("Choose what you want to do: 'add', 'sub', 'mult', 'div'")

if (userAction === 'add' || userAction === 'sub' || userAction === 'mult' || userAction === 'div') {
    const firstNum = +prompt('Enter first number');
    const secondNum = +prompt('Enter second number');
    const add = firstNum + secondNum;
    const sub = firstNum - secondNum;
    const mult = firstNum * secondNum;
    const div = firstNum / secondNum;

    if (userAction === 'add') {
        alert(`${firstNum}+${secondNum}=${add}`)
    } else if (userAction === 'sub') {
        alert(`${firstNum}-${secondNum}=${sub}`)
    } else if (userAction === 'mult') {
        alert(`${firstNum}*${secondNum}=${mult}`)
    } else (alert(`${firstNum}/${secondNum}=${div}`));
} else {
    alert("You've entered invalid request. Please try again")
}








