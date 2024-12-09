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