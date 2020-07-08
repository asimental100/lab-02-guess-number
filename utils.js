export function compareNumbers (number1, number2) {
    if(Number(number1) === Number(number2)) {
        return 0;
    }
    if (Number(number1) < Number(number2)) {
        return -1;
    }
    if (Number(number1) > Number(number2)) {
        return 1;
    }
}