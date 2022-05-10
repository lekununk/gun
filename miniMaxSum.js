function miniMaxSum(arr) {
    // Write your code here
    let sortedArray = arr.sort((a,b) => a-b);
    let emptyArray = [];
    let sumF = 0;
    let sumL = 0;

        for (let i = arr.length-1; i >= 0; i--) {
        sumF += sortedArray[i]
    }
    console.log(sumF-sortedArray[arr.length-1],sumF-sortedArray[0])
}
