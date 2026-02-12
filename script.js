// ---------------- selecting html element -------------------
const swapBtn = document.querySelector('.swap');
const convertBtn = document.querySelector('.convert-btn');

const inputAmountEl = document.querySelector('.input-amount');
const fromCurrencyEl = document.querySelector('.from-currency');
const toCurrencyEl = document.querySelector('.to-currency');
const result = document.querySelector('#result');

const key = '3229adba4653b81cc0f04222';

function fetchData() {
    const url = `https://v6.exchangerate-api.com/v6/${key}/latest/${fromCurrencyEl.value}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new console.error('could not fetch data');

            } return response.json();
        })
        .then(data => {
            const currencyCode = Object.keys(data.conversion_rates);
            //---------------------- add currency to select options ---------------------
            currencyCode.forEach(code => {
                const option1 = document.createElement("option");
                option1.value = code;
                option1.textContent = code;
                fromCurrencyEl.appendChild(option1);

                const option2 = document.createElement("option");
                option2.value = code;
                option2.textContent = code;
                toCurrencyEl.appendChild(option2);
            });

        })
        .catch(error => console.log(error))
}

//-------------- swap the currency ---------------
function swapCurrency() {
    const temp = fromCurrencyEl.value;
    fromCurrencyEl.value = toCurrencyEl.value;
    toCurrencyEl.value = temp;
}
//------------- convert function ----------------
function exchange(){
   const inputAmount = inputAmountEl.value;
   const toCurrency = toCurrencyEl.value
   const fromCurrency = fromCurrencyEl.value
    const url = `https://v6.exchangerate-api.com/v6/${key}/latest/${fromCurrencyEl.value}`;
    if (inputAmount === '') {    
        return
    }
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new console.error('could not get data');
        }
        return response.json();
    })
    .then(data=>{
        let rate = data.conversion_rates[toCurrency];
        let converted = rate * inputAmount;
        
        result.textContent =`${converted.toFixed(2)} ${toCurrency}`
    })
}

swapBtn.addEventListener('click', swapCurrency);
convertBtn.addEventListener('click', exchange);
inputAmountEl.addEventListener('input', exchange);
fromCurrencyEl.addEventListener("change", exchange)
toCurrencyEl.addEventListener("change", exchange)

exchange();
fetchData();


