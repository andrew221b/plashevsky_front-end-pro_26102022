let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]


let delChar = /[^0-9.]+/g;
const minBalance = 2000;

/**
 * Get phone numbers. I specify user.balance in 'for' cycle as Number. 
 * But it also works without it, though. Explain please this moment 
 * and should I forced it to be the Number here or it doesn't really matter?
 */

const usersPhones = []

/**
 * I decided to convert values iin original array here. 
 * Dk if it cause some troubles in real life, but there are no restrictions in the task :D
 */

for (i = 0; i < users.length; i++) {
    const user = users[i]
    user.balance = Number(user.balance.replace(delChar, ""))

    if (user.balance >= minBalance) {
        usersPhones.push(user.phone)
    }
}

console.log(`User's phone numbers with balance over 2000$: \n
${usersPhones.join('\n')}`)

// Balance sum 

const extractedBalance = users.map(a => {
    return Number(a.balance)
})

const balanceSum = extractedBalance.reduce((acc, balance) => {
    return acc + balance;
}, 0)

const formatedSum = Number(balanceSum.toFixed(2))

console.log(formatedSum)



/**
 * Another variation of getting phone numbers. 
 * I made homework at night, so it might be a little bit chaotic :) 
*/


// Functions to convert and make condition

formatBaltoNum = balance => {
    return Number(balance.replace(delChar, ""))
}

filtBal = user => {
    return formatBaltoNum(user.balance) > minBalance
}

// Filter and map array

const userPhoneNums = users.filter(filtBal).map(number => {
    return number.phone
})

console.log(userPhoneNums)

// Or we can console.log as single elemenets

userPhoneNums.forEach(user => {
    console.log(user)
})