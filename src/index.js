let x = 25;
var isPrime = true;

for (let i = 2; i < x; i++) {
    if (x % i == 0) {
        isPrime = false;
        console.log(i);
    }
};

if (isPrime == false) {
    console.log(`${x} is not a Prime Number`);
} else {
    console.log(`${x} number is prime`);
}












