/**
 * Reverse String 
 * 'Hello' ---> 'olleH'
 * 
 * 1. Convert string to array(split method)
 * 2. Reverse the array (reverse method)
 * 3. Convert array back to string ( join method)
 */

const myString = 'Fantastic'

function reverseString(string){
    let stringArr = string.split('')
    // console.log(stringArr)
    let reversedStr = []

    for(let i = stringArr.length - 1; i >= 0; i--){
        reversedStr.push(stringArr[i])
        // console.log(reversedStr)
    }
    return reversedStr.join('')
}

console.log(reverseString(myString))

//simpler version
const reverseString2 = (str) => str.split("").reverse().join("")

console.log(reverseString2('Hello'))
