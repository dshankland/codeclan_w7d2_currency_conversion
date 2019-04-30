import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      euroConversionValue: 1,
      euroToSelectedCurrencyRate: 1,
      somethingConversionValue: 1,
      somethingToEuroCurrencyRate: 1,
      fromConversionValue: 1,
      fromConversionToEuroRate: 1,
      toConversionRate: 1
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
        return (this.euroConversionValue * this.euroToSelectedCurrencyRate);
      },
      somethingToEuroConversion: function(){
        return (this.somethingConversionValue / this.somethingToEuroCurrencyRate);
      },
      somethingToSomethingConversion: function(){
        return ((this.fromConversionValue / this.fromConversionToEuroRate) * this.toConversionRate);
      }
    },
    mounted(){
      // get the currencies using getCurrencies method
      this.getCurrencies()
    },
    filters: {
      toTwoDecPlaces: function (value) {
        return value.toFixed(2);
      }
    }
  })
})