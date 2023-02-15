let ratesDate = document.getElementById("rates-date");
let usdRate = document.getElementById("usd-rate ");
let gbpRate = document.getElementById("gbp rate ");

let stockxBtn = document.getElementById("stockx-btn")
let stockxPayout = document.getElementById("stockx-payout")
let stockxPln = document.getElementById("stockx-pln")

fetch('https://api.nbp.pl/api/exchangerates/rates/a/usd/')
    .then(res => res.json()).then(data =>{
    usdRate.innerText = data.rates[0].mid;
    ratesDate.innerText = "Dane na dzień : " + data.rates[0].effectiveDate;
})
fetch('https://api.nbp.pl/api/exchangerates/rates/a/gbp/')
    .then(res => res.json()).then(data =>{
    gbpRate.innerText = data.rates[0].mid;
})

function getStockxPrice()
{
    let stockxShip = 4.43;
    let price = document.getElementById("stockx").value;
    if(price.length===0)
    {
        alert("Enter the price")
        return
    }
    price = (price*0.88) - stockxShip;

    stockxPayout.innerText = "Stockx payout is :  " + price + " £"
    let rate = Number(gbpRate.innerText)
    price=price*rate
    stockxPln.innerText = "Payout in PLN is :  " + price + " zł"
}
stockxBtn.addEventListener("click",getStockxPrice);

let aliasBtn = document.getElementById("alias-btn");
let aliasPayout = document.getElementById("alias-payout")
let aliasPln = document.getElementById("alias-pln");

function getAliasPrice()
{
    let aliasShip = 12;
    let price = document.getElementById("alias").value;
    if(price.length===0)
    {
        alert("Enter the price")
        return
    }
    price = (price*0.905) - aliasShip;
    console.log(price)
    price *=0.97
    aliasPayout.innerText = "Alias payout is : " + price + " $"
    let rate = Number(usdRate.innerText);
    price*=rate;
    aliasPln.innerText = "Payout in PLN is : " + price + " zł"
}
aliasBtn.addEventListener("click",getAliasPrice)
