const divideHelp = (dividend, divisor) => {
    if (dividend - divisor === 0) return [1, 0]
    if (dividend - divisor < 0) return [0, divisor - dividend]
    if (dividend - divisor - divisor === 0) return [2, 0]
    if (dividend - divisor - divisor < 0) return [1, dividend - divisor]

    let [quotient, remainder] = divideHelp(dividend, divisor + divisor)
    quotient += quotient

    if (remainder - divisor >= 0) {
        quotient += 1
        remainder -= divisor
    }

    return [quotient, remainder]
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const [quotient, remainder] = divideHelp(Math.abs(dividend), Math.abs(divisor))
    const res = ((divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0) ? -1 : 1) * quotient
    return Math.max(Math.min(2147483647, res), -2147483648) // truncate to signed int range [−2^31, 2^31 − 1]
};