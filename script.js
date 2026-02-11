const key = 'fcecf16a847a48fddb7ee17d';
const url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`

// ---------------- selecting html element -------------------
const swapBtn = document.querySelector('.swap');
const convertBtn = document.querySelector('.convert-btn');

const inputAmount = document.querySelector('.input-amount');
const fromCurrency = document.querySelector('.from-currency');
const toCurrency = document.querySelector('.to-currency');

const result = document.querySelector('#result');

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new console.error('could not fetch data');

        } return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))

    