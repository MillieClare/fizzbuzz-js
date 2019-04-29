

// Here, we create our main function.
function fizzbuzz() {

    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // if multiple of 3 & 5
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            // if multiple of 3
            console.log('Fizz');
        } else if (i % 5 === 0) {
            // if multiple of 5
            console.log("Buzz");
        } else
            // if anything else
            (console.log(i));
    }


}

// Now we run the main function...
fizzbuzz();
