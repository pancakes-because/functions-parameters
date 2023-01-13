/* 

    What you need to do is complete the following tasks:

    1. Define a parameter that will hold the value of the original number.
    2. Divide that number by 4
    3. Return the quartered number
    4. Store the returned number in a variable
    5. Plug that variable into the parenthesis for the console.log()
    6. When you run the code, you should see the answer in the console.

*/ 

/* 

    Remember: If a function returns a value, you must store that value in a variable. 

*/ 

const quarterValue = (beginningNumber) => {

    const quartered = beginningNumber / 4 
    return quartered

}

// Invoke the function and store the return value

const result = quarterValue(100)

// Log the return value
console.log(`The result or returned value is ${result}.`) 

