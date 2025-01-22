const displayZARCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-ZA', {
        style: "currency",
        currency: 'ZAR',
        minimumFractionDigits: 2
    });

    return formatter.format(num);
}

export default displayZARCurrency;
