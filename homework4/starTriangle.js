// JavaScript source code
const star = function (num2) {
    if (num2 === 0) {
        return "";
    }
    return "*" + star(num2 - 1);
}
const space = function (num2) {
    if (num2 === 0) {
        return "";
    }
    return " " + space(num2 - 1);
}

const combination = function (num1, num2) {
    if (num2 === 0) {
        return "";
    }
    console.log(space(num1 - num2) + star(2 * num2 - 1));
    return combination(num1, num2 - 1);
}

const mix = function (k) {
    combination(k, k);
}
mix(5);