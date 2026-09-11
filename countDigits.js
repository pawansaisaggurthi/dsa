/*
Count the number of digits in a number.

Logic:
If we keep dividing a number by 10 (ignoring the remainder), 
each division removes the last digit.  
The number of times we can do this before the number becomes 0 
is equal to the total number of digits.

Example: 259

259 / 10 = 25   → count = 1
25  / 10 = 2    → count = 2
2   / 10 = 0    → count = 3 (stop here)

So, total digits = 3
*/

function findDigits(n) {

//want to handle nagitive numbers also then use Math.abs(n) so its convert to positive number

if(n==0) return "1"
 
Math.abs(n)
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(findDigits(3223323)); // Output: 7
