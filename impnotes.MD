/*
JavaScript Math Methods

1. Math.round(x)

   - Rounds a number to the nearest integer.
   - Decimal part < 0.5 → rounds down.
   - Decimal part >= 0.5 → rounds up.

   Examples:
   Math.round(10.3)  // → 10
   Math.round(10.6)  // → 11
   Math.round(10.5)  // → 11


2. Math.floor(x)

   - Rounds down to the nearest integer.
   - For positive numbers, removes the decimal part.
   - Important: With negative numbers, it goes toward -Infinity.

   Examples:
   Math.floor(10.3)  // → 10
   Math.floor(10.9)  // → 10
   Math.floor(-10.3) // → -11


3. Math.ceil(x)

   - Rounds up to the nearest integer.
   - For positive numbers, moves to the next integer.
   - Important: With negative numbers, it goes toward +Infinity.

   Examples:
   Math.ceil(10.3)  // → 11
   Math.ceil(10.9)  // → 11
   Math.ceil(-10.3) // → -10


4. Math.abs(x)

   - Returns the absolute value.
   - Removes the negative sign.
   - Result is always positive or zero.

   Examples:
   Math.abs(-256)  // → 256
   Math.abs(305)   // → 305
   Math.abs(0)     // → 0


5. Math.max(...values)

   - Returns the largest value.

   Examples:
   Math.max(10, 20, 5)     // → 20
   Math.max(100, 50, 200)  // → 200


6. Math.min(...values)

   - Returns the smallest value.

   Examples:
   Math.min(10, 20, 5)     // → 5
   Math.min(100, 50, 200)  // → 50


7. Math.pow(base, exponent)

   - Returns a number raised to a power.
   - base^exponent

   Examples:
   Math.pow(2, 3)  // → 8
   Math.pow(5, 2)  // → 25

   Modern alternative:
   2 ** 3  // → 8


8. Math.sqrt(x)

   - Returns the square root of a number.

   Examples:
   Math.sqrt(25)  // → 5
   Math.sqrt(16)  // → 4
   Math.sqrt(2)   // → 1.414...


9. Math.random()

   - Returns a random decimal number between 0 (inclusive) and 1 (exclusive).
   - Range: 0 <= value < 1

   Examples:
   Math.random()
   // → 0.7345

   Random number from 0 to 9:
   Math.floor(Math.random() * 10)

   // → 0, 1, 2, ... 9


10. Math.trunc(x)

    - Removes the decimal part.
    - Does NOT round the number.

    Examples:
    Math.trunc(10.9)   // → 10
    Math.trunc(10.1)   // → 10
    Math.trunc(-10.9)  // → -10


11. Math.sign(x)

    - Returns the sign of a number.
    - Positive → 1
    - Negative → -1
    - Zero → 0

    Examples:
    Math.sign(10)   // → 1
    Math.sign(-10)  // → -1
    Math.sign(0)    // → 0


12. Math.cbrt(x)

    - Returns the cube root of a number.

    Examples:
    Math.cbrt(8)    // → 2
    Math.cbrt(27)   // → 3
    Math.cbrt(-8)   // → -2


13. Math.PI

    - Returns the value of PI.
    - Useful for circle calculations.

    Example:
    Math.PI
    // → 3.141592653589793


14. Math.E

    - Returns Euler's number.
    - Approximately 2.718.

    Example:
    Math.E
    // → 2.718281828459045




    /*
Number Digit Operations

1. value % 10

   - Gives the LAST digit of a number.

   Examples:

   123 % 10
   // → 3

   456 % 10
   // → 6

   789 % 10
   // → 9


2. Math.floor(value / 10)

   - Removes the LAST digit of a number.

   Examples:

   Math.floor(123 / 10)
   // → 12

   Math.floor(456 / 10)
   // → 45

   Math.floor(789 / 10)
   // → 78


REMEMBER:

   value % 10          → GET last digit
   Math.floor(value/10) → REMOVE last digit


Example:

   value = 12345

   value % 10
   // → 5          GET 5

   Math.floor(value / 10)
   // → 1234       REMOVE 5


Example:

   value = 123

   value % 10
   // → 3

   Math.floor(value / 10)
   // → 12


Common pattern:

   while (value > 0) {

       let digit = value % 10;
       // GET last digit

       value = Math.floor(value / 10);
       // REMOVE last digit
   }

*/

*/