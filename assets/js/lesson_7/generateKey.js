const characters = 'ABCDEFGHIGKLMNTOPRSTQVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
    let result = "";
    for (i = 0; i <= length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);
