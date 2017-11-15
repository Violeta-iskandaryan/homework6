// JavaScript source code
const ind = function (str, index) {
    if (index === 0) {
        return "";
    }
    return str[index - 1] + ind(str, index - 1);

}
const reverse = function (str) {
    return ind(str, str.length);
}
console.log(reverse("viola"));