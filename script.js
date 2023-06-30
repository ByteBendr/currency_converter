document.addEventListener('DOMContentLoaded', () => {
    const convertButton = document.getElementById('convert-btn');
    const amountInput = document.getElementById('amount');
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const resultDiv = document.getElementById('result');
  
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/';
  
    const convertCurrency = () => {
      const amount = parseFloat(amountInput.value);
      const fromCurrency = fromSelect.value;
      const toCurrency = toSelect.value;
  
      fetch(`${apiUrl}${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
          const conversionRate = data.rates[toCurrency];
          const convertedAmount = (amount * conversionRate).toFixed(2);
  
          resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
          console.log('Error fetching exchange rates:', error);
        });
    };
  
    convertButton.addEventListener('click', convertCurrency);
  });
  