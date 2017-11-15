// JavaScript source code
const pow = function (base, n) {

    if (n === 0 || n < 0) {
        return 1;
    }
    return base * pow(base, n - 1);

}

console.log(pow(4, 3));