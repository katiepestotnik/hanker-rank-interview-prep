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
// miniMaxSum([2, 4, 6, 1, 7, 2])

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

// plusMinus([1, 1, 0, -1, -1])

// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45




function pillars(num_pill, dist, width) {
    // your code here
    const centDistance = (((num_pill * dist) * 100))
    const actual = centDistance - (width *2)
    return actual
}
  
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

console.log(pillars(2, 20, 25))
//2000

function digitize(n) {
const arr = Array.from(String(n), Number).reverse()

}
  
console.log(digitize(348597))

function domainName(url){
    const shorten = url.split()
    const remove = shorten.slice(0, 6)

}
  
domainName("http://github.com/carbonfive/raygun")
//"github"

