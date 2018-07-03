
// RULES

// 1. -- num < 0 -> return false
// 2. -- num # digits > 16 --> return false
// 3. -- from the right add the digits, 
//    --    double every second digit, 
//    --    if the doubled digit is >= 10 then add the two digits to get the sum (i.e. 7 + 7 = 14 --> 5)
//    --     
// 4. -- After all numbers have been summed, if the sum is divisible by 10 then return true
// 5. -- Else, return false


// example: num = 174
// 4 + (7 -- 14 = 5) + 1 = 10 which is divisible by 10
export default num => (num < 0 || num.toString().length > 16 || luhnSum(num) % 10 !== 0) ? false : true

export function luhnSum(num) {
    let sum = 0;
    num.toString().split('').reverse().forEach((element, index) => {
        const parsedInt = Number(element)
        if (index % 2 === 0) {
            sum += parsedInt
        } else {
            (parsedInt * 2).toString().split('').forEach(element => {
                sum += Number(element);
            })
        }
    });
    return sum;
}

