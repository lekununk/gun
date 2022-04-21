function compareTriplets(a, b) {
    // Write your code here
    let aSize = 0;
    let bSize = 0;

    for (let i = 0; i < 3; i ++) {
        if (a[i] > b [i]) {
            aSize += 1
    } else if (a[i] < b[i]) {
        bSize += 1
    }
}
    return [aSize, bSize]
}