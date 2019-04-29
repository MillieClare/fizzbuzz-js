

// Here, we create our main function.
function fizzbuzz() {
    console.log('Welcome to FizzBuzz!');

    for (let i = 1; i <= 1000; i++) {
        let nextNumber = [];
        if (i % 3 === 0) {
            nextNumber.push('Fizz');
        }
        if (i % 5 === 0) {
            nextNumber.push('Buzz');
        }
        if (i % 7 === 0) {
            nextNumber.push('Bang');
        }
        if (i % 11 === 0) {
            nextNumber = ['Bong'];
        }
        if (i % 13 === 0){
            if(nextNumber === ['Fizz']){
                nextNumber.push('Fezz');
            } else if(nextNumber[0] === 'Buzz' || nextNumber[0] === 'Bang' || nextNumber[0] === 'Bong'){
                nextNumber.unshift('Fezz');
            } else {
                nextNumber.push('Fezz');
            }
        }
        if (nextNumber.length === 0) {
            console.log(i);
        } else {
            console.log(nextNumber.join(''));
        }
    }
}
// Now we run the main function...
fizzbuzz();
//If a number is a multiple of 7, print "Bang" instead of the number.
//For numbers which are multiples of seven and three / five, append Bang
//to what you'd have printed anyway. (E.g. 3 * 7 = 21: "FizzBang").