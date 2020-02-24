module.exports = function toReadable(number) {
    let digits = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety'
    };

    let readeble = '';
    let numToString = '' + number;
    if (numToString.length == 1) {
        readeble = digits[number];
    }
    if (numToString.length == 2) {
        if (numToString[0] == 1) {
            readeble = digits[number];
        } else if (numToString[1] == 0) {
            readeble = digits[number];
        } else {
            readeble = digits[numToString[0] + '0'] + ' ' + digits[numToString[1]];
        }
    }
    if (numToString.length == 3) {
        if (number % 100 === 0) {
            readeble = digits[numToString[0]] + ' hundred';
        } else if (number % 100 < 10) {
            readeble = digits[numToString[0]] + ' hundred ' + digits[numToString[2]];
        } else if (number % 100 < 20) {
            readeble = digits[numToString[0]] + ' hundred ' + digits[numToString[1] + numToString[2]];
        } else if (number % 100 % 10 === 0) {
            readeble = digits[numToString[0]] + ' hundred ' + digits[numToString[1] + '0'];
        } else {
            readeble = digits[numToString[0]] + ' hundred ' + digits[numToString[1] + '0'] + ' ' + digits[numToString[2]];
        }
    }
    return readeble;
}