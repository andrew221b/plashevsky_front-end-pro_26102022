function reverse(str) {
    const normalize = str.replace(/\W/g, '').toLowerCase();
    return normalize.split('').reverse().join('')
}

function SingleCharacterPalindrome(str) {
    if (str === reverse(str)) return "OK"

    for (i = 0; i < str.length; i++) {
        const part = str.substring(0, i) + str.substring(i + 1, str.length)
        const reversedPart = reverse(part)
        
        if ( part === reversedPart) {
            return "Remove One"
        }
    }

    return "Not possible"
}

console.log(SingleCharacterPalindrome("abba")); // "OK"
console.log(SingleCharacterPalindrome("abbaa")); // "Remove One"
console.log(SingleCharacterPalindrome("abbaab")); // "Not Possible"
console.log(SingleCharacterPalindrome("madmam")); // "Remove One"
console.log(SingleCharacterPalindrome("raydarm")); // "Not Possible"
console.log(SingleCharacterPalindrome("hannah")); // "OK"