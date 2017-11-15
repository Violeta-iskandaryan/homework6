// JavaScript source code
const star = function (num) {

    if (num === 0) {
        return "";
    }
    return "* " + star(num - 1);
}



const space = function (num) {
    if (num === 0) {
        return "";
    }
    return " *" + space(num - 1);
}

const stop = function (num, changing) {
    if (changing < 0 || changing === 0) {
        return "";
    }
    if (num % 2 === 0) {
        console.log(star(num));
        console.log(space(num));
        return stop(num, changing - 2);
    } else {
        if (changing === 1) {
            console.log(star(num));
            return "";
        }
        console.log(star(num));
        console.log(space(num));
        return stop(num, changing - 2);
    }
}


const real = function (k) {
    stop(k, k);
}
real(9);


