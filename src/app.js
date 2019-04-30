import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      euroConversionValue: 1,
      euroToSelectedCurrencyRate: 1,
      somethingConversionValue: 1,
      somethingToEuroCurrencyRate: 1
    },
    methods: {
      getCurrencies: function(){
        // lets fetch the data from the api and stick it in this.currencies
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(currencies => this.currencies = currencies)
      }
    },
    computed: {
      euroToSomethingConversion: function(){
        return (this.euroConversionValue * this.euroToSelectedCurrencyRate).toFixed(2);
      }
    },
    mounted(){
      // get the currencies using getCurrencies method
      this.getCurrencies()
    }
  })
})