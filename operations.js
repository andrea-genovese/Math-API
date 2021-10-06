

class Ops {
    fact(n) {
        if (n <= 0) {
            return 1;
        }
        return n * this.fact(n - 1);
    }
    isPrime(n) {
        console.log(`checking if ${n} is prime...`);
        if (n % 2 === 0 && Math.abs(n) !== 2) return false;
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                console.log(`it was divisible by ${i}`);
                return false;
            }
        }
        return true;
    }
}
module.exports = new Ops();