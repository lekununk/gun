function staircase(n) {
    // Write your code here
    let markS = '#';
    let blankS = ' ';
    let answerS = '';

    for (let i = n; i > 0; i--) {
        answerS = blankS.repeat(i-1) + markS.repeat((n-i)+1)
        console.log(answerS)
    }
}