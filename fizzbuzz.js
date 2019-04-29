function fizzbuzz(number) {
    console.log('Welcome to FizzBuzz!');

    for (let i = 1; i <= number; i++) {
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
            if(nextNumber[0] === 'Fizz' || nextNumber.length === 0){
                nextNumber.push('Fezz');
            } else if(nextNumber[0].startsWith('B')){
                nextNumber.unshift('Fezz');
            }
        }
        if (i % 17 === 0){
            nextNumber.reverse();
        }
        if (nextNumber.length === 0) {
            console.log(i);
        } else {
            console.log(nextNumber.join(''));
        }
    }
}

fizzbuzz(40);
