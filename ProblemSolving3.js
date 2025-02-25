//Q3:
// Create a function to find the sum of an array of integers using recursion .


let arr_1 = [1, 2, 3, 4, 5];

function sum(arr) {
    if (arr.length === 0) {
        return 0; 
    }
    return arr[0] + sum(arr.slice(1));
}

console.log(sum(arr_1)); 
