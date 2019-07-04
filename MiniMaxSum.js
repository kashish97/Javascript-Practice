'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
function numberAs(a, b) {
    return a - b;
}
// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var n = arr.length;
    var sum = 0, sum1 = 0, sum2=0;
    var arr1 = arr.sort(numberAs);
    for (var i = 0; i < n; i++){
        sum +=arr[i] 
    }
    sum1 = sum - arr[n-1];
    sum2 = sum - arr[0];

    process.stdout.write("" + sum1+ " "+ sum2);
   
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
