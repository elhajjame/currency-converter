const key = 'fcecf16a847a48fddb7ee17d';
const url = `https://v6.exchangerate-api.com/v6/${key}/latest/USD`

// ---------------- selecting html element -------------------
const swapBtn = document.querySelector('.swap');
const convertBtn = document.querySelector('.convert-btn');

const inputAmount = document.querySelector('.input-amount');
const fromCurrency = document.querySelector('.from-currency');
const toCurrency = document.querySelector('.to-currency');

const result = document.querySelector('#result');
function fetchData() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new console.error('could not fetch data');

            } return response.json();
        })
        .then(data => {
            console.log(data);
            const currencyCode = Object.keys(data.conversion_rates)
            console.log(currencyCode);

            fromCurrency.innerHTML = "";
            toCurrency.innerHTML = "";

            //---------------------- add currency to select options ---------------------
            currencyCode.forEach(code => {
                const option1 = document.createElement("option");
                option1.value = code;
                option1.textContent = code;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement("option");
                option2.value = code;
                option2.textContent = code;
                toCurrency.appendChild(option2);
            });

        })
        .catch(error => console.log(error))
}

//-------------- swap the currency ---------------
function swapCurrency() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
}
swapBtn.addEventListener('click', swapCurrency);

fetchData();


