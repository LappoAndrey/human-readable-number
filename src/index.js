module.exports = function toReadable(number) {
    let a = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let b = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let g = [
        "",
        "hundred",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion",
        "sextillion",
        "septillion",
        "octillion",
        "nonillion",
    ];

    const numberMssiv = String(number).split("");
    let rezult = "";
    if (number == 0) {
        return "zero";
    }
    if (number < 20) {
        rezult = a[number];
    } else if (number < 100) {
        if (numberMssiv[1] == 0) {
            rezult = b[numberMssiv[0]];
        } else rezult = b[numberMssiv[0]] + " " + a[numberMssiv[1]];
    } else {
        if (numberMssiv[1] == 0 && numberMssiv[2] == 0) {
            rezult = a[numberMssiv[0]] + " " + g[String(number).length - 2];
        } else if (
            numberMssiv[1] + numberMssiv[2] > 0 &&
            numberMssiv[1] + numberMssiv[2] < 20
        ) {
            rezult =
                a[numberMssiv[0]] +
                " " +
                g[String(number).length - 2] +
                " " +
                a[Number(numberMssiv[1] + numberMssiv[2])];
        } else if (numberMssiv[1] == 0 && numberMssiv[2] != 0) {
            rezult =
                a[numberMssiv[0]] +
                " " +
                g[String(number).length - 2] +
                " " +
                a[numberMssiv[2]];
        } else if (numberMssiv[2] == 0) {
            rezult =
                a[numberMssiv[0]] +
                " " +
                g[String(number).length - 2] +
                " " +
                b[numberMssiv[1]];
        } else
            rezult =
                a[numberMssiv[0]] +
                " " +
                g[String(number).length - 2] +
                " " +
                b[numberMssiv[1]] +
                " " +
                a[numberMssiv[2]];
    }

    return rezult; //console.log(rezult);
};

// toReadable(119);
