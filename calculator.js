let ratesDate = document.getElementById("rates-date");
let usdRate = document.getElementById("usd-rate ");
let gbpRate = document.getElementById("gbp rate ");

fetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/')
    .then(res => res.json()).then(data =>{
    usdRate.innerText = data.rates[0].mid;
    ratesDate.innerText = "Dane na dzień : " + data.rates[0].effectiveDate;
})
fetch('https://api.nbp.pl/api/exchangerates/rates/a/gbp/')
    .then(res => res.json()).then(data =>{
    gbpRate.innerText = data.rates[0].mid;
})