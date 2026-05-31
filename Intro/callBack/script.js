const formater = (local, currency, value) => {
  let formatedValue = new Intl.NumberFormat(local, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formatedValue;
};

const printHtml = (finalTip) => {
  const tipTable = document.createElement("table");
  tipTable.innerHTML = `
    <tr>
      <td>Original Sum:</td>
      <td>${formater("de-DE", "EUR", finalTip.sum)}</td>
    </tr>
    <tr>
      <td>Tip:</td>
      <td>${formater("de-DE", "EUR", finalTip.tip)}</td>
    </tr>
    <tr>
      <td>Total:</td>
      <td>${formater("de-DE", "EUR", finalTip.total)}</td>
    </tr>
  `;
  document.body.appendChild(tipTable);
};

const tipCalculator = (sum, precnt, callback) => {
  let tip = sum * (precnt / 100);
  let total = sum + tip;
  const finalTip = {
    sum: sum,
    tip: tip,
    total: total,
  };
  callback(finalTip);
};
tipCalculator(100, 10, printHtml);
