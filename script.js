function miniMaxSum(arr) {
    // Write your code here
    const last = arr.length - 1
    const sortArr = arr.sort((a, b) => a - b)
    const minArr =sortArr.slice(0, last)
    const maxArr = sortArr.slice(1)
    const min = minArr.reduce((a, b) => a + b)
    const max = maxArr.reduce((a, b) => a + b)
    console.log(min + ' ' + max)
    
}
miniMaxSum([2, 4, 6, 1, 7, 2])

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] === 0) {
            zero++
        } else {
            negative++
        }   
    }
    console.log((zero / arr.length).toFixed(6))
    console.log((positive / arr.length).toFixed(6))
    console.log((negative / arr.length).toFixed(6))
    
}

plusMinus([1,1,0,-1,-1])