function aVeryBigSum(ar) {
    // Write your code here

    // First solution:
    // const arraySum = ar.reduce((accumulator, numbers) => {
    //     accumulator += numbers
    //     return accumulator;
    // }, 0);
    // return arraySum;

    // Second solution:
    let total=0
    for(let i=0;i<ar.length;i++){
    total += ar[i]
}
    return total
}
