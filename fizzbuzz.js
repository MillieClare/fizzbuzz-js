

// Here, we create our main function.
function fizzbuzz() {
    console.log('Welcome to FizzBuzz!');
    
    for (let i = 1; i <= 100; i++) {
        let nextNumber = '';
        if(i % 3 === 0) {
            nextNumber = 'Fizz';
        } 
        if(i % 5 === 0) {
            nextNumber += 'Buzz';
        } 
        if(i % 7 === 0){
            nextNumber += 'Bang';
        }
        if(nextNumber === ''){
            console.log(i)
        }
        console.log(nextNumber)
    }
}
// Now we run the main function...
fizzbuzz();
//If a number is a multiple of 7, print "Bang" instead of the number. 
//For numbers which are multiples of seven and three / five, append Bang
//to what you'd have printed anyway. (E.g. 3 * 7 = 21: "FizzBang").