const url = 'https://api.nbp.pl/api/exchangerates/tables/a/';

const select = document.querySelector('.currencies');
const button = document.querySelector('.btn');
const input = document.querySelector('.input-value');
const currencyConverted = document.querySelector('.pln-converted')



const getCurrencies = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => convertValue(data))
    .catch((err) => console.log(err));
}

button.addEventListener('click', getCurrencies)

const convertValue = (data) => {
  const selectVal = select.value;
  const inputVal = input.value;
  const mid = data[0].rates.find(element => element.code === selectVal).mid;
  const converted = countThePln(mid, inputVal);
  return currencyConverted.innerHTML = converted; 
}

const countThePln = (foreignCurrency, domesticCurrency) => {
  const count = foreignCurrency * domesticCurrency
  return count.toFixed(2) * 1;
};



