
const array = [];

//Enter array values

let userInput = true;

while (userInput) {
    const addElement = prompt('Add element to array. When it is done press "Cancel"')
    if (addElement) {
        array.push(addElement)
    } else {
        userInput = confirm('If you added all elements press "Cancel"')
    }
}


console.log(array)
//Choose value to delete from array

const elementToDelete = prompt(`Choose element to delete: \n
${array.join('\n')}`)

//Function to delete value

function removeElement(value, arr) {
    value = arr.indexOf(elementToDelete)
    arr = arr.splice(value, 1)
    return arr
}

removeElement(elementToDelete, array)

console.log(array)

// Another solution

function removeItem(array, value){
    for(var i in array){
        if(array[i] === value){
            array.slice(i,1);
            break;
        }
    }
}

removeItem(array, elementToDelete)

console.log(array)

// But we can use this short solution, I guess

filteredArr = array.filter((x) => x !== elementToDelete)

console.log(filteredArr)

