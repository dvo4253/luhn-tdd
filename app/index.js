
// RULES

// 1. -- num < 0 -> return false
// 2. -- num # digits > 16 --> return false
// 3. -- Add the numbers, 
//    --    from the right add the digits 
//    --    double every second digit, 
//    --    if the doubled digit is >= 10 then add the two digits to get the sum (i.e. 7 + 7 = 14 --> 5)
// 4. -- After all numbers have been summed, if the sum is divisible by 10 then return true
// 5. -- Else, return false


// example: num = 174
// 4 + (7 -- 14 = 5) + 1 = 10 which is divisible by 10
export default (num) => {
    const numStr = num.toString().split('').reverse().join('')
    const numLength = numStr.length
    let i = numLength - 1
    let sum = 0
    let isDoubled = false
    let calcNum

    if (num <= 0 || numLength > 16) return false

    do {
        calcNum = isDoubled ? parseInt(numStr[i]) * 2 : parseInt(numStr[i])
        isDoubled = !isDoubled
        sum += (calcNum > 9) ? calcNum - 9 : calcNum
        i--
    }
    while (i >= 0)

    if (sum % 10 === 0) return true

    return false
}

