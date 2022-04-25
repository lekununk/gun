function diagonalDifference(arr) {
    // Write your code here
    const arrSize = arr.length;
    let firstItem = 0
    let secondItem = 0;
    let finalAnswer = 0;

    if (arrSize > 1) {
     for (let i =  0; i < arrSize; i++) {
            firstItem += arr[i][i]
            secondItem += arr[i][arrSize -1 - i] 
     }
        return (firstItem * -1) > (secondItem * -1)? (firstItem * -1)-(secondItem * -1) : (secondItem * -1) - (firstItem * -1)
    // }   return finalAnswer = ((firstItem * -1) - (secondItem * -1))
        } else {
            return 0;
        }
    return finalAnswer
}
