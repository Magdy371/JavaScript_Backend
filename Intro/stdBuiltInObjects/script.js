const formater = (local, currency, value) => {
  let formatedValue = new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formatedValue;
};

const tipCalculator = (sum, precnt) => {
  let tip = sum * (precnt / 100);
  let total = sum + tip;
  return `
  Original Sum: ${formater("de-DE", "EUR", sum)}\n
  Tip: ${formater("de-DE", "EUR", tip)}\n
  Total: ${formater("de-DE", "EUR", total)}
  `;
};
console.log(tipCalculator(100, 10));
