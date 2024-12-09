/**
 * Big O
 * Big O notation helps us understand HOW LONG(Time Complexity) an algo will take to run or HOW MUCH(Space Complexity) memory it will need as the amount of data it handles grows.
 */

/**
 * O(n)
 * Signifies that the execution time of the algorithm grows LINEAR in proportion to the size of the INPUT DATA(n)
 */

const groceries = ['milk', 'bread', 'eggs', 'flour', 'cheese', 'sugar']

const searchForItem = (item) => {
    for(let i = 0; i < groceries.length; i++){
        if(groceries[i] === item){
            console.log(`Found: ${item}`)
        }
    }

    for(let j = 0; j < groceries.length; j++){
        if(groceries[j] === item){
            console.log(`Found: ${item} 2`)
        }
    }

    //n + n = 2n or O(2n)
    //Drop the constant so it becomes O(n)
}

searchForItem('eggs');

/**
 * O(1)
 * O(1) aka CONSTANT time, signifies that the execution time of an algo remains CONSTANT regardless of the input size.
 */

const numbers = [1, 2, 3, 4, 5];

const getElement = (arr, index) => arr[index]

console.log(getElement(numbers, 0))

/**
 * O(n^2)
 * Indicates that the algo's execution time grows quadratically with the size of the input data (represented by n).
 */
const numbers2 = [1, 2, 3, 4, 5]

function findPairs(arr){
    
    //O(n^2)
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            console.log(`Pair: ${arr[i]} , ${arr[j]}`);
        }
    }

    //O(n)
    for(let q = 0; q < arr.length; q++){
        console.log('--------', q)
    }

    //If we combine all the 'O' operations it becomes O(n^2 + 2)
    //O(n^2) is a Dominant term
    //'n' is a Non-Dominant term
    //So we remove the "non-dominant" term and we're only left with O(n^2)
    //This way, we simplify our bigO
}

console.log(findPairs(numbers2))