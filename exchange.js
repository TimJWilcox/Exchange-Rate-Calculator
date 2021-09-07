
    // fetch() API

    let exchangeAPI = 'https://v6.exchangerate-api.com/v6/ac2b5b59533040657ac0e60b/latest/ZAR';

    async function getExchange(){
        // Fetch currency data
        let selectedCurrency = document.getElementById("exchangeOptions").value
        let currency = selectedCurrency.split('/')[0]
        let symbol = getCurrencySymbol(currency)

        let response = await fetch(exchangeAPI)
        let data = await response.json()

        let currencyValue = data.conversion_rates[currency]
        console.log(data.conversion_rates)
        let ZAR = document.getElementById("txtZAR").value
        
        let CalculatedExchange = CalcExchange(ZAR, currencyValue, symbol)
    }

    function CalcExchange (ZAR, currencyValue, symbol){
        let answerExchange = symbol + (ZAR * currencyValue).toFixed(2)
        let ExchangeAnswer = document.getElementById("exchangeAnswer");
        appendCurrency(ExchangeAnswer,answerExchange)
    }

    function getCurrencySymbol(currency){
        if (currency === "USD") return "$"
        if (currency === "GBP") return "£"
        if (currency === "JPY") return "¥"
        if (currency === "CAD") return "C$"
        if (currency === "CHF") return "CHF"
}

function appendCurrency(ExchangeAnswer,answerExchange){
    if (ExchangeAnswer) {
        ExchangeAnswer.innerHTML = answerExchange;
        return ExchangeAnswer
        } else {
        let textAnswer = document.createTextNode(answerExchange)
        let h1 = document.createElement('h1')
        h1.setAttribute('id', 'Answer')
        h1.appendChild(textAnswer)
        document.getElementById('exchangeAnswer').appendChild(h1)
        }
}  