/**
 * Correct me if I'm wrong. 
 * Because I'm worrying about I don't understand correctly what I found in the Internet
 * We use switch(true) if we assume that our expression isn't === to any cases.
 * In other words all of conditions considering as false
 * So if one of our conditions became true
 * we are going to stop iteration through cases and show result.
 */

let numOrStr = prompt('input number or string');

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

// Another one

let numOrString = prompt('input number or string');

switch (isNaN(+numOrString) || String(numOrString).trim()) {
    case 'null':
        console.log('ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    case true:
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!');
}
