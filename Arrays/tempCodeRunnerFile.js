const myString = 'abba'

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