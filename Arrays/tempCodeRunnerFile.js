const myString = 'Hello'

function reverseString(string){
    let stringArr = string.split('')
    // console.log(stringArr)
    let reversedStr = []

    for(let i = stringArr.length - 1; i >= 0; i--){
        reversedStr.push[i]
    }
    return reversedStr.join('')
}

console.log(reverseString(myString))