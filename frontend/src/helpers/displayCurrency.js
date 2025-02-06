/**
 * Formats a number as South African Rand (ZAR) currency.
 *
 * @param {number} num - The number to be formatted.
 * @returns {string} The formatted currency string.
 */
const displayZARCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-ZA', {
        style: "currency",
        currency: 'ZAR',
        minimumFractionDigits: 2
    })

    return formatter.format(num)
    
}

export default displayZARCurrency