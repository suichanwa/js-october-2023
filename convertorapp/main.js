import json from './current.json' assert { type: 'json' };

window.convertCurrency = function(baseCurrency) {
    const amountInput = parseFloat(document.getElementById(`amountInput${baseCurrency}`).value);
    const usdRate = json.current.USD;
    const eurRate = json.current.EUR;
    const jpyRate = json.current.JPY;

    const convertedUsd = amountInput * usdRate;
    const convertedEur = amountInput * eurRate;
    const convertedJpy = amountInput * jpyRate;

    document.getElementById('usdOutput').innerText = `Converted USD amount: ${convertedUsd.toFixed(2)}`;
    document.getElementById('eurOutput').innerText = `Converted EUR amount: ${convertedEur.toFixed(2)}`;
    document.getElementById('jpyOutput').innerText = `Converted JPY amount: ${convertedJpy.toFixed(2)}`;

}
