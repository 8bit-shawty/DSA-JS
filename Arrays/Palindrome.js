/**
 * Palindromes
 * If the reverse string is equal to the original one, then that word is a palindrome
 * 
 * cddc  --->  cddc (palindrome)
 * abba ---> abba (palindrome)
 * Hello ---> olleH (not)
 */

const myString = 'abcd'

function isPalindrome(string){
    const stringCopy = string.split('')
    // console.log(stringCopy)
    let palindrome = []
    for(let i = stringCopy.length -1; i >= 0; i--){
        palindrome.push(stringCopy[i])
        // return palindrome
    }
    if(palindrome.join('') === stringCopy.join('')){
        console.log(stringCopy.join(''), " is a palindrome")
    } else{
        console.log("not a palindrome")
    }
    // console.log(palindrome.join(''))
}

isPalindrome(myString)

//Simpler solution
const palindrome = (str) => str.split('').reverse().join('') === str;

console.log(palindrome('racecar'))